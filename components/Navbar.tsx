import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MdQuiz } from "react-icons/md";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="pt-5 ">
      <div className="max-w-[1500px] w-[90%] mx-auto flex items-center justify-between border-b pb-5">
        <div>
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <h1 className=" font-bold text-dark">Quiz</h1>
            <MdQuiz className="text-black" />
          </Link>
        </div>
        <div className="md:block hidden text-nowrap">
          <span className="bg-blue px-5 py-1 rounded-md text-white">
            Category: JS
          </span>
        </div>
        <div className="flex items-center justify-end gap-3">
          <UserMenu />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
