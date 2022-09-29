import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { Button} from "../components";
import logo from "../components/assets/logo.jpeg"
export const Nav = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false); 


  const navigate = useNavigate();
const userLogin=true



  return (
    <nav
      className="fixed w-screen bg-white z-30 top-0  dark:text-slate-10 mx-0 flex flex-row justify-between"
    >
   
        <img
          className="flex justify-center items-center h-8 w-8 mt-3 ml-10"
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
    
      <div className="w-full  flex flex-row flex-wrap items-center justify-end mt-0 py-2 bg-white  dark:bg-[#484B52] mr-12">
     
        <div className="block lg:hidden pr-4">
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            id="nav-toggle"
            className="flex items-center p-1 text-gray-900 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            {isOpenMenu ? <MdClose /> : <MdMenu />}
          </button>
        </div>
        <div
          className={`w-full flex-row justify-end md:flex md:items-center md:w-auto ${
            isOpenMenu ? "" : "hidden"
          } mt-2 md:mt-0 bg-white  dark:bg-[#484B52] dark:text-slate-100 text-black p-4 md:p-0 z-10" `}
        >
     { userLogin &&   
          <Button
          type="button"        
            size="lg"
           bgColor="bg-red-600"
           text="Exit Chat"
           
          />}
           
      
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};
