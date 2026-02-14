import Image from "next/image";
import profile from "../../public/general/profile.jpg";
import Link from "next/link";

export default function RightbarCard({ username, name, isThisUser }) {
  return (
    <div className="flex justify-between items-center w-full gap-10 ">
      {/* PROFILE PICTURE */}
      <div className="flex gap-2">
        <div className="w-12 h-12 relative rounded-full">
          <Image
            src={profile}
            className="rounded-full"
            fill
            alt="Picture of the author"
          />
        </div>
        {/* PROFILE NAME */}
        <div>
          <p className="font-bold text-md">
            {isThisUser ? "baris.kkorkmz" : username}
          </p>
          <p className="text-sm text-gray-600">
            {isThisUser ? "Barish Korkmaz" : name}
          </p>
        </div>
      </div>
      {/*  CHANGE PROFILE OR FOLLOW */}
      <div className="cursor-pointer">
        <Link className="text-blue-800 font-bold text-sm" href="/">
          {isThisUser ? "Change" : "Follow"}
        </Link>
      </div>
    </div>
  );
}
