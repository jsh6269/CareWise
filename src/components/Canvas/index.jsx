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
