import Image from "next/image";
import profile from "../../public/general/profile.jpg";
import post1 from "../../public/posts/post1.avif";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { CiSaveDown2 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

export default function FeedPost({ postOwner, userPost, userProfile }) {
  return (
    <div className="w-9/10">
      {/* POST OWNER */}
      <div className="flex items-center">
        {/* POST OWNER PICTURE */}
        <div className="relative w-10 h-10">
          <Image src={userProfile} fill alt="" className="rounded-full" />
        </div>
        {/* POST OWNER USERNAME */}
        <div className="ml-2">
          <span className="font-bold text-l">{postOwner}</span>
          <span className="text-sm ml-2 text-gray-500">
            - {userPost.postTime}
          </span>
        </div>
        {/* POST SETTINGS */}
        <div className="ml-auto">
          <BsThreeDots />
        </div>
      </div>
      {/* POST IMAGE */}
      <div className="flex justify-center my-5">
        <div className="relative w-9/10 h-[400px]">
          <Image
            src={userPost.postImg}
            fill
            alt="post"
            className="object-cover"
          />
        </div>
      </div>

      {/* POST FOOTER ICONS*/}
      <div className="flex justify-between mx-5 items-center">
        <div className="flex gap-5">
          <FaRegHeart size={24} className="cursor-pointer hover:text-red-300" />
          <FaRegComment
            size={24}
            className="cursor-pointer hover:text-green-300"
          />
          <RiShareForwardLine
            size={24}
            className="cursor-pointer hover:text-blue-300"
          />
        </div>
        <div>
          <CiSaveDown2
            size={24}
            className="cursor-pointer hover:text-yellow-200"
          />
        </div>
      </div>
      {/* POST CONTENT */}
      <div className="mx-5 my-2">{userPost.postContent}</div>
    </div>
  );
}
