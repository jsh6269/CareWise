import React from "react";
import "./index.css";

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE; // css에서 설정한 캔버스 사이즈와 동일해야된다.

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = "INITIAL_COLOR";
ctx.fillStyle = "INITIAL_COLOR";
ctx.lineWidth = 2.5;

let painting = false; /* 기본값으로 false로 주고 클릭했을 때 true가 될거다. */
let filling = false; /* filling을 하고 있으면 그걸 나에게 말해줄 variable이 필요하다. */

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  /* 코너에서부터 시작(0, 0)하고 캔버스보다 커야된다.*/
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJs[🎨]";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick),
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

const Canvas = () => {
  return (
    <>
      <canvas id="jsCanvas" class="canvas"></canvas>
      <div className="controls">
        <div className="controls__range">
          {/* <!-- 페인트 브러쉬의 사이즈를 컨트롤 --> */}
          <input
            type="range"
            id="jsRange"
            min="0.1"
            max="5.0"
            value="2.5"
            step="0.1"
          />
          {/* <!-- value는 기본값을 말하고 step은 0.1씩 이동 --> */}
        </div>
        <div className="controls__btns">
          <button id="jsMode">Fill</button>
          <button id="jsSave">Save</button>
        </div>
        <div className="controls__colors" id="jsColors">
          <div
            className="controls__color jsColor"
            style={{ backgroundColor: "white" }}
          ></div>
          <div
            className="controls__color jsColor"
            style={{ backgroundColor: "black" }}
          ></div>
          <div
            className="controls__color jsColor"
            style={{ backgroundColor: "red" }}
          ></div>
          <div
            className="controls__color jsColor"
            style={{ backgroundColor: "orange" }}
          ></div>
          <div
            className="controls__color jsColor"
            style={{ backgroundColor: "yellow" }}
          ></div>
          <div
            className="controls__color jsColor"
            style={{ backgroundColor: "green" }}
          ></div>
          <div
            className="controls__color jsColor"
            style={{ backgroundColor: "green" }}
          ></div>
          <div
            className="controls__color jsColor"
            style={{ backgroundColor: "green" }}
          ></div>
          <div
            className="controls__color jsColor"
            style={{ backgroundColor: "green" }}
          ></div>
        </div>
      </div>
      <script src="./app.js"></script>
    </>
  );
};

export default Canvas;
