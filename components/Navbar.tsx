import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="">
      <div className="flex justify-around p-2">
        <ul className="flex gap-4">
          <li>
            <FaFacebook
              className="text-2xl"
              href="https://www.facebook.com/CGV.ID/"
            />
          </li>
          <li>
            <FaInstagram
              className="text-2xl"
              href="https://www.instagram.com/cgv.id"
            />
          </li>
          <li>
            <FaTiktok
              className="text-2xl"
              href="https://www.tiktok.com/@cgv.id"
            />
          </li>
          <li>
            <FaTwitter className="text-2xl" href="https://twitter.com/CGV_ID" />
          </li>
        </ul>
        <div className="flex gap-4">
          <Link className="border-l border-black px-4" href="/events/all">
            news
          </Link>
          <Link className="border-l border-black px-4" href="/user/login">
            login
          </Link>
          <Link className="border-l border-black px-4" href="/user/register">
            signup
          </Link>
          <Link className="border-l border-black px-4" href="/">
            logout
          </Link>
        </div>
      </div>
      <nav className='h-[120px] bg-[url("/images/navbar-background.png")]'>
        <div className="container h-full mx-auto flex justify-center items-center">
          <div>
            <Link href="/">
              <img
                className="w-32"
                src="/images/cgv-logo.png"
                alt="cultureplex-img"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/">
              <img
                className="w-56"
                src="/images/cultureplex.png"
                alt="cultureplex-img"
              />
            </Link>
            <ul className="flex gap-2 font-bold text-lg text-[#333]">
              <li>
                <Link href="/movies/now-playing">MOVIES</Link>
              </li>
              <li>
                <Link href="/schedule/cinema">CINEMAS</Link>
              </li>
              <li>
                <Link href="/promotion/all">PROMOTION</Link>
              </li>
              <li>
                <Link href="/membership">MEMBERSHIP</Link>
              </li>
              <li>
                <Link href="/snack">CONCESSION</Link>
              </li>
              <li>
                <Link href="/special_audi">SPECIAL</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
