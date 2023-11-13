import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import styles from "./gauge-widget.module.scss";
import { Project } from "@/models";
import SlideshowContext from "../../../store/slideshow-context";

type GaugeWidgetDetails = {
  numSegments: number; // number of segments
  logoSrc?: string | null; // logo for focused segment
  logo?: HTMLImageElement | null; // logo for focused segment
  logoXOffset?: number;
  logoYOffset?: number;
  logoNewWidth?: number;
  logoNewHeight?: number;
  clockwise: boolean; // direction of travel
  detailAlpha?: number; // alpha of detail
  currPositionRadians: number; // calcated position of segment
  targetPositionRadians: number; // calculated position of target segment
  positionSpeed: number;
  positionAcceleration: number;
  currSpeed: number;
  currentDetail: number; // detail to highlight
  outlineColor: string; // hex value of outline
  segmentColor: string; // hex value of segnent;
  innerSegmentColor: string; // hex value of innerSegment
  videoSegmentColor: string; // hex value of innerSegment
  backgroundColor: string; // hex value of bkg
  ghostAlpha: number;
  ghostAlphaSpeed: number;
  ghostAlphaAcc: number;
  detailAlphaStep: number; // step amout to increment alpha
  detailAlphaAcceleration?: number; //
  prevTravelDistance: number;
  blinking: boolean;
  ballRotation: number; // in degrees 0 to 360
  ballSpeed: number; // amount of degrees to rotate ball each frame
  ballSpeedAcceleration: number;
  ballSpeedAccelerationRate: number;
  initialBallPosition: number;
  currBallPosition: number;
  initialBallSpeed: number;
  maxLogoAlpha: number;
  alphaStep: number;
  currAlpha: number;
};

type Size = {
  width: number;
  height: number;
};

const GaugeWidget = () => {
  let slideshowCtx = useContext(SlideshowContext);
  let { projects, currentIndex, prevIndex, isFocused, secondaryIndex } =
    slideshowCtx!;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<any>(null);
  const size: Size = useMemo<Size>(() => {
    return { width: 80, height: 80 };
  }, []);

  const gaugeDetailsRef = useRef<GaugeWidgetDetails>({
    numSegments: projects ? projects.length : 0,
    clockwise: true,
    currPositionRadians: 0,
    targetPositionRadians: projects
      ? (currentIndex * 2 * Math.PI) / projects!.length
      : 0,
    currSpeed: 0,
    positionSpeed: 0.05,
    positionAcceleration: 0.04,
    currentDetail: 0,
    outlineColor: "rgba(255,255,225, 0.75)",
    segmentColor: "rgba(127,255,0, 0.6)",
    innerSegmentColor: "rgba(35, 255, 253, 0.78)",
    backgroundColor: "rgba(0,0,0,0.5)",
    videoSegmentColor: "rgba(183, 225, 23, 0.8)",
    ghostAlpha: 0.85,
    ghostAlphaSpeed: 0.3,
    ghostAlphaAcc: 0.1,
    detailAlphaStep: 0.1,
    detailAlphaAcceleration: 0.1,
    prevTravelDistance: 0,
    blinking: isFocused,
    ballRotation: 0,
    //initialBallSpeed: 0., //  1000 / 30  / 360 / 7
    // currBallSpeed: 1.54285
    ballSpeed: 1.714,
    initialBallPosition: 0,
    currBallPosition: 0,
    ballSpeedAcceleration: 0.01, //0.1,
    initialBallSpeed: 1.714,
    ballSpeedAccelerationRate: 1.005,
    maxLogoAlpha: 0.8,
    alphaStep: 0.1,
    currAlpha: 0.8,
  });

  const clearCanvas = () => {
    let canvas = canvasRef.current;
    let ctx = canvas!.getContext("2d");
    // store the current transformation matrix
    ctx!.save();

    // Use the identity matrix while clearing the canvas
    ctx!.setTransform(1, 0, 0, 1, 0, 0);
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

    // Restore the transform
    ctx!.restore();
  };

  // set off animation loop
  useEffect(() => {
    let counter = 0.1;
    let counerIncrement = 0.1;

    const fps = 30;
    var now;
    var then = Date.now();
    var interval = 1000 / fps;
    var delta;

    const loadImage = (ctx: CanvasRenderingContext2D, image: string) => {
      const gD = gaugeDetailsRef.current;
      ctx.save();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx!.rotate((90 * Math.PI) / 180);
      ctx.arc(0, 0, size.width * 0.2, 0, Math.PI * 2, false);
      ctx.clip();

      var brightness = 0.1 * Math.sin(counter / 4);
      brightness += 0.95;
      ctx!.filter = `brightness(${brightness})`;

      ctx.imageSmoothingEnabled = true;
      if (gD.logo == null || gD.logoSrc != image) {
        gD.logoSrc = image;
        ctx!.globalAlpha = 0;
        const imageLoaded = new Promise((resolve, reject) => {
          const img = new Image();
          img.onerror = (e) => reject(`${image} failed to load`);
          img.onload = (e) => resolve(img);
          img.src = image;
        });
        imageLoaded.then((img: any) => {
          let canvasHeight = 36;
          let canvasWidth = 36;
          var wrh = img.width / img.height;

          var newWidth = 36;
          var newHeight = newWidth / wrh;
          if (newHeight > canvasHeight) {
            newHeight = canvasHeight;
            newWidth = newHeight * wrh;
          }
          var xOffset =
            newWidth < canvasWidth ? (canvasWidth - newWidth) / 2 : 0;
          var yOffset =
            newHeight < canvasHeight ? (canvasHeight - newHeight) / 2 : 0;
          gD.currAlpha = 0;
          ctx.save();
          ctx.globalAlpha = 0;
          xOffset = xOffset - canvasWidth / 2;
          yOffset = yOffset - canvasHeight / 2;
          ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);
          gD.logo = img;
          gD.logoXOffset = xOffset;
          gD.logoYOffset = yOffset;
          gD.logoNewWidth = newWidth;
          gD.logoNewHeight = newHeight;
          ctx.restore();
        });
      } else {
        ctx!.globalAlpha = gD.currAlpha;
        if (gD.currAlpha < gD.maxLogoAlpha) {
          gD.currAlpha += gD.alphaStep;
        }

        ctx.drawImage(
          gD.logo,
          gD.logoXOffset!,
          gD.logoYOffset!,
          gD.logoNewWidth!,
          gD.logoNewHeight!
        );
      }
      ctx.restore();
    };

    const updateSegment = (segmentLength: number) => {
      const gD = gaugeDetailsRef.current;
      if (currentIndex != prevIndex) {
        const maxDistToTravel = Math.floor(projects!.length / 2);
        let condition1 =
          prevIndex > currentIndex &&
          prevIndex - currentIndex < maxDistToTravel;
        let condition2 =
          prevIndex < currentIndex &&
          currentIndex - prevIndex > maxDistToTravel;
        let counterClockwise = condition1 || condition2;
        gD.clockwise = !counterClockwise;
      }

      if (gD.clockwise) {
        let target = gD.targetPositionRadians;
        if (
          gD.currPositionRadians > gD.targetPositionRadians &&
          Math.abs(gD.currPositionRadians - gD.targetPositionRadians) >=
            segmentLength
        ) {
          target = gD.targetPositionRadians + 2 * Math.PI;
        }

        if (gD.currPositionRadians < target) {
          if (gD.currSpeed == 0) {
            gD.currSpeed += gD.positionSpeed;
            gD.ghostAlpha -= gD.ghostAlphaSpeed;
            gD.ghostAlphaSpeed += gD.ghostAlphaAcc;
            gD.ghostAlpha = 0.85;
            //gD.blinking = false;
          }
          gD.currSpeed += gD.positionAcceleration;
          gD.currPositionRadians += gD.currSpeed;
        } else {
          gD.currSpeed = 0;
          gD.currPositionRadians = gD.targetPositionRadians;
          //gD.blinking = true;
        }
      } else {
        let currPos = gD.currPositionRadians;
        if (
          currPos < gD.targetPositionRadians &&
          Math.abs(gD.currPositionRadians - gD.targetPositionRadians) >=
            segmentLength
        ) {
          currPos = gD.currPositionRadians + 2 * Math.PI;
        }

        if (currPos > gD.targetPositionRadians) {
          if (gD.currSpeed == 0) {
            gD.currSpeed += gD.positionSpeed;
            gD.ghostAlpha -= gD.ghostAlphaSpeed;
            gD.ghostAlphaSpeed += gD.ghostAlphaAcc;
            gD.ghostAlpha = 0.85;
            gD.blinking = false;
          }
          gD.currSpeed += gD.positionAcceleration;
          gD.currPositionRadians -= gD.currSpeed;
        } else {
          gD.currSpeed = 0;
          gD.currPositionRadians = gD.targetPositionRadians;
          gD.blinking = true;
        }
      }
    };

    const drawSegment = (
      ctx: CanvasRenderingContext2D,
      segmentLength: number,
      position: number
    ) => {
      const gD = gaugeDetailsRef.current;
      counter += counerIncrement;
      ctx.beginPath();
      if (gD.blinking) {
        let segmentAlpha = (Math.sin(3 * counter) + 1) / 2;
        segmentAlpha = segmentAlpha * 0.6 + 0.1;
        ctx.strokeStyle = `rgba(127,255,0, ${segmentAlpha})`;
      } else {
        ctx.strokeStyle = `rgba(127,255,0, 0.5)`;
      }

      ctx.lineWidth = size.width * 0.12;
      ctx.arc(
        0,
        0,
        size.width * 0.42,
        position,
        position + segmentLength,
        false
      );
      ctx.stroke();
    };

    const drawInnerSegment = (
      ctx: CanvasRenderingContext2D,
      segmentLength: number,
      position: number
    ) => {
      const gD = gaugeDetailsRef.current;
      ctx.beginPath();
      let segmentAlpha = (Math.sin(2 * counter) + 1) / 2;
      segmentAlpha = segmentAlpha * 0.6 + 0.1;
      // hot pink
      ctx.strokeStyle = `rgba(255, 20, 147, ${segmentAlpha})`;

      ctx.lineWidth = size.width * 0.12;
      ctx.arc(
        0,
        0,
        size.width * 0.3,
        position,
        position + segmentLength,
        false
      );
      ctx.stroke();
    };

    const drawVideoLoop = (ctx: CanvasRenderingContext2D) => {
      const gD = gaugeDetailsRef.current;
      ctx.beginPath();
      let segmentAlpha = (Math.sin(counter) + 1) / 2;
      segmentAlpha = segmentAlpha * 0.3 + 0.3;
      //hot blue
      ctx.strokeStyle = `rgba(35, 255, 253, ${segmentAlpha})`;
      ctx.lineWidth = size.width * 0.12;
      ctx.arc(0, 0, size.width * 0.3, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.closePath();
    };

    const drawDividers = (
      ctx: CanvasRenderingContext2D,
      numDividers: number,
      innerRadius: number,
      dividerLength: number
    ) => {
      const gD = gaugeDetailsRef.current;
      let segmentRadians = (Math.PI * 2) / numDividers;
      ctx.strokeStyle = gD.outlineColor;
      ctx.moveTo(0, 0);
      for (let i = 0; i < numDividers; i++) {
        let rotation = i * segmentRadians;
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.rotate(rotation);
        ctx.translate(innerRadius, 0);
        ctx.moveTo(0, 0);
        ctx.lineTo(dividerLength, 0);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
    };

    const drawMinuteHand = (ctx: CanvasRenderingContext2D) => {
      const gD = gaugeDetailsRef.current;
      ctx.save();
      //rotate
      // arc

      ctx.beginPath();
      //ctx.moveTo(size.width * 0.49, 0);

      ctx!.rotate((gD.currBallPosition * Math.PI) / 180);
      //ctx.arc(size.width * 0.3, 0, size.width * 0.04, 0, 2 * Math.PI, false);
      //let segmentAlpha = (Math.sin(4 * counter) + 1) / 2;
      //segmentAlpha = segmentAlpha * 0.5 + 0.5;
      ctx.moveTo(size.width * 0.35, 0);
      ctx.lineTo(20, 0);
      let segmentAlpha = 0.8;
      ctx.fillStyle = `rgba(35, 255, 253,${segmentAlpha})`;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = `rgba(255, 255, 255,${segmentAlpha})`;
      ctx.stroke();
      ctx.restore();
      gD.currBallPosition += gD.ballSpeed;
      gD.currBallPosition = gD.currBallPosition % 360;
      // if (gD.ballRotation < 180) {
      //   gD.ballSpeed += gD.ballSpeedAcceleration;
      //   gD.ballSpeedAcceleration *= gD.ballSpeedAccelerationRate;
      // } else {
      //   gD.ballSpeed -= gD.ballSpeedAcceleration;
      //   gD.ballSpeedAcceleration /= gD.ballSpeedAccelerationRate;
      // }
    };

    const drawBall = (ctx: CanvasRenderingContext2D) => {
      const gD = gaugeDetailsRef.current;
      ctx.save();
      //rotate
      // arc

      ctx.beginPath();
      //ctx.moveTo(size.width * 0.49, 0);

      ctx!.rotate((gD.currBallPosition * Math.PI) / 180);
      ctx.arc(size.width * 0.3, 0, size.width * 0.04, 0, 2 * Math.PI, false);
      //let segmentAlpha = (Math.sin(4 * counter) + 1) / 2;
      //segmentAlpha = segmentAlpha * 0.5 + 0.5;
      let segmentAlpha = 0.6;
      ctx.fillStyle = `rgba(35, 255, 253,${segmentAlpha})`;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(35, 255, 253,${segmentAlpha})`;
      ctx.stroke();
      ctx.restore();
      gD.currBallPosition += gD.ballSpeed;
      gD.currBallPosition = gD.currBallPosition % 360;
      // if (gD.ballRotation < 180) {
      //   gD.ballSpeed += gD.ballSpeedAcceleration;
      //   gD.ballSpeedAcceleration *= gD.ballSpeedAccelerationRate;
      // } else {
      //   gD.ballSpeed -= gD.ballSpeedAcceleration;
      //   gD.ballSpeedAcceleration /= gD.ballSpeedAccelerationRate;
      // }
    };

    const renderOutlines = (ctx: CanvasRenderingContext2D) => {
      const gD = gaugeDetailsRef.current;
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = gD.outlineColor;
      ctx.moveTo(size.width * 0.49, 0);
      ctx.arc(0, 0, size.width * 0.49, 0, Math.PI * 2, false);
      ctx.moveTo(size.width * 0.37, 0);
      ctx.arc(0, 0, size.width * 0.36, 0, Math.PI * 2, false);
      ctx.moveTo(size.width * 0.24, 0);
      ctx.arc(0, 0, size.width * 0.24, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
    };
    const renderBackground = (ctx: CanvasRenderingContext2D) => {
      const gD = gaugeDetailsRef.current;

      ctx.lineWidth = 20;

      ctx.beginPath();
      ctx.strokeStyle = gD.backgroundColor;
      ctx.arc(0, 0, size.width * 0.35, 0, Math.PI * 2, false);

      ctx.stroke();
      ctx.closePath();
      ctx.strokeStyle = gD.outlineColor;
    };

    const renderFrame = () => {
      if (canvasRef.current && projects && projects.length > 0) {
        const ctx = canvasRef!.current!.getContext("2d");
        const currentProject: Project = projects[currentIndex];
        const segmentLength = (Math.PI * 2) / projects!.length;
        const gD = gaugeDetailsRef.current;
        gD.targetPositionRadians =
          (currentIndex * 2 * Math.PI) / projects!.length;
        // determine direction
        updateSegment(segmentLength);
        clearCanvas();
        ctx!.setTransform(1, 0, 0, 1, 0, 0);
        ctx!.translate(size.width / 2, size.height / 2);
        ctx!.rotate((-90 * Math.PI) / 180);
        loadImage(ctx!, projects![currentIndex].projectLogo);
        ctx!.globalCompositeOperation = "source-over";
        renderBackground(ctx!);
        drawSegment(ctx!, segmentLength, gD.currPositionRadians);
        if (isFocused && currentProject.showcaseType == "VIDEO") {
          drawVideoLoop(ctx!);
        }
        if (isFocused && currentProject.showcaseType == "SLIDE") {
          let numSlides = currentProject.slides!.length + 1;

          const innerSegmentLength = (Math.PI * 2) / numSlides;
          drawInnerSegment(
            ctx!,
            innerSegmentLength,
            (secondaryIndex * 2 * Math.PI) / (currentProject.slides!.length + 1)
          );
        }

        renderOutlines(ctx!);

        if (isFocused && currentProject.showcaseType == "SLIDE") {
          drawDividers(
            ctx!,
            currentProject.slides!.length + 1,
            size.width * 0.25,
            size.width * 0.1
          );
        }
        if (!isFocused) {
          //drawBall(ctx!);
          drawMinuteHand(ctx!);
        }
        drawDividers(
          ctx!,
          projects!.length,
          size.width * 0.36,
          size.width * 0.13
        );
      }
    };

    function animate() {
      requestIdRef.current = requestAnimationFrame(animate);
      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        renderFrame();
        then = now - (delta % interval);
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [currentIndex, projects, size, prevIndex, isFocused, secondaryIndex]);

  useEffect(() => {
    gaugeDetailsRef.current.blinking = isFocused;
    if (isFocused) {
      gaugeDetailsRef.current.currBallPosition =
        gaugeDetailsRef.current.initialBallPosition;
      gaugeDetailsRef.current.ballSpeed =
        gaugeDetailsRef.current.initialBallSpeed;
    }
  }, [gaugeDetailsRef, isFocused]);

  return (
    <div className={styles.GaugeWidget}>
      <canvas ref={canvasRef} width={size.width} height={size.height}></canvas>
    </div>
  );
};

export default GaugeWidget;
