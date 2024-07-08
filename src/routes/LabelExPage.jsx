import React, { useRef } from "react";
//import CanvasDraw from "react-canvas-draw";

// 세탁기호 분석
const LabelExPage = () => {
  /*const canvasRef = useRef(null);

  const handleSave = () => {
    const canvas = canvasRef.current.canvas.drawing;
    const dataURL = canvas.toDataURL("image/png");

    // 이미지 다운로드(임시)
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "drawing.png";
    link.click();
  };

  const handleClear = () => {
    canvasRef.current.clear();
  };

  return (
    <div className="App">
      <CanvasDraw ref={canvasRef} lazyRadius={0} brushRadius={2} />
      <div className="button-group">
        <button onClick={handleSave} className="m-5">
          Save
        </button>
        <button onClick={handleClear} className="m-5">
          Clear
        </button>
      </div>
    </div>
  );*/
};

//export default LabelExPage;

import React, { useRef, useEffect, useState } from "react";
import MenuBar from "../components/MenuBar/index.jsx";

export default function App() {
  // useRef
  const canvasRef = useRef(null);
  // getCtx
  const [getCtx, setGetCtx] = useState(null);
  // painting state
  const [painting, setPainting] = useState(false);

  useEffect(() => {
    // canvas useRef
    const canvas = canvasRef.current;
    canvas.width = 650;
    canvas.height = 540;
    const ctx = canvas.getContext("2d");
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";
    setGetCtx(ctx);
  }, []);

  const drawFn = (e) => {
    // mouse position
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    // drawing
    if (!painting) {
      getCtx.beginPath();
      getCtx.moveTo(mouseX, mouseY);
    } else {
      getCtx.lineTo(mouseX, mouseY);
      getCtx.stroke();
    }
  };

  return (
    <div className="view">
      <div className="canvasWrap">
        <canvas
          className="canvas"
          ref={canvasRef}
          onMouseDown={() => setPainting(true)}
          onMouseUp={() => setPainting(false)}
          onMouseMove={(e) => drawFn(e)}
          onMouseLeave={() => setPainting(false)}
        ></canvas>
      </div>
      <MenuBar getCtx={getCtx} getCanvas={getCanvas} />
    </div>
  );
}
