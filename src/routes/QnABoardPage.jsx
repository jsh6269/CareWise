import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import Pencil from "../assets/images/icons/pencil.svg";
import materialSymbolsSearch from "../assets/images/icons/search.svg";
import posts from "../dummyData/posts.js";
import { SimplePost } from "../components/Posts/index.jsx";

export const QnABoardPage = () => {
  const navigate = useNavigate();
  const [viewAll, setViewAll] = useState(true);
  const [hotPosts, setHotPosts] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    window.scrollTo(0, 320);
  };

  const [postList, setPostList] = useState(posts);

  const handleSearch = (e) => {
    const { value } = e.target;
    if (viewAll) {
      setPostList(posts.filter((post) => post.title.includes(value)));
    } else {
      setPostList(
        posts.filter(
          (post) => post.title.includes(value) && post.like_count >= 10,
        ),
      );
    }
  };

  useEffect(() => {
    setHotPosts(posts.filter((post) => post.like_count >= 10));
  }, [postList]);

  return (
    <div className="bg-white w-[1043px] flex-col justify-center mx-auto dark:bg-black">
      <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[35px] leading-[normal] mt-[38px] mb-2.5 dark:text-white">
        QnA 커뮤니티
      </div>
      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-[17px] leading-[normal] dark:text-white">
        자유롭게 의복 세탁, 관리에 대한 질문 및 의견을 나눠보세요!
      </p>

      <div className="flex justify-between mt-[31px] mb-[33px]">
        <div className="flex gap-3">
          <button
            onClick={() => {
              setViewAll(true);
              setPostList(posts);
            }}
            className={`flex w-[89px] h-[33px] items-center justify-center rounded-[15px] border border-solid border-[#666666] ${viewAll ? "bg-[#666666]" : ""}`}
          >
            <div
              className={`[font-family:'Inter-Regular',Helvetica] font-normal text-[13px] leading-[normal] ${viewAll ? "text-white" : "text-[#666666]"}`}
            >
              전체글
            </div>
          </button>
          <button
            onClick={() => {
              setViewAll(false);
              setPostList(hotPosts);
            }}
            className={`flex w-[89px] h-[33px] items-center justify-center rounded-[15px] border border-solid border-[#666666] ${viewAll ? "" : "bg-[#666666]"}`}
          >
            <div
              className={`[font-family:'Inter-Regular',Helvetica] font-normal text-[13px] leading-[normal] ${viewAll ? "text-[#666666]" : "text-white"}`}
            >
              인기글
            </div>
          </button>
        </div>

        <button
          onClick={() => {
            navigate("/post-create");
          }}
          className="w-[136px] h-[33px] gap-1 flex items-center justify-center bg-white rounded-[15px] border border-solid border-[#a4a3a3]"
        >
          <img className="w-5 h-5" alt="Pencil" src={Pencil} />
          <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-[13px] leading-[normal]">
            글 작성하기
          </div>
        </button>
      </div>

      <div className="flex h-[47px] items-center gap-2 px-[21px] py-[15px] bg-[#f3f3f3] rounded-[10px] mb-[50px]">
        <img
          className="w-6 h-6"
          alt="search icon"
          src={materialSymbolsSearch}
        />
        <input
          required
          onChange={handleSearch}
          className="w-full [font-family:'Inter-Regular',Helvetica] font-normal bg-[#f3f3f3] text-[#757575] text-[13px] leading-[normal]"
          placeholder="검색하기"
        />
      </div>

      <div className="flex-col">
        {postList.slice(8 * (page - 1), 8 * page).map((post) => (
          <SimplePost post={post} />
        ))}
      </div>

      <div className="mt-[50px] flex justify-center">
        <Pagination
          activePage={page}
          itemsCountPerPage={8}
          totalItemsCount={posts.length}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
          className="flex justify-center"
        />
      </div>
    </div>
  );
};
