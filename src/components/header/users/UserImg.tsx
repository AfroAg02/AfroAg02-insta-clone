import React from 'react'
import Image from 'next/image';

interface UserStoryProps {
  username: string;
  avatar: string;
}

export const UserImg: React.FC<UserStoryProps> = ({ avatar, username }) => {
  return (
    <Image
      src={avatar}
      alt={`Avatar de ${username}`}
      className="rounded-full border-4 border-red-500 w-16 h-16 object-cover"
      width={150}
      height={150}
    />
  );
};
