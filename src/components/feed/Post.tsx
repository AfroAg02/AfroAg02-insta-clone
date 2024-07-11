// components/Post.tsx
import React, { useState } from "react";
import { FaHeart, FaComment, FaBookmark } from "react-icons/fa";
import Image from "next/image";
import { UserImg } from "../header/users/UserImg";

interface PostProps {
  username: string;
  imageUrl: string;
  likes: number;
}

const Post: React.FC<PostProps> = ({ username, imageUrl, likes }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(prevCount => prevCount - 1);
    } else {
      setLikeCount(prevCount => prevCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="h-max flex flex-col items-center justify-center">
      <div className="flex-grow bg-black border border-gray-300 w-[40%] my-5 rounded-lg shadow-md h-max ">
        {/* Imagen del post */}
        <div className="flex items-center gap-4">

        <UserImg avatar={imageUrl} username={username} />{" "}
        <span className="font-semibold">{username}</span>
        </div>
        <Image
          src={`https://cataas.com/cat/says/${username}`}
          alt={`Publicación de ${username}`}
          width={1500}
          height={1200}
          className="w-full"
        />

        <div className="p-4 bg-black flex flex-col justify-between flex-grow text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2"></div>

            <div className="flex space-x-4">
              <div
                className={`cursor-pointer text-2xl ${
                  isLiked ? "text-red-500" : "text-white"
                }`}
                onClick={handleLikeClick}
              >
                <FaHeart />
              </div>
              <div className="cursor-pointer text-2xl text-white">
                <FaComment />
              </div>
              <div className="cursor-pointer text-2xl text-white">
                <FaBookmark />
              </div>
            </div>
          </div>


          <div className="mb-2">
            <span className="font-semibold">{likeCount} likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
