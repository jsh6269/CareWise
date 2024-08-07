import React, { useRef, useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import drawingIcon from "../../assets/images/icons/Vector.png";
import polygon from "../../assets/images/icons/Polygon1.svg";
import eraserIcon from "../../assets/images/icons/Vector.svg";
import UndoIcon from "../../assets/images/icons/material-symbols_undo.png";
import resetLogo from "../../assets/images/icons/radix-icons_reset.png";
import uploadLogo from "../../assets/images/icons/material-symbols_upload.png";
import { LabelSearchAPI } from "../../chatgpt.js";

let lastPath = [];

const Canvas = ({ settings, setIsLoading, setRetry }) => {
  const MODES = {
    PAN: 0,
    PEN: 1,
    LINE: 2,
    RECT: 3,
    CIRCLE: 4,
    TRIANGLE: 5,
  };
  const PAN_LIMIT = 3000;

  const width = Math.min(531, PAN_LIMIT);
  const height = Math.min(400, PAN_LIMIT);
  const [drawing, setDrawing] = useState(false);
  const [, render] = useReducer((prev) => !prev, false);
  const canvas = useRef(null);
  const context = useRef(null);
  const preview = useRef(null);
  const draw = useRef(false);
  const coords = useRef([0, 0]);
  const history = useRef([]);
  const redoHistory = useRef([]);
  const moving = useRef(false);

  const prevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onPointerDown = (e) => {
    prevent(e);
    getContext(settings.current);
    coords.current = [e.clientX, e.clientY];
    if (settings.current.mode === MODES.PAN) {
      moving.current = true;
      return;
    }
    setDrawing(true);
    draw.current = true;
    const point = getPoints(e, context.current);
    lastPath = [];
    drawModes(settings.current.mode, context.current, point, lastPath);
  };

  const onPointerUp = (e) => {
    prevent(e);
    if (settings.current.mode === MODES.PAN) {
      moving.current = false;
      return;
    }
    setDrawing(false);
    draw.current = false;
    if (lastPath.length > 0) {
      history.current.push({
        ...settings.current,
        path: lastPath,
      });
      redoHistory.current = [];
      lastPath = [];
      drawCanvas(getContext());
    }
  };

  const getPreviewActiveStyles = () => {
    const styles = {
      width: (width * 100) / PAN_LIMIT + "%",
      height: (height * 100) / PAN_LIMIT + "%",
    };
    if (!context.current) return styles;
    const { e, f } = getContext().getTransform();
    styles.left = (100 - e * 100) / PAN_LIMIT + "%";
    styles.top = (100 - f * 100) / PAN_LIMIT + "%";
    return styles;
  };

  const updatePreview = () => {
    if (preview.current) {
      const style = getPreviewActiveStyles();
      preview.current.style.left = style.left;
      preview.current.style.top = style.top;
    }
  };

  const onCanvasMove = (e, ctx) => {
    const [x1, y1] = coords.current;
    const { clientX: x2, clientY: y2 } = e;
    let dx = x2 - x1;
    let dy = y2 - y1;
    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
    const { e: tdx, f: tdy } = ctx.getTransform();
    const ntdx = Math.min(Math.max(-(PAN_LIMIT - width), tdx + dx), 0);
    const ntdy = Math.min(Math.max(-(PAN_LIMIT - height), tdy + dy), 0);
    ctx.setTransform(1, 0, 0, 1, ntdx, ntdy);
    drawCanvas(ctx);
    coords.current = [x2, y2];
    updatePreview();
  };

  const onPointerMove = (e) => {
    prevent(e);
    if (moving.current) return onCanvasMove(e, context.current);
    if (!draw.current) return;
    const point = getPoints(e, context.current);
    drawModes(settings.current.mode, context.current, point, lastPath);
  };

  const drawModes = (mode, ctx, point, path) => {
    switch (mode) {
      case MODES.PEN:
        point ? previewPen(point, ctx) : drawPen(path, ctx);
        break;
      case MODES.LINE:
        if (point) {
          path.length === 0 ? (path[0] = point) : (path[1] = point);
          previewLine(path, ctx);
        } else {
          drawLine(path, ctx);
        }
        break;
      case MODES.RECT:
        if (point) {
          path.length === 0 ? (path[0] = point) : (path[1] = point);
          previewRect(path, ctx);
        } else {
          drawRect(path, ctx);
        }
        break;
      case MODES.CIRCLE:
        if (point) {
          path.length === 0 ? (path[0] = point) : (path[1] = point);
          previewCircle(path, ctx);
        } else {
          drawCircle(path, ctx);
        }
        break;
      case MODES.TRIANGLE:
        if (point) {
          path.length === 0 ? (path[0] = point) : (path[1] = point);
          previewTri(path, ctx);
        } else {
          drawTri(path, ctx);
        }
        break;
      default:
        return;
    }
  };

  const getContext = (config, ctx) => {
    if (!context.current) {
      context.current = canvas.current.getContext("2d");
    }
    if (!ctx) ctx = context.current;
    if (config) {
      ctx.strokeStyle = config.color;
      ctx.lineWidth = config.stroke;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    }
    return ctx;
  };

  const getPoints = (e, ctx) => {
    const { e: dx, f: dy } = ctx.getTransform();
    const rect = canvas.current.getBoundingClientRect();
    return [e.clientX - rect.x - dx, e.clientY - rect.y - dy];
  };

  const previewLine = (path, ctx) => {
    if (path.length < 2) return;
    drawCanvas(ctx);
    drawLine(path, getContext(settings.current, ctx));
  };

  const drawLine = (path, ctx) => {
    if (path.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(path[0][0], path[0][1]);
    ctx.lineTo(path[1][0], path[1][1]);
    ctx.stroke();
  };

  const previewRect = (path, ctx) => {
    if (path.length < 2) return;
    drawCanvas(ctx);
    drawRect(path, getContext(settings.current, ctx));
  };

  const drawRect = (path, ctx) => {
    if (path.length < 2) return;
    ctx.beginPath();
    ctx.rect(
      path[0][0],
      path[0][1],
      path[1][0] - path[0][0],
      path[1][1] - path[0][1],
    );
    ctx.stroke();
  };

  const previewTri = (path, ctx) => {
    if (path.length < 2) return;
    drawCanvas(ctx);
    drawTri(path, getContext(settings.current, ctx));
  };

  const drawTri = (path, ctx) => {
    if (path.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(path[0][0], path[0][1]);
    ctx.lineTo(path[0][0] * 2 - path[1][0], path[1][1]);
    ctx.lineTo(path[1][0], path[1][1]);
    ctx.lineTo(path[0][0], path[0][1]);
    ctx.stroke();
  };

  const previewCircle = (path, ctx) => {
    if (path.length < 2) return;
    drawCanvas(ctx);
    getContext(settings.current, ctx); // reset context
    drawCircle(path, ctx);
  };

  const getDistance = ([[p1X, p1Y], [p2X, p2Y]]) => {
    return Math.sqrt(Math.pow(p1X - p2X, 2) + Math.pow(p1Y - p2Y, 2));
  };

  const drawCircle = (path, ctx) => {
    if (path.length < 2) return;
    ctx.beginPath();
    ctx.arc(
      (path[0][0] + path[1][0]) / 2,
      (path[0][1] + path[1][1]) / 2,
      getDistance(path) / 2,
      0,
      2 * Math.PI,
    );
    ctx.stroke();
  };

  const previewPen = (point, ctx) => {
    if (lastPath.length === 0) {
      ctx.beginPath();
      ctx.moveTo(point[0], point[1]);
    }
    ctx.lineTo(point[0], point[1]);
    ctx.stroke();
    lastPath.push(point);
  };

  const drawPen = (points, ctx) => {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (const p of points) {
      ctx.lineTo(p[0], p[1]);
    }
    ctx.stroke();
  };

  const clearCanvas = (ctx) => {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, PAN_LIMIT, PAN_LIMIT);
    ctx.restore();
  };

  //내가만듦
  const resetCanvas = (e) => {
    prevent(e);
    if (history.current.length === 0) return;
    while (history.current.length !== 0) {
      redoHistory.current.push(history.current.pop());
    }
    drawCanvas(getContext());
    render();
  };

  const drawCanvas = (ctx) => {
    clearCanvas(ctx);
    for (const item of history.current) {
      getContext(item, ctx);
      drawModes(item.mode, ctx, null, item.path);
    }
  };

  const undoCanvas = (e) => {
    prevent(e);
    if (history.current.length === 0) return;
    redoHistory.current.push(history.current.pop());
    drawCanvas(getContext());
    render();
  };

  // const redoCanvas = (e) => {
  //   prevent(e);
  //   if (redoHistory.current.length === 0) return;
  //   history.current.push(redoHistory.current.pop());
  //   drawCanvas(getContext());
  //   render();
  // };

  // const Canvas = (e) => {
  //   prevent(e);
  //   if (history.current.length === 0) return;
  //   redoHistory.current.push(history.current.pop());
  //   drawCanvas(getContext());
  //   render();
  // };

  useEffect(() => {
    document
      .getElementsByTagName("canvas")[0]
      .addEventListener("pointerup", onPointerUp);
    document
      .getElementsByTagName("canvas")[0]
      .addEventListener("pointermove", onPointerMove);
    getContext().setTransform(
      1,
      0,
      0,
      1,
      -(PAN_LIMIT - width) / 2,
      -(PAN_LIMIT - height) / 2,
    );
    drawCanvas(getContext());
    updatePreview();
    return () => {
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointermove", onPointerMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  const [menu, setMenu] = useState("pen");

  const renderSelected = () => {
    switch (menu) {
      case "pen":
        return (
          <div className="absolute w-[43px] h-[43px] top-[18px] left-[17px] rounded-[13.96px] bg-gray-300" />
        );
      case "line":
        return (
          <div className="absolute w-[43px] h-[43px] top-[68px] left-[17px] rounded-[13.96px] bg-gray-300" />
        );
      case "circle":
        return (
          <div className="absolute w-[43px] h-[43px] top-[116px] left-[17px] rounded-[13.96px] bg-gray-300" />
        );
      case "rect":
        return (
          <div className="absolute w-[43px] h-[43px] top-[170px] left-[17px] rounded-[13.96px] bg-gray-300" />
        );
      case "triangle":
        return (
          <div className="absolute w-[43px] h-[43px] top-[232px] left-[17px] rounded-[13.96px] bg-gray-300" />
        );
      case "eraser":
        return (
          <div className="absolute w-[43px] h-[43px] top-[282px] left-[17px] rounded-[13.96px] bg-gray-300" />
        );
    }
  };

  return (
    <>
      <div
        onPointerDown={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        className="relative w-[77px] h-[400px] bg-white rounded-[10px] border-2 border-solid border-[#b5b5b5] shadow-[4px_4px_4px_#00000040]"
      >
        {renderSelected()}

        <div className="absolute w-[33px] h-[348px] top-[26px] left-[22px]">
          <button
            onClick={() => {
              settings.current.mode = MODES.PEN;
              settings.current.color = "#000000";
              settings.current.stroke = "2.5";
              setMenu("pen");
            }}
          >
            <img
              className="h-[25px] top-0 absolute w-7 left-[3px]"
              alt="Vector"
              src={drawingIcon}
            />
          </button>
          <button
            onClick={() => {
              settings.current.mode = MODES.LINE;
              settings.current.color = "#000000";
              settings.current.stroke = "2.5";
              setMenu("line");
            }}
            className="absolute w-[43px] h-[43px] top-[42px] left-[-3px] rounded-[13.96px]"
          />
          <button
            onClick={() => {
              settings.current.mode = MODES.LINE;
              settings.current.color = "#000000";
              settings.current.stroke = "2.5";
              setMenu("line");
            }}
            className="absolute w-[32.55px] h-[0px] top-[60px] left-[2.79px] rotate-[-30.96deg] border-2 border-neutral-500"
          />

          <button
            onClick={() => {
              settings.current.mode = MODES.CIRCLE;
              settings.current.color = "#000000";
              settings.current.stroke = "2.5";
              setMenu("circle");
            }}
            className="absolute w-7 h-7 top-24 left-[3px] rounded-[13.96px] border-[3px] border-solid border-[#757575]"
          />
          <button
            onClick={() => {
              settings.current.mode = MODES.RECT;
              settings.current.color = "#000000";
              settings.current.stroke = "2.5";
              setMenu("rect");
            }}
            className="absolute w-7 h-7 top-[151px] left-[3px] border-[3px] border-solid border-[#757575]"
          />

          <button
            onClick={() => {
              settings.current.mode = MODES.TRIANGLE;
              settings.current.color = "#000000";
              settings.current.stroke = "2.5";
              setMenu("triangle");
            }}
          >
            <img
              className="absolute w-[33px] h-9 top-[206px] left-0"
              alt="Polygon"
              src={polygon}
            />
          </button>
          <button
            onClick={() => {
              settings.current.mode = MODES.PEN;
              settings.current.color = "#FFFFFF";
              settings.current.stroke = "30";
              setMenu("eraser");
            }}
          >
            <img
              className="absolute w-[29px] h-[26px] top-[262px] left-[3px]"
              alt="Vector"
              src={eraserIcon}
            />
          </button>

          <button onClick={undoCanvas}>
            <img
              className="absolute w-[45px] h-[40px] top-[310px]"
              alt="Vector"
              src={UndoIcon}
            />
          </button>
        </div>
      </div>
      <canvas
        className="canvas relative w-[531px] h-[400px] bg-white rounded-[10px] border-2 border-solid border-[#b5b5b5] shadow-[4px_4px_4px_#00000040]"
        ref={canvas}
        width={width}
        height={height}
        onPointerDown={onPointerDown}
      ></canvas>
      <Buttons
        getCanvas={canvas.current}
        resetCanvas={resetCanvas}
        setIsLoading={setIsLoading}
        setRetry={setRetry}
      />
    </>
  );
};

const Buttons = ({ getCanvas, resetCanvas, setIsLoading, setRetry }) => {
  // 내가 만듦
  // const handleUpload = () => {
  //   const canvas = getCanvas;
  //   const context = canvas.getContext("2d");

  //   // Create a temporary canvas to draw a white background and then the current canvas content
  //   const tempCanvas = document.createElement("canvas");
  //   const tempContext = tempCanvas.getContext("2d");

  //   // Set the same size as the original canvas
  //   tempCanvas.width = canvas.width;
  //   tempCanvas.height = canvas.height;

  //   // Draw a white background
  //   tempContext.fillStyle = "#FFFFFF";
  //   tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  //   // Draw the original canvas content on top of the white background
  //   tempContext.drawImage(canvas, 0, 0);

  //   // Get the data URL of the temporary canvas
  //   const imageURL = tempCanvas.toDataURL("image/jpeg");

  //   // Convert data URL to Blob
  //   function dataURItoBlob(dataURI) {
  //     const binary = atob(dataURI.split(",")[1]);
  //     const array = [];
  //     for (let i = 0; i < binary.length; i++) {
  //       array.push(binary.charCodeAt(i));
  //     }
  //     return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
  //   }

  //   const blobData = dataURItoBlob(imageURL);

  //   // AWS S3 설정
  //   AWS.config.update({
  //     accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID, // IAM 사용자 엑세스 키 변경
  //     secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY, // IAM 엑세스 시크릿키 변경
  //     region: "ap-northeast-2", // 리전 변경
  //   });

  //   const s3 = new AWS.S3();
  //   const date = new Date();

  //   // 업로드할 파일 정보 설정
  //   const uploadParams = {
  //     Bucket: "carewise-input", // 버킷 이름 변경
  //     Key: `${date.toISOString()}.jpg`, // S3에 저장될 경로와 파일명
  //     Body: blobData,
  //   };

  //   // S3에 파일 업로드
  //   s3.upload(uploadParams, (err, data) => {
  //     if (err) {
  //       console.error("Error uploading file:", err);
  //     } else {
  //       console.log("File uploaded successfully. ETag:", data.ETag);
  //       // 업로드 성공 후 필요한 작업 수행
  //     }
  //   });
  // };

  const navigate = useNavigate();

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  async function handleUpload() {
    setIsLoading(true);
    if (!getCanvas) {
      setIsLoading(false);
      setRetry(true);
      return;
    }

    const canvas = getCanvas;
    const context = canvas.getContext("2d");

    // Create a temporary canvas to draw a white background and then the current canvas content
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d");

    // Set the same size as the original canvas
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    // Draw a white background
    tempContext.fillStyle = "#FFFFFF";
    tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // Draw the original canvas content on top of the white background
    tempContext.drawImage(canvas, 0, 0);

    // Get the data URL of the temporary canvas
    const imageURL = tempCanvas.toDataURL("image/jpeg");

    // Convert data URL to Blob
    function dataURItoBlob(dataURI) {
      const binary = atob(dataURI.split(",")[1]);
      const array = [];
      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
    }

    const blobData = dataURItoBlob(imageURL);

    try {
      const encodedImage = await toBase64(blobData);
      const result = await LabelSearchAPI(encodedImage);
      if (result.length > 0) {
        navigate("/label-ex-result", {
          state: { image: imageURL, result: result },
        });
      } else {
        setIsLoading(false);
        setRetry(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
      setRetry(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="inline space-y-8 ml-20">
      <button
        onClick={handleUpload}
        className="flex flex-col w-[333px] h-[67px] items-center justify-center gap-2.5 px-[133px] py-[18px] bg-[#b5b5b5] rounded-lg"
      >
        <div className="ml-[-38.50px] mr-[-38.50px] inline-flex items-center justify-center gap-[15px] relative flex-[0_0_auto]">
          <img
            className="relative w-[31px] h-[31px]"
            alt="Material symbols"
            src={uploadLogo}
          />
          <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-5 whitespace-nowrap">
            그림 업로드
          </div>
        </div>
      </button>

      <button
        onClick={resetCanvas}
        className="flex flex-col w-[333px] h-[67px] items-center justify-center gap-2.5 px-[133px] py-[18px]  bg-white rounded-lg border border-solid border-[#a4a3a3]"
      >
        <div className="ml-[-38.00px] mr-[-38.00px] inline-flex items-center justify-center gap-[15px] relative flex-[0_0_auto]">
          <img
            className="relative w-[30px] h-[30px]"
            alt="Radix icons reset"
            src={resetLogo}
          />
          <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-xl text-center tracking-[0] leading-5 whitespace-nowrap">
            모두 지우기
          </div>
        </div>
      </button>
    </div>
  );
};

export default Canvas;
