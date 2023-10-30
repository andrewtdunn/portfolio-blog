import * as THREE from "three";

import styles from "./hyperspace.module.scss";
import { useCallback, useContext, useEffect, useRef } from "react";
import NavigationContext from "../../../store/nav-context";
import SlideshowContext from "../../../store/slideshow-context";

type HyperspaceDetails = {
  camera: THREE.Camera | null;
  scene: THREE.Scene | null;
  renderer: THREE.WebGLRenderer | null;
  stars: THREE.Mesh[];
  speed: number;
  acceleration: number;
  accelerationRate: number;
  hyperspace: boolean;
  paused: boolean;
};

const Hyperspace = () => {
  const navigationCtx = useContext(NavigationContext);
  const slideCtx = useContext(SlideshowContext);
  const { isFocused } = slideCtx!;

  const mountRef = useRef<HTMLDivElement>(null);
  const requestIdRef = useRef<any>(null);

  const hyperspaceDetailRef = useRef<HyperspaceDetails>({
    camera: null,
    scene: null,
    renderer: null,
    stars: [],
    speed: 4,
    acceleration: 0.5,
    accelerationRate: 1.9,
    hyperspace: false,
    paused: false,
  });

  useEffect(() => {
    const fps = 30;
    var now;
    var then = Date.now();
    var interval = 1000 / fps;
    var delta;

    const animateStars = () => {
      const HYPERSPACE_SPEED = 4;
      const REGULAR_SPEED = 60;

      let hD = hyperspaceDetailRef.current;
      let targetSpeed = hD.hyperspace ? HYPERSPACE_SPEED : REGULAR_SPEED;
      if (!hD.hyperspace) {
        if (hD.speed < targetSpeed) {
          hD.speed += hD.acceleration * hD.accelerationRate;
        } else {
          hD.speed = targetSpeed;
        }
      } else {
        if (hD.speed > targetSpeed) {
          hD.speed -= hD.acceleration * hD.accelerationRate;
        } else {
          hD.speed = targetSpeed;
        }
      }

      for (var i = 0; i < hD.stars.length; i++) {
        let star = hD.stars[i];

        star.position.z += i / hD.speed;

        if (star.position.z > 1000) star.position.z = -2000;
      }
    };

    const renderAnimationScene = () => {
      const hD = hyperspaceDetailRef.current;
      hD.renderer!.render(hD.scene!, hD.camera!);
      animateStars();
    };

    function animate() {
      const hD = hyperspaceDetailRef.current;
      requestIdRef.current = requestAnimationFrame(animate);
      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        if (!hD.paused) {
          renderAnimationScene();
          then = now - (delta % interval);
        }
      }
    }

    const addSpheres = () => {
      console.log("addSpheres");
      const hD = hyperspaceDetailRef.current;
      for (let z = -1000; z < 1000; z += 10) {
        // make a sphere
        var geometry = new THREE.SphereGeometry(0.5, 3, 3);
        var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        var sphere = new THREE.Mesh(geometry, material);

        // give the sphere random x and y positions between -500 and 500
        sphere.position.x = Math.random() * 1000 - 500;
        sphere.position.y = Math.random() * 1000 - 500;

        // set the z position where it belongs in the loop
        sphere.position.z = z;

        // scale it up a bit
        sphere.scale.x = sphere.scale.y = 2;

        hD.scene!.add(sphere);
        hD.stars.push(sphere);
      }
    };

    function setup() {
      const hD = hyperspaceDetailRef.current;

      // camera
      hD.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      hD.camera.position.z = 5;

      // scene
      hD.scene = new THREE.Scene();

      // renderer
      hD.renderer = new THREE.WebGLRenderer({ alpha: true });
      // st the size of the render
      hD.renderer.setSize(window.innerWidth, window.innerHeight);

      // add the renderer to the html document body
      if (mountRef.current != null) {
        mountRef.current.appendChild(hD.renderer.domElement);
      }
    }

    setup();
    addSpheres();
    animate();

    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  useEffect(() => {
    console.log("isFocused", isFocused);
    let hyperspace = !isFocused;
    const hD = hyperspaceDetailRef.current;
    hD.acceleration = 0.5;
    hD.accelerationRate = hyperspace ? 1.9 : 1.1;
    hyperspaceDetailRef.current.hyperspace = hyperspace;
  }, [hyperspaceDetailRef, isFocused]);

  useEffect(() => {
    const hD = hyperspaceDetailRef.current;
    let paused = navigationCtx.leftOpen || navigationCtx.rightOpen;
    hD.paused = paused;
  }, [navigationCtx.leftOpen, navigationCtx.rightOpen]);

  return (
    <div className={styles.Hyperspace}>
      {process.env.NODE_ENV === "development" && (
        <div className={styles.infoPanel}>
          <table>
            <tbody>
              <tr>
                <td>Total Stars:</td>
                <td>{hyperspaceDetailRef.current.stars.length}</td>
              </tr>
              <tr>
                <td>Speed:</td>
                <td>{hyperspaceDetailRef.current.speed.toFixed(3)}</td>
              </tr>
              <tr>
                <td>Acc:</td>
                <td>{hyperspaceDetailRef.current.acceleration}</td>
              </tr>
              <tr>
                <td>Acc Rate:</td>
                <td>{hyperspaceDetailRef.current.accelerationRate}</td>
              </tr>
              <tr>
                <td>Hyperspace:</td>
                <td>{hyperspaceDetailRef.current.hyperspace.toString()}</td>
              </tr>
              <tr>
                <td>Paused:</td>
                <td>{hyperspaceDetailRef.current.paused.toString()}</td>
              </tr>
              <tr>
                <td>Focused:</td>
                <td>{slideCtx!.isFocused.toString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className={styles.canvasHolder} ref={mountRef}></div>
    </div>
  );
};

export default Hyperspace;
