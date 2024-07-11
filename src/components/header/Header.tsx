"use client";
import React from "react";
import UserStory from "./users/UserStory";
import { users } from "@/libs/const";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex space-x-4">
        {users.map((story, index) => (
          <UserStory
            key={index}
            username={story.username}
            avatar={story.imageUrl}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
