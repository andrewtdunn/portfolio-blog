import { useContext, useEffect, useRef } from "react";
import styles from "./monitor-static.module.scss";
import NavigationContext from "../../../store/nav-context";

type MonitorStaticDetails = {
  scaleFactor: number;
  samples: any[];
  sampleIndex: number;
  scanOffsetY: number;
  scanSize: number;
  FPS: number;
  scanSpeed: number;
};

const MonitorStatic = () => {
  const navigationCtx = useContext(NavigationContext);
  const tvstaticRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<any>(null);
  const staticDetailsRef = useRef<MonitorStaticDetails>({
    scaleFactor: 1, // Noise size
    samples: [],
    sampleIndex: 0,
    scanOffsetY: 0,
    scanSize: 0,
    FPS: 50,
    scanSpeed: 50 * 15, // 15 seconds from top to bottom
  });
  const SAMPLE_COUNT: number = 10;

  const interpolate = (
    x: number,
    x0: number,
    y0: number,
    x1: number,
    y1: number
  ): number => {
    return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
  };

  useEffect(() => {
    const generateRandomSample = (
      context: CanvasRenderingContext2D,
      w: number,
      h: number
    ) => {
      var intensity = [];
      //var random = 0;
      var factor = h / 50;
      var trans = 1 - Math.random() * 0.05;

      var intensityCurve = [];
      for (var i = 0; i < Math.floor(h / factor) + factor; i++)
        intensityCurve.push(Math.floor(Math.random() * 15));

      for (var j = 0; j < h; j++) {
        var value = interpolate(
          j / factor,
          Math.floor(j / factor),
          intensityCurve[Math.floor(j / factor)],
          Math.floor(j / factor) + 1,
          intensityCurve[Math.floor(j / factor) + 1]
        );
        intensity.push(value);
      }

      var imageData = context.createImageData(w, h);
      for (var b = 0; b < w * h; b++) {
        var k = b * 4;
        var color = Math.floor(36 * Math.random());
        // Optional: add an intensity curve to try to simulate scan lines
        color += intensity[Math.floor(b / w)];
        imageData.data[k] =
          imageData.data[k + 1] =
          imageData.data[k + 2] =
            color;
        imageData.data[k + 3] = Math.round(255 * trans);
      }
      return imageData;
    };

    const getSamples = () => {
      let canvas = tvstaticRef.current;
      let details = staticDetailsRef.current;

      canvas!.width = canvas!.offsetWidth;
      canvas!.height =
        canvas!.width / (canvas!.offsetWidth / canvas!.offsetHeight);

      details.samples = [];
      if (canvas) {
        let ctx = canvas.getContext("2d");
        details.scanSize = canvas.offsetHeight / details.scaleFactor / 3;
        for (let i = 0; i <= SAMPLE_COUNT; i++) {
          details.samples.push(
            generateRandomSample(ctx!, canvas.width, canvas.height)
          );
        }
      }
    };

    const setAnimation = () => {
      if (!navigationCtx.leftOpen && !navigationCtx.rightOpen) {
        cancelAnimationFrame(requestIdRef.current);
        requestIdRef.current = requestAnimationFrame(renderAnimation);
      } else {
        cancelAnimationFrame(requestIdRef.current);
      }
    };

    const renderAnimation = () => {
      if (!tvstaticRef.current) {
        return;
      }
      var context = tvstaticRef.current.getContext("2d");
      let details = staticDetailsRef.current;
      context!.putImageData(
        details.samples[Math.floor(details.sampleIndex)],
        0,
        0
      );

      details.sampleIndex += 20 / details.FPS; // 1/FPS == 1 second
      if (details.sampleIndex >= details.samples.length)
        details.sampleIndex = 0;

      var grd = context!.createLinearGradient(
        0,
        details.scanOffsetY,
        0,
        details.scanSize + details.scanOffsetY
      );

      grd.addColorStop(0, "rgba(255,255,255,0)");
      grd.addColorStop(0.1, "rgba(255,255,255,0)");
      grd.addColorStop(0.2, "rgba(255,255,255,0.2)");
      grd.addColorStop(0.3, "rgba(255,255,255,0.0)");
      grd.addColorStop(0.45, "rgba(255,255,255,0.1)");
      grd.addColorStop(0.5, "rgba(255,255,255,1.0)");
      grd.addColorStop(0.55, "rgba(255,255,255,0.55)");
      grd.addColorStop(0.6, "rgba(255,255,255,0.25)");
      //grd.addColorStop(0.8, "rgba(255,255,255,0.15)");
      grd.addColorStop(1, "rgba(255,255,255,0)");

      context!.fillStyle = grd;
      context!.fillRect(
        0,
        details.scanOffsetY,
        tvstaticRef.current.width,
        details.scanSize + details.scanOffsetY
      );
      context!.globalCompositeOperation = "lighter";

      details.scanOffsetY += tvstaticRef.current.height / details.scanSpeed;
      if (details.scanOffsetY > tvstaticRef.current.height)
        details.scanOffsetY = -(details.scanSize / 2);

      setAnimation();
    };

    let canvas = tvstaticRef.current;
    if (canvas!.width != 0 && !isNaN(canvas!.width)) {
      getSamples();
      renderAnimation();
      setAnimation();
    }
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [navigationCtx, tvstaticRef]);

  return (
    <canvas
      className={`${styles.MonitorStatic} ${
        navigationCtx.leftOpen || navigationCtx.rightOpen ? "" : styles.faded
      }`}
      ref={tvstaticRef}
      width="700"
      height="350"
    />
  );
};

export default MonitorStatic;
