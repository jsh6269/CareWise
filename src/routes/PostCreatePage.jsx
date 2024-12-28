import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import camera from "../assets/images/icons/camera.svg";
import paperPlane from "../assets/images/icons/paper-plane-white.svg";
import posts from "../dummyData/posts";
import { DetailedPost } from "../components/Posts";

export const PostCreatePage = () => {
  const date = new Date();
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [post, setPost] = useState({
    id: posts.length,
    title: "",
    content: "",
    author: { username: "유니삐", profile: "default" },
    like_count: 0,
    dislike_count: 0,
    created_at: "0000-00-00",
    comments: [],
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const createdPost = {
      ...post,
      created_at: date.toISOString(),
    };
    setPost(createdPost);
    setIsSubmitted(true);

    alert("게시글을 등록합니다.");
  };

  return isSubmitted ? (
    <DetailedPost post={post} />
  ) : (
    <form
      onSubmit={onSubmit}
      className="bg-white w-[1043px] flex-col justify-center mx-auto"
    >
      <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[35px] leading-[normal] mt-[38px] mb-2.5">
        QnA 커뮤니티
      </div>
      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-[17px] leading-[normal]">
        자유롭게 의복 세탁, 관리에 대한 질문 및 의견을 나눠보세요!
      </p>

      <div className="flex justify-between mt-[31px] mb-[33px]">
        <button
          onClick={() => {
            navigate("/qna-board");
          }}
          className="flex w-[154px] h-[33px] items-center justify-center rounded-[15px] border border-solid border-[#a4a3a3]"
        >
          <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-[13px] tracking-[0] leading-[normal]">
            목록으로 돌아가기
          </div>
        </button>

        <button
          type="submit"
          className="flex w-[136px] h-[33px] items-center justify-center gap-[5px] bg-[#3f3f3f] rounded-[15px]"
        >
          <img
            className="w-[15px] h-[15px]"
            fill="white"
            alt="upload"
            src={paperPlane}
          />
          <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
            업로드하기
          </div>
        </button>
      </div>

      <div className="mb-[80px] border-[0.5px] border-solid border-[#a4a3a3] rounded-[10px] px-[66px] py-[56px]">
        <input
          id="title"
          required
          onChange={handleChange}
          className="mb-[24px] w-full [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#666666] text-[25px] whitespace-nowrap tracking-[0] leading-[normal]"
          placeholder="제목을 입력하세요"
        ></input>
        <hr></hr>
        <textarea
          id="content"
          required
          onChange={handleChange}
          rows="10"
          className="mt-[29px] mb-[29px] w-full [font-family:'Inter-Regular',Helvetica] font-normal text-[#666666] text-[17px] tracking-[0] leading-[normal]"
          placeholder="내용을 입력하세요"
        ></textarea>
        <hr></hr>
        <button className="mt-[15px] w-[33px] h-[29px]">
          <img alt="photo upload" src={camera} />
        </button>
      </div>
    </form>
  );
};
