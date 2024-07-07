import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";

// 세탁기호 분석
const LabelExPage = () => {
  const canvasRef = useRef(null);

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
  );
};

export default LabelExPage;
