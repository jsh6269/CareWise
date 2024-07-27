import React from "react";
import loadingIcon1 from "../../assets/images/icons/machine-dry.png";
import loadingIcon2 from "../../assets/images/icons/petroleum.png";
import loadingIcon3 from "../../assets/images/icons/bleach.png";
import whiteArrow from "../../assets/images/icons/arrow_white.svg";
import smile from "../../assets/images/icons/smile.svg";
import "../../index.css";

const Loading = ({ isLoading }) => {
  return (
    <div
      style={{
        display: isLoading ? "block" : "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "30px",
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
          backgroundColor: "white",
        }}
      >
        <div className="w-[489px] h-[238px] py-[42px] bg-white/opacity-95 rounded-[30px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="h-[91px] flex-col justify-center items-center gap-5 flex">
            <div className="opacity-60 justify-center items-center gap-20 flex">
              <img
                className="w-[35px] h-[35px] shadow animate-bounce"
                src={loadingIcon1}
                alt="carelabel icon for animation"
              />
              <img
                className="w-[35px] h-[35px] shadow animate-bounce"
                src={loadingIcon2}
                alt="carelabel icon for animation"
              />
              <img
                className="w-[42.30px] h-[35px] shadow animate-bounce"
                src={loadingIcon3}
                alt="carelabel icon for animation"
              />
            </div>
            <div className="self-stretch text-center text-neutral-500 text-3xl font-normal font-['Inter']">
              기호를 분석 중이에요!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecogFail = ({ retry, setRetry }) => {
  return (
    <div
      style={{
        display: retry ? "block" : "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "30px",
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
          backgroundColor: "white",
        }}
      >
        <div className="w-[689px] h-[361px] bg-white/opacity-95 rounded-[30px] shadow flex-col justify-center items-center inline-flex gap-[50px]">
          <div className="text-center text-neutral-500 text-3xl font-normal font-['Inter'] gap-[20px]">
            <div className="flex justify-center">
              <p>이미지 인식에 실패했어요. </p>
              <img className="w-[25px] h-[25px] mt-1" src={smile} />
            </div>
            <p>다시 시도하시거나, 기호를 직접 그려보세요.</p>
          </div>

          <button
            onClick={() => {
              setRetry(false);
            }}
            className="w-[367px] h-[67px] bg-zinc-400 rounded-lg flex-col justify-center items-center gap-2.5 flex"
          >
            <div className="justify-start items-center gap-[15px] inline-flex">
              <img className="w-[30px] h-[30px] relative" src={whiteArrow} />
              <div className="text-center text-white text-xl font-normal font-['Inter'] leading-tight">
                다시 업로드하러 가기
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Loading, RecogFail };
