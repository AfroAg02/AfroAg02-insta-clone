'use client'
import React from "react";
import { UserImg } from "./UserImg";

interface UserStoryProps {
  username: string;
  avatar: string;
}

const UserStory: React.FC<UserStoryProps> = ({ username, avatar }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="relative">
        <UserImg username={ username} avatar={avatar} />
        <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-4 h-4"></div>
      </div>
      <span className="text-xs">{username}</span>
    </div>
  );
};

export default UserStory;
