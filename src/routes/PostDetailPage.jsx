import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import posts from "../dummyData/posts"
import {DetailedPost} from "../components/Posts/index"

export const PostDetailPage = () => {
  const { postID } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postID));
    setPost(post);
  }, [postID]);

  return (
    post && <DetailedPost post={post}/>
  );
};