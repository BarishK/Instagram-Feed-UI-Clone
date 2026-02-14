"use client";

import Image from "next/image";

export default function Story({ username, profilePicture }) {
  return (
    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] text-center">
      <div className="relative w-full h-full rounded-full bg-white p-[2px]">
        <Image
          src={profilePicture}
          alt="profilepicture"
          fill
          className="rounded-full"
        />
      </div>

      <span className="text-sm mt-1 ">{username}</span>
    </div>
  );
}
