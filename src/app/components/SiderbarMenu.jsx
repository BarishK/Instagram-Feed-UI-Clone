import Link from "next/link";
import profile from "../../public/general/profile.jpg";
import Image from "next/image";

// ICONS
import { FiInstagram } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { LuSquarePlay } from "react-icons/lu";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
// ======

export default function SidebarMenu() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <Link href="/">
        <FiInstagram size={24} />
      </Link>
      <Link href="/">
        <IoMdHome size={24} />
      </Link>
      <Link href="/">
        <LuSquarePlay size={24} />
      </Link>
      <Link href="/">
        <FaRegPaperPlane size={24} />
      </Link>
      <Link href="/">
        <IoSearchSharp size={24} />
      </Link>
      <Link href="/">
        <FaRegCompass size={24} />
      </Link>
      <Link href="/">
        <FaRegHeart size={24} />
      </Link>
      <Link href="/">
        <FaPlus size={24} />
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
      <Link href="/">
        <GiHamburgerMenu size={24} />
      </Link>
    </div>
  );
}
