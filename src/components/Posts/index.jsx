import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pencil from "../../assets/images/icons/pencil.svg";
import ThumbUp from "../../assets/images/icons/thumb-up.svg";
import ThumbUpRed from "../../assets/images/icons/thumb-up-red.png";
import ThumbDown from "../../assets/images/icons/thumb-down.svg";
import defaultProfile from "../../assets/images/icons/default-profile.png";
import SpeechBubble from "../../assets/images/icons/speech-bubble.svg";
import paperPlane from "../../assets/images/icons/paper-plane-gray.svg";
import replyArrow from "../../assets/images/icons/reply-arrow.png";

export const DetailedPost = ({ post }) => {
  const navigate = useNavigate();
  const date = new Date();
  const [replyFor, setReplyFor] = useState(0);
  const [comment, setComment] = useState({
    content: "",
    author: { username: "유니삐", profile: "default" },
    like_count: 0,
    dislike_count: 0,
    created_at: "0000-00-00",
    replies: [],
  });
  const [comments, setComments] = useState(post.comments);

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (replyFor) {
      const createdReply = {
        content: comment.content,
        author: { username: "유니삐", profile: "default" },
        like_count: 0,
        dislike_count: 0,
        created_at: date.toISOString(),
      };
      const filteredComments = comments.filter(
        (comment) => comment !== replyFor,
      );
      const newComment = {
        ...replyFor,
        replies: [...replyFor.replies, createdReply],
      };
      setComments([...filteredComments, newComment]);
      alert("대댓글을 등록합니다.");
    } else {
      const createdComment = {
        ...comment,
        created_at: date.toISOString(),
      };
      setComments([...comments, createdComment]);
      alert("댓글을 등록합니다.");
    }
    setReplyFor(0);
  };

  return (
    <div className="bg-white w-[1043px] flex-col justify-center mx-auto dark:bg-black">
      <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] dark:text-white text-[35px] leading-[normal] mt-[38px] mb-2.5">
        QnA 커뮤니티
      </div>
      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] dark:text-white text-[17px] leading-[normal]">
        자유롭게 의복 세탁, 관리에 대한 질문 및 의견을 나눠보세요!
      </p>

      <div className="flex justify-between mt-[31px] mb-[33px]">
        <button
          onClick={() => {
            navigate("/qna-board");
          }}
          className="flex w-[154px] h-[33px] items-center justify-center rounded-[15px] border border-solid border-[#a4a3a3]"
        >
          <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] dark:text-white text-[13px] tracking-[0] leading-[normal]">
            목록으로 돌아가기
          </div>
        </button>

        <button
          onClick={() => {
            navigate("/post-create");
          }}
          className="w-[136px] h-[33px] gap-1 flex items-center justify-center rounded-[15px] border border-solid border-[#a4a3a3]"
        >
          <img className="w-5 h-5" alt="Pencil" src={Pencil} />
          <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] dark:text-white text-[13px] leading-[normal]">
            글 작성하기
          </div>
        </button>
      </div>

      <div className="border-[0.5px] border-solid border-[#a4a3a3] rounded-[10px] mb-[29px] px-[66px] py-[56px]">
        <p className="mb-[12px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black dark:text-white text-[25px] whitespace-nowrap tracking-[0] leading-[normal]">
          {post.title}
        </p>
        <div className="flex items-center gap-[9px] mb-[12px]">
          <img
            className="w-[30px] h-[30px] mr-[4px] rounded-full"
            alt="default profile"
            src={defaultProfile}
          />
          <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#767676] text-sm tracking-[0] leading-[normal]">
            {post.author.username}
          </div>
          <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-black dark:text-white text-[13px] tracking-[0] leading-[normal]">
            ｜
          </div>
          <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#b8b8b8] text-xs tracking-[0] leading-[normal]">
            {post.created_at.slice(0, 10)}
          </div>
        </div>

        <hr></hr>

        <div className="my-[42px] [font-family:'Inter-Regular',Helvetica] font-normal text-black dark:text-white text-[17px] tracking-[0] leading-[normal]">
          {post.content}
        </div>

        <div className="flex items-center gap-[27px] mb-[38px]">
          <button className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
            <img className="w-5 h-5" alt="ThumbUp" src={ThumbUp} />
            <div className="text-[#555555] dark:text-white text-xl whitespace-nowrap [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
              {post.like_count}
            </div>
          </button>
          <button className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
            <img className="w-5 h-5" alt="ThumbDown" src={ThumbDown} />
            <div className="text-[#555555] dark:text-white text-xl whitespace-nowrap [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
              {post.dislike_count}
            </div>
          </button>
        </div>

        <hr></hr>

        <div className="mt-[36px] ml-[6px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#696969] text-[25px] whitespace-nowrap tracking-[0] leading-[normal] dark:text-white">
          댓글
        </div>

        <div>
          {comments.map((comment) => (
            <div>
              <div
                className={
                  comment === replyFor
                    ? "px-[20px] py-[25px] rounded-[10px] bg-[#F6F6F6]"
                    : "px-[20px] py-[25px]"
                }
              >
                <div className="flex justify-between">
                  <div className="flex items-center gap-[9px] mb-[12px]">
                    <img
                      className="w-[30px] h-[30px] mr-[4px] rounded-full"
                      alt="default profile"
                      src={defaultProfile}
                    />
                    <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#767676] text-sm tracking-[0] leading-[normal] dark:text-white">
                      {comment.author.username}
                    </div>
                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal] dark:text-white">
                      ｜
                    </div>
                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#b8b8b8] text-xs tracking-[0] leading-[normal] dark:text-white">
                      {comment.created_at.slice(0, 10)}
                    </div>
                  </div>

                  <div className="flex items-center gap-[11px]">
                    <button className="inline-flex items-center gap-[7px] flex-[0_0_auto]">
                      <img
                        className="w-[13px] h-[13px]"
                        alt="ThumbUp"
                        src={ThumbUpRed}
                      />
                      <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#e76565] text-[13px] tracking-[0] leading-[normal]">
                        {comment.like_count}
                      </div>
                    </button>
                    <button className="inline-flex items-center gap-[7px] flex-[0_0_auto]">
                      <img
                        className="w-[13px] h-[13px]"
                        alt="ThumbDown"
                        src={ThumbDown}
                      />
                      <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[13px] tracking-[0] leading-[normal]">
                        {comment.dislike_count}
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        if (replyFor === comment) {
                          setReplyFor(0);
                        } else {
                          setReplyFor(comment);
                        }
                      }}
                      className="w-[15px] h-[15px]"
                    >
                      <img alt="reply" src={SpeechBubble} />
                    </button>
                  </div>
                </div>

                <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal] dark:text-white">
                  {comment.content}
                </div>
              </div>
              {comment.replies.map((reply) => (
                <div className="flex px-[20px] py-[25px] gap-[21px]">
                  <img
                    className="w-[25px] h-[27px] dark:invert"
                    src={replyArrow}
                  />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-[9px] mb-[12px]">
                        <img
                          className="w-[30px] h-[30px] mr-[4px] rounded-full"
                          alt="default profile"
                          src={defaultProfile}
                        />
                        <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#767676] text-sm tracking-[0] leading-[normal]">
                          {reply.author.username}
                        </div>
                        <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
                          ｜
                        </div>
                        <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#b8b8b8] text-xs tracking-[0] leading-[normal]">
                          {reply.created_at.slice(0, 10)}
                        </div>
                      </div>

                      <div className="flex items-center gap-[11px] ">
                        <button className="inline-flex items-center gap-[7px] flex-[0_0_auto]">
                          <img
                            className="w-[13px] h-[13px]"
                            alt="ThumbUp"
                            src={ThumbUp}
                          />
                          <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#e76565] text-[13px] tracking-[0] leading-[normal] ">
                            {reply.like_count}
                          </div>
                        </button>
                        <button className="inline-flex items-center gap-[7px] flex-[0_0_auto]">
                          <img
                            className="w-[13px] h-[13px]"
                            alt="ThumbDown"
                            src={ThumbDown}
                          />
                          <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#e76565] text-[13px] tracking-[0] leading-[normal]">
                            {reply.dislike_count}
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal] dark:text-white">
                      {reply.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-[30px] flex w-full items-center justify-between gap-[14px] px-[25px] py-[15px] bg-[#f3f3f3] rounded-[10px] dark:bg-zinc-700 dark:border-white"
        >
          <img
            className="w-5 h-[18px] dark:invert"
            alt="Speech Bubble"
            src={SpeechBubble}
          />
          <input
            id="content"
            onChange={handleChange}
            className="w-full [font-family:'Inter-Regular',Helvetica] font-normal bg-[#f3f3f3] text-[#757575]  dark:text-white text-[17px] tracking-[0] leading-[normal] dark:bg-zinc-700"
            placeholder="댓글을 입력하세요"
            required
          ></input>
          <button type="submit" className="w-5 h-5">
            <img alt="send" src={paperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
};

export const SimplePost = ({ post }) => {
  return (
    <div className="mt-[26px]">
      <Link to={`/post/${post.id}`} className="w-full flex-col">
        <div className="flex justify-start mb-[21px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal] dark:text-white">
          {post.title}
        </div>

        <div className="flex justify-between mb-[26px]">
          <div className="flex items-center gap-[9px]">
            <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#767676] text-sm tracking-[0] leading-[normal] dark:text-white">
              {post.author.username}
            </div>
            <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal] dark:text-white">
              ｜
            </div>
            <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#b8b8b8] text-xs tracking-[0] leading-[normal] dark:text-white">
              {post.created_at.slice(0, 10)}
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex items-center gap-[7px]">
              <img className="w-[13px] h-[13px]" alt="ThumbUp" src={ThumbUp} />
              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#555555] text-[13px] tracking-[0] leading-[normal]">
                {post.like_count}
              </div>
            </div>

            <div className="flex items-center gap-[7px]">
              <img
                className="w-[13px] h-[13px]"
                alt="ThumbDown"
                src={ThumbDown}
              />
              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#555555] text-[13px] tracking-[0] leading-[normal]">
                {post.dislike_count}
              </div>
            </div>

            <div className="flex items-center gap-[7px]">
              <img
                className="w-[13px] h-3"
                alt="SpeechBubble"
                src={SpeechBubble}
              />
              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#555555] text-[13px] tracking-[0] leading-[normal]">
                {post.comments.length}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <hr></hr>
    </div>
  );
};
