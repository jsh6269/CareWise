import React, { useRef, useEffect, useState } from "react";
import drawingIcon from "../../assets/images/icons/Vector.png";
import polygon from "../../assets/images/icons/Polygon 1.svg";
import eraserIcon from "../../assets/images/icons/Vector.svg";
import textIcon from "../../assets/images/icons/Vector (1).svg";
import resetLogo from "../../assets/images/icons/radix-icons_reset.png";
import uploadLogo from "../../assets/images/icons/material-symbols_upload.png";

// 세탁기호 분석
const Canvas = () => {
  const canvasRef = useRef(null);
  const [getCtx, setGetCtx] = useState(null);
  const [painting, setPainting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 531;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";
    setGetCtx(ctx);
  }, []);

  const drawFn = (e) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    if (!painting) {
      getCtx.beginPath();
      getCtx.moveTo(mouseX, mouseY);
    } else {
      getCtx.lineTo(mouseX, mouseY);
      getCtx.stroke();
    }
  };

  return (
    <>
      <div className="relative w-[77px] h-[400px] bg-white rounded-[10px] border-2 border-solid border-[#b5b5b5] shadow-[4px_4px_4px_#00000040]">
        <div className="absolute w-[33px] h-[348px] top-[26px] left-[22px]">
          <button
            onClick={() => {
              getCtx.strokeStyle = "#000000";
              getCtx.lineWidth = "2.5";
            }}
          >
            <img
              className="h-[25px] top-0 absolute w-7 left-[3px]"
              alt="Vector"
              src={drawingIcon}
            />
          </button>
          <div className="absolute w-[32.55px] h-[0px] top-[60px] left-[2.79px] rotate-[-30.96deg] border-2 border-neutral-500" />

          <button className="absolute w-7 h-7 top-24 left-[3px] rounded-[13.96px] border-[3px] border-solid border-[#757575]" />
          <button className="absolute w-7 h-7 top-[151px] left-[3px] border-[3px] border-solid border-[#757575]" />

          <button>
            <img
              className="absolute w-[33px] h-9 top-[206px] left-0"
              alt="Polygon"
              src={polygon}
            />
          </button>
          <button
            onClick={() => {
              getCtx.strokeStyle = "#FFFFFF";
              getCtx.lineWidth = "15";
            }}
          >
            <img
              className="absolute w-[29px] h-[26px] top-[262px] left-[3px]"
              alt="Vector"
              src={eraserIcon}
            />
          </button>

          <button>
            <img
              className="h-[30px] top-[318px] absolute w-7 left-[3px]"
              alt="Vector"
              src={textIcon}
            />
          </button>
        </div>
      </div>
      <canvas
        className="canvas relative w-[531px] h-[400px] bg-white rounded-[10px] border-2 border-solid border-[#b5b5b5] shadow-[4px_4px_4px_#00000040]"
        ref={canvasRef}
        onMouseDown={() => setPainting(true)}
        onMouseUp={() => setPainting(false)}
        onMouseMove={(e) => drawFn(e)}
        onMouseLeave={() => setPainting(false)}
      ></canvas>
      <Buttons getCtx={getCtx} getCanvas={canvasRef.current} />
    </>
  );
};

const Buttons = ({ getCtx, getCanvas }) => {
  const onReset = () => {
    getCtx.clearRect(0, 0, 531, 400);
  };

  const onSave = () => {
    const imageURL = getCanvas.toDataURL();
    const downloadImage = document.createElement("a");
    downloadImage.href = imageURL;
    downloadImage.download = "paint_image";
    downloadImage.click();
  };

  return (
    <div className="inline space-y-8 ml-20">
      <button
        onClick={onSave}
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
        onClick={onReset}
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
