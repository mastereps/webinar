import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import CompanyLogo from "../assets/cequena_training.png";
const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
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
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
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
  );
};

export default NavBar;
