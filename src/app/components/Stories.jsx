"use client";

import users from "../store/users.js";
import Story from "./Story";

const stories = [
  { id: 1, name: "Barish", img: "" },
  { id: 2, name: "Ahmet", img: "/story/2.jpg" },
  { id: 3, name: "Mehmet", img: "/story/3.jpg" },
  { id: 4, name: "Ayse", img: "/story/4.jpg" },
  { id: 5, name: "Fatma", img: "/story/5.jpg" },
  { id: 6, name: "Hayriye", img: "/story/6.jpg" },
  { id: 7, name: "Haberler", img: "/story/6.jpg" },
  { id: 8, name: "Komik", img: "/story/6.jpg" },
  { id: 9, name: "Eglence", img: "/story/6.jpg" },
  { id: 10, name: "Hayriye", img: "/story/6.jpg" },
];

export default function Stories() {
  return (
    <div className="w-full border-b border-gray-200 h-[100]">
      <div className="flex gap-4 overflow-x-auto overflow-y-auto scrollbar-hide py-2 h-full">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center min-w-[70px] cursor-pointer"
          >
            <Story
              username={user.username}
              profilePicture={user.profilePicture}
              storyImg={user.stories[0].storyImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
