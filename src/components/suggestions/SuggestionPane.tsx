'use-client'

import React from "react";
import Suggestion from "./Suggestion";
import { users } from "@/libs/const";

const SuggestionsPanel: React.FC = () => {

  const limitedUsers = users.slice(0, 4);

  return (
    <div className="bg-black border border-gray-300 rounded-lg shadow-md p-4 w-1/5">
      <h2 className="font-semibold text-white text-lg mb-3">Sugerencias para ti</h2>
      <div className="space-y-4 overflow-y-auto max-h-56">
        {limitedUsers.map((user) => (
          <Suggestion
            key={user.username}
            username={user.username}
            imageUrl={user.imageUrl}
          />
        ))}
      </div>
      {users.length > 4 && (
        <div className="mt-4 text-white cursor-pointer">Ver todo</div>
      )}
    </div>
  );
};

export default SuggestionsPanel;
