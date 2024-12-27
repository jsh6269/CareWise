import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import defaultProfile from "../assets/images/icons/kinopio.jpg";
import pen from "../assets/images/icons/pen.svg";
import like from "../assets/images/icons/like.svg";
import dislike from "../assets/images/icons/dislike.svg";
import hanger from "../assets/images/icons/hanger.svg";
import symbol from "../assets/images/icons/symbol.svg";
import ProfileModal from "../components/ProfileModal";

const UserPage = () => {
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const [nickname, setNickname] = useState("유니짱");
  const [email, setEmail] = useState("yunheechoi@snu.ac.kr");
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isDeveloperModalOpen, setDeveloperModalOpen] = useState(false);
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const openModal = (modalSetter) => modalSetter(true);
  const closeModal = (modalSetter) => modalSetter(false);
  const profileModalContent = (
    <>
      <div className="flex flex-row mb-6">
        <img
          src={profileImage || defaultProfile}
          alt="Profile"
          className="w-[148px] h-[148px] rounded-full mb-4"
        />
        <button
          className="ml-[70px] mt-[60px] bg-[#3F3F3F] h-[36px] text-white text-sm px-6 py-2 rounded-lg hover:bg-[#555] transition duration-300"
          onClick={() => document.getElementById("profile-image-input").click()}
        >
          사진 변경하기
        </button>
        <input
          type="file"
          id="profile-image-input"
          accept="image/*"
          className="hidden"
        />
      </div>
      <form className="flex flex-col gap-4">
        <label className="text-sm">아이디 변경</label>
        <input type="text" className="p-2 border border-gray-300 rounded-md" />
        <label className="text-sm">닉네임 변경(최대 10자)</label>
        <input type="text" className="p-2 border border-gray-300 rounded-md" />
      </form>
      <div className="flex justify-center mt-8">
        <button className="bg-[#3F3F3F] text-white text-sm px-6 py-2 rounded-lg hover:bg-[#555] transition duration-300">
          프로필 수정하기
        </button>
      </div>
    </>
  );

  // 개발자 괴롭히기 모달 내용
  const developerModalContent = (
    <>
      <p className="text-sm text-[#757575]">
        건의사항, 버그 제보 등 CareWise에게 문의할 점을 남겨주세요!
      </p>
      <textarea
        className="w-full h-40 p-4 mt-5 border border-gray-300 rounded-md resize-none"
        placeholder="여기에 내용을 입력해주세요..."
      />
      <div className="flex justify-center mt-4">
        <button className="bg-[#3F3F3F] text-white px-6 py-2 rounded-lg hover:bg-[#555] transition duration-300">
          제출하기
        </button>
      </div>
    </>
  );

  // 비밀번호 변경 모달 내용
  const passwordModalContent = (
    <>
      <form className="flex flex-col gap-4 mt-8">
        <label className="text-sm">현재 비밀번호</label>
        <input
          type="password"
          className="p-2 border border-gray-300 rounded-md"
        />
        <label className="text-sm">새 비밀번호</label>
        <input
          type="password"
          className="p-2 border border-gray-300 rounded-md"
        />
        <label className="text-sm">새 비밀번호 확인</label>
        <input
          type="password"
          className="p-2 border border-gray-300 rounded-md"
        />
      </form>
      <div className="flex justify-center mt-8">
        <button className="bg-[#3F3F3F] text-white text-sm px-6 py-2 rounded-lg hover:bg-[#555] transition duration-300">
          비밀번호 변경
        </button>
      </div>
    </>
  );

  // 계정 삭제 모달 내용
  const deleteModalContent = (
    <>
      <form className="flex flex-col gap-4 mt-8">
        <label className="text-sm">비밀번호</label>
        <input
          type="password"
          className="p-2 border border-gray-300 rounded-md"
        />
      </form>
      <div className="flex justify-center mt-8">
        <button
          className="bg-[#3F3F3F] text-white text-sm px-6 py-2 rounded-lg hover:bg-[#555] transition duration-300"
          onClick={() => alert("계정이 삭제되었습니다.")}
        >
          탈퇴하기
        </button>
      </div>
    </>
  );

  useEffect(() => {
    // 프로필 정보 가져오기
    // axios
    //   .get("/api/user-profile")
    //   .then((response) => {
    //     const { profileImageUrl, nickname, email } = response.data;
    //     if (profileImageUrl) setProfileImage(profileImageUrl);
    //     if (nickname) setNickname(nickname);
    //     if (email) setEmail(email);
    //   })
    //   .catch((error) => {
    //     console.error("프로필 정보를 불러오는 데 실패했습니다.", error);
    //   });
    // 추천 개수 가져오기
    // axios
    //   .get("/api/like-count")
    //   .then((response) => {
    //     setLikeCount(response.data.count); // 추천 개수 업데이트
    //   })
    //   .catch((error) => {
    //     console.error("추천 개수를 불러오는 데 실패했습니다.", error);
    //   });
    // 비추천 개수 가져오기
    // axios
    //   .get("/api/dislike-count")
    //   .then((response) => {
    //     setDislikeCount(response.data.count); // 비추천 개수 업데이트
    //   })
    //   .catch((error) => {
    //     console.error("비추천 개수를 불러오는 데 실패했습니다.", error);
    //   });
  }, []);

  return (
    <div className="w-[1440px] h-[1150px] flex justify-center bg-white">
      <div className="flex flex-col">
        <div className="w-[1045px] h-[186px] px-[42px] mt-[75px] shadow-custom-light rounded-2xl bg-white flex flex-row gap-4 items-center">
          <img
            src={profileImage}
            alt="profile"
            className="w-[130px] h-[130px] border-radius-50"
          />
          <div className="ml-[53px] flex flex-col gap-[8px]">
            <h2 className="text-[25px] font-semibold text-[#3F3F3F]">
              {nickname}
            </h2>
            <p className="text-[#757575] text-[17px]">{email}</p>
          </div>
          <button
            className="ml-[424px] w-[106px] h-[33px] rounded-2xl hover:bg-[#757575] hover:text-white border border-[#757575] text-[#757575] text-[13px]"
            onClick={() => openModal(setProfileModalOpen)}
          >
            프로필 수정
          </button>
        </div>

        <ProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => closeModal(setProfileModalOpen)}
          title="프로필 수정하기"
        >
          {profileModalContent}
        </ProfileModal>

        <ProfileModal
          isOpen={isDeveloperModalOpen}
          onClose={() => closeModal(setDeveloperModalOpen)}
          title="개발자 괴롭히기"
        >
          {developerModalContent}
        </ProfileModal>

        <ProfileModal
          isOpen={isPasswordModalOpen}
          onClose={() => closeModal(setPasswordModalOpen)}
          title="비밀번호 변경"
        >
          {passwordModalContent}
        </ProfileModal>

        <ProfileModal
          isOpen={isDeleteModalOpen}
          onClose={() => closeModal(setDeleteModalOpen)}
          title="계정 삭제"
        >
          {deleteModalContent}
        </ProfileModal>

        <div className="mt-[64px] gap-[25px] flex flex-col">
          <h2 className="text-[25px] font-semibold text-[#3F3F3F]">
            QnA 커뮤니티
          </h2>
          {/*링크연결하기*/}
          <a className="flex flex-row gap-[23px] text-[16px] text-[#3A3A3A]">
            <img src={pen} alt="pen" />
            <span>내가 작성한 글</span>
          </a>
          <a className="flex flex-row gap-[23px] text-[16px] text-[#3A3A3A]">
            <img src={like} alt="like" />
            <span>추천한 글</span>
            <span className="ml-[32px] text-[#E86666]">{likeCount}</span>{" "}
            {/* 추천 개수 표시 */}
          </a>
          <a className="flex flex-row gap-[23px] text-[16px] text-[#3A3A3A]">
            <img src={dislike} alt="dislike" />
            <span>비추천한 글</span>
            <span className="text-[#4762AB] ml-[16px]">
              {dislikeCount}
            </span>{" "}
            {/* 비추천 개수 표시 */}
          </a>
        </div>

        <hr className="mt-[50px]" />

        <div className="mt-[48px] gap-[25px] flex flex-col">
          <h2 className="text-[25px] font-semibold text-[#3F3F3F]">내 옷장</h2>
          {/*링크연결하기*/}
          <Link
            to="/closet"
            className="flex flex-row gap-[23px] text-[16px] text-[#3A3A3A]"
          >
            <img src={hanger} alt="hanger" />
            <span>내 옷장 보기</span>
          </Link>
          <a className="flex flex-row gap-[23px] text-[16px] text-[#3A3A3A]">
            <img src={symbol} alt="symbol" />
            <span>옷장에 옷 등록하기</span>
          </a>
        </div>
        <hr className="mt-[50px]" />

        <div className="mt-[48px] gap-[25px] flex flex-col">
          <h2 className="text-[25px] font-semibold text-[#3F3F3F]">계정</h2>
          {/*링크연결하기*/}
          <a className="flex flex-row gap-[23px] text-[16px] text-[#3A3A3A]">
            <span onClick={() => openModal(setDeveloperModalOpen)}>
              개발자 괴롭히기
            </span>
          </a>
          <a className="flex flex-row gap-[23px] text-[16px] text-[#3A3A3A]">
            <span onClick={() => openModal(setPasswordModalOpen)}>
              비밀번호 변경
            </span>
          </a>
          <a className="flex flex-row gap-[23px] text-[16px] text-[#3A3A3A]">
            <span onClick={() => openModal(setDeleteModalOpen)}>탈퇴하기</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
