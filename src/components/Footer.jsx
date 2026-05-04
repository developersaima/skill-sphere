import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

// links
const FOO_LINKS = [
  { id: 1, href: "/", label: "Home" },
  { id: 2, href: "/courses", label: "Courses" },
  { id: 3, href: "/profile", label: "My Profile" },
  { id: 4, href: "/login", label: "Login" },
];

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-300 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* brand */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-pink-500">
              SkillSphere
            </h2>

            <p className="mt-3 text-sm opacity-70">
              Upgrade your skills with modern courses and expert instructors.
            </p>

            <div className="flex gap-3 mt-5">

              <a className="btn btn-sm btn-circle btn-outline hover:bg-pink-500 hover:text-white hover:border-pink-500">
                <FaFacebookF />
              </a>

              <a className="btn btn-sm btn-circle btn-outline hover:bg-pink-500 hover:text-white hover:border-pink-500">
                <FaLinkedinIn />
              </a>

              <a className="btn btn-sm btn-circle btn-outline hover:bg-pink-500 hover:text-white hover:border-pink-500">
                <FaGithub />
              </a>

            </div>
          </div>

          {/* links */}
          <div className="grid grid-cols-2 gap-10">

            <div>
              <h3 className="font-semibold mb-3">Pages</h3>
              <ul className="space-y-2 text-sm opacity-80">
                {FOO_LINKS.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="hover:text-pink-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="hover:text-pink-500 cursor-pointer">
                  Terms
                </li>
                <li className="hover:text-pink-500 cursor-pointer">
                  Privacy
                </li>
                <li>skillsphere@email.com</li>
              </ul>
            </div>

          </div>

        </div>

        {/* bottom */}
        <div className="mt-10 border-t border-base-300 pt-5 text-center text-xs opacity-60">
          © {new Date().getFullYear()} SkillSphere
        </div>

      </div>

    </footer>
  );
};

export default Footer;