import Link from "next/link";
import profile from "../../public/general/profile.jpg";
import Image from "next/image";

// ICONS
import { IoMdHome } from "react-icons/io";
import { LuSquarePlay } from "react-icons/lu";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
// ======

export default function FooterbarMenu() {
  return (
    <div className="flex justify-around items-center">
      <Link href="/">
        <IoMdHome size={24} />
      </Link>
      <Link href="/">
        <FaRegCompass size={24} />
      </Link>
      <Link href="/">
        <LuSquarePlay size={24} />
      </Link>
      <Link href="/">
        <FaPlus size={24} />
      </Link>
      <Link href="/">
        <FaRegPaperPlane size={24} />
      </Link>

      {/* PROFILE */}
      <div className="w-8 h-8 relative rounded-full">
        <Image
          src={profile}
          className="rounded-full"
          fill
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
