import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import CompanyLogo from "../assets/cequena_training.png";
const NavBar = () => {
  const [nav, setNav] = useState(true);
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
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
          <li className="p-4 text-slate-900 dark:text-slate-100">Home</li>
          <li className="p-4 text-slate-900 dark:text-slate-100">Company</li>
          <li className="p-4 text-slate-900 dark:text-slate-100">Resources</li>
          <li className="p-4 text-slate-900 dark:text-slate-100">About</li>
          <li className="p-4 text-slate-900 dark:text-slate-100">Contact</li>
          <li className="p-4 text-slate-900 dark:text-slate-100">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDark}
                onChange={toggleTheme}
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-900 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:w-5 after:h-5 after:bg-white after:rounded-full after:border after:border-gray-300 after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full" />
              <span className="ms-3 text-slate-900 dark:text-slate-100">
                {isDark ? "Dark mode" : "Light mode"}
              </span>
            </label>
          </li>
        </ul>
        <div className="cursor-pointer block md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/*  */}
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%] md:hidden overflow-y-auto"
          }
        >
          <h1 className="w-full text-3xl font-bold text-lantern m-4">REACT.</h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
