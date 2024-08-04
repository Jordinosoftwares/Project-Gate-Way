"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [showmenu, setShowMenu] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between py-4 px-10 bg-[#FDFDFD] fixed z-10">
      <Link href="/" className="text-center font-bold flex items-center">
        <Image
          src="/images/projectgatewaylogo.png"
          width={100}
          height={100}
          alt="projectgatewaylogo"
        />
        <p className="sm:block hidden">
          <spnan className="blue_color uppercase">project</spnan>{" "}
          <span className="orange_color uppercase">gateway</span>
        </p>
      </Link>
      {/* Desktop Navigation */}
      <div className="md:flex items-center justify-between max-w-70 gap-20 font-semibold hidden">
        <ul className="flex gap-5 uppercase transition-all">
          <li>
            <Link
              href="/Home"
              className="
           transition-all hover:text-[#DA7B7B] letter_spacing"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Home#about"
              className="hover:text-[#DA7B7B] letter_spacing"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Home#services"
              className="hover:text-[#DA7B7B] letter_spacing"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/Home#contactus"
              className="hover:text-[#DA7B7B] letter_spacing"
            >
              Contact Us{" "}
            </Link>
          </li>
        </ul>

        <div className="flex gap-5">
          <Link href="/create-account" className="">
            <button className="blue_background hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl flex gap-1 items-center">
              Create Account
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="arrow-img"
              />
            </button>
          </Link>
          <Link href="/login" className="">
            <button className="blue_background hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl flex gap-1 items-center">
              Login{" "}
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="arrow-img"
              />
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden block">
        {!showmenu ? (
          <Image
            src="/images/menu.svg"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            width={50}
            height={50}
            alt="menu_open"
          />
        ) : (
          <Image
            src="/images/close.svg"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            width={50}
            height={50}
            alt="menu_close"
          />
        )}

        {showmenu && (
          <div
            className="bg-gray-100 absolute p-5 my-5 mx-5 right-2 z-10 font-semibold"
            id="dropdown"
          >
            <ul className="flex flex-col gap-5 uppercase">
              <li>
                <Link
                  href="/Home"
                  className="hover:text-[#DA7B7B] letter_spacing"
                  onClick={() => {
                    setShowMenu((prev) => !prev);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Home#about"
                  className="hover:text-[#DA7B7B] letter_spacing"
                  onClick={() => {
                    setShowMenu((prev) => !prev);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Home#services"
                  className="hover:text-[#DA7B7B] letter_spacing letter_spacing"
                  onClick={() => {
                    setShowMenu((prev) => !prev);
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/Home#contactus"
                  className="hover:text-[#DA7B7B] letter_spacing"
                  onClick={() => {
                    setShowMenu((prev) => !prev);
                  }}
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/create-account"
                  className="hover:text-[#DA7B7B] letter_spacing"
                  onClick={() => {
                    setShowMenu((prev) => !prev);
                  }}
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-[#DA7B7B] letter_spacing"
                  onClick={() => {
                    setShowMenu((prev) => !prev);
                  }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
