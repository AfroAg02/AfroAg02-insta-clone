'use client'
import React from "react";
import { UserImg } from "../header/users/UserImg";

interface SuggestionPaneProps {
  username: string;
 imageUrl: string;
}

const Suggestion: React.FC<SuggestionPaneProps> = ({
  username,
  imageUrl,
}) => {
  return (
    <div className="flex items-center space-x-3">
     <UserImg avatar={imageUrl} username={username}></UserImg>
      <div>
        <p className="font-semibold">{username}</p>
        <p className="text-gray-500 text-sm">Recomendación de Instagram</p>
      </div>
    </div>
  );
};

export default Suggestion;
