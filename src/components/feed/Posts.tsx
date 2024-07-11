'use client'
import React from "react";
import Post from "./Post";
import { users } from "@/libs/const";


const Posts: React.FC = () => {
  return (
    <div className="overflow-y-auto h-screen">
      {users.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          imageUrl={post.imageUrl}
          likes={post.likes}
        />
      ))}
    </div>
  );
};

export default Posts;
