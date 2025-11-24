import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import CompanyLogo from "../assets/cequena_training.png";
const NavBar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  const [nav, setNav] = useState(true);
  const [isDark, setDark] = useState(() => {
    if (typeof window === "undefined") return false; // SSR/defensive
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const next = isDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", next);
  }, [isDark]);

  // const [isDark, setDark] = useState(false);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", isDark);
  // }, [isDark]);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="absolute z-420 w-full  bg-white dark:bg-black">
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
          <h1 className="text-3xl font-bold text-lantern">
            <span className="hidden">Cequena Training and Consultancy</span>{" "}
            <a className="block" href="/">
              <img
                className="w-[5rem] rounded-full"
                src={CompanyLogo}
                alt="Cequeña Training and Consultancy"
              />
            </a>
          </h1>
          <ul className="hidden md:flex text-gray-700 dark:text-white">
            {links.map(({ label, href }) => (
              <li
                key={label}
                className="
        group relative px-4 py-4 cursor-pointer text-slate-900 dark:text-slate-100
        
      "
              >
                <a
                  className="relative inline-block
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-current
      after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out
      group-hover:after:scale-x-100 group-hover:after:origin-left"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="p-4 cursor-pointer  text-slate-900 dark:text-slate-100">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isDark}
                  onChange={toggleTheme}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-900 peer-checked:bg-lantern dark:peer-checked:bg-lantern after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:w-5 after:h-5 after:bg-white after:rounded-full after:border after:border-gray-300 after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full" />
                <span className="ms-3 text-slate-900 dark:text-slate-100">
                  {isDark ? "Dark mode" : "Light mode"}
                </span>
              </label>
            </li>
          </ul>
          <div className="cursor-pointer block md:hidden" onClick={handleNav}>
            {nav ? (
              <AiOutlineMenu size={22} color={isDark ? "#fff" : "#0f172a"} />
            ) : (
              <AiOutlineClose size={22} color={isDark ? "#fff" : "#0f172a"} />
            )}
          </div>
          {/*  */}
          <div
            className={
              !nav
                ? "fixed z-99 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden"
                : "fixed left-[-100%] md:hidden"
            }
          >
            <h1 className="w-full text-3xl font-bold text-lantern m-4">
              REACT.
            </h1>
            <ul className="uppercase p-4">
              {links.map(({ label, href }) => (
                <li
                  key={label}
                  className="group relative px-4 py-2 border-b border-gray-600 last:border-b-0"
                >
                  <a
                    href={href}
                    className="relative inline-block
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current
                  after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out
                  group-hover:after:scale-x-100 group-hover:after:origin-left"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
