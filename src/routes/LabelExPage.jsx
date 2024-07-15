import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AWS from "aws-sdk";

import { default as Canvas } from "../components/Canvas/index.jsx";
import careLabelSample from "../assets/images/icons/carelabel-sample.png";
import uploadLogo from "../assets/images/icons/material-symbols_upload.png";
import { Loading, RecogFail } from "../components/Modal/index.jsx";

const LabelExPage = () => {
  const [isLoading, setisLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    // AWS S3 설정
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID, // IAM 사용자 엑세스 키 변경
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY, // IAM 엑세스 시크릿키 변경
      region: "ap-northeast-2", // 리전 변경
    });

    const s3 = new AWS.S3();
    const date = new Date();

    // 업로드할 파일 정보 설정
    const uploadParams = {
      Bucket: "carewise-input", // 버킷 이름 변경
      Key: `${date.toISOString()}.png`, // S3에 저장될 경로와 파일명
      Body: selectedFile,
    };

    // S3에 파일 업로드
    s3.upload(uploadParams, (err, data) => {
      if (err) {
        console.error("Error uploading file:", err);
      } else {
        console.log("File uploaded successfully. ETag:", data.ETag);
        // 업로드 성공 후 필요한 작업 수행
      }
    });
  };

  return (
    <>
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[1440px] h-[1389px] relative">
          <div className="absolute w-[822px] top-[39px] left-[110px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            케어라벨 세탁기호 분석하기
          </div>
          {/*group 18 in figma*/}
          <div className="absolute w-[1221px] h-[494px] top-[145px] left-[109px] bg-white rounded-[20px] border-2 border-solid border-[#a4a3a3] shadow-[0px_4px_4px_#00000033]">
            <div className="flex flex-col w-[729px] items-start gap-1.5 pl-[85px] pr-0 pt-[50px] pb-0 absolute -top-0.5 -left-px">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[32px] tracking-[0] leading-[normal]">
                사진 분석
              </div>
              <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-[21.5px] tracking-[0] leading-[normal]">
                케어라벨에 그려져 있는 세탁기호의 사진을 찍어서 업로드해보세요!
              </p>
            </div>
            <img
              className="absolute w-[498px] h-[284px] top-[158px] left-[88px] object-cover"
              alt="carelabel sample"
              src={careLabelSample}
            />
            <div className="z-50">
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute top-[211px] left-[710px]"
                accept=".jpg, .jpeg, .png"
              />
              <button
                onClick={handleUpload}
                className="flex flex-col w-[421px] h-[67px] items-center justify-center gap-2.5 px-[133px] py-[18px] absolute top-[261px] left-[710px] bg-[#b5b5b5] rounded-lg"
              >
                <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                  <img
                    className="relative w-[31px] h-[31px]"
                    alt="Material symbols"
                    src={uploadLogo}
                  />
                  <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-5 whitespace-nowrap">
                    사진 업로드
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/*group 21 in figma*/}
          <div className="absolute w-[1221px] h-[588px] top-[729px] left-[109px] bg-white rounded-[20px] border-2 border-solid border-[#a4a3a3] shadow-[0px_4px_4px_#00000033]">
            <div className="flex flex-col w-[729px] h-36 items-start gap-1.5 pl-[85px] pr-0 pt-[50px] pb-0 absolute -top-0.5 -left-px">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[32px] tracking-[0] leading-[normal]">
                그림 분석
              </div>
              <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-[21.5px] tracking-[0] leading-[normal]">
                사진 인식이 어렵다면, 직접 그림을 그려서 업로드해보세요!
              </p>
            </div>

            {/*frame 51 in figma*/}
            <div className="inline-flex items-center gap-3 absolute top-[147px] left-[85px]">
              <Canvas />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Loading isLoading={isLoading} />
      </div>
    </>
  );
};

export default LabelExPage;
