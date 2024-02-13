import React from "react";
import img404 from '../assets/errorRectangle.svg'
import { MyButton } from "../components/MyButton";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

export const Notfound = () => {
    const { language, handleChangeLanguage, getElement } = useContext(LangContext);
  return (
    <div className="md:pl-[70px] relative bg-black  h-screen w-full md:flex">
      <div className=" h-screen bg-black  flex flex-col justify-center items-center md:items-start lg:w-full px-2.5 md:px-0">
        <h3 className="text-[#F3F3F3] text-8xl md:text-[200px] font-[800px] font-poppins">
          404
        </h3>
        <h3 className="text-white text-3xl xl:text-[57px] font-semibold font-poppins whitespace-nowrap mt-10 mb-[152px]">
          {getElement()}
        </h3>
        
        <div className="flex items-center bg-black ">
         <MyButton text='Back to Home'/>
        </div>
      </div>
      <div className="relative right-0 h-screen hidden md:flex ">
        <img
          alt="Tailwind Icon"
          className="h-screen absolutec object-cover"
          src={img404}
        />
      </div>
    </div>
  );
};

