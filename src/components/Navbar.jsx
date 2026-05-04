"use client";

import Link from "next/link";
import Image from "next/image";
import { FiLogOut, FiMenu } from "react-icons/fi";

// user data
const user = {
  name: "John Doe",
  image: "",
};

// links
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/profile", label: "My Profile" },
];


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">

      {/* left */}
      <div className="navbar-start">

        {/* mobile */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FiMenu size={20} />
          </label>

          {/* menu */}
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* logo */}
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          SkillSphere
        </Link>
      </div>

      {/* center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link className="rounded-lg" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* right */}
      <div className="navbar-end gap-2">

        {user ? (
          <div className="flex items-center gap-2">

            {/* avatar */}
            {user.image ? (
              <div className="w-9 h-9 rounded-full overflow-hidden ring ring-primary">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                {user.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
            )}

            {/* logout */}
            <button className="btn btn-sm btn-outline btn-error gap-1">
              <FiLogOut size={14} />
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;