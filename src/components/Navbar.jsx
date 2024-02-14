import React from 'react'
import user from '../assets/user.svg'
import logo from '../assets/kam.ico'
import { useState } from "react";
import navmenu from '../assets/navmenu.svg'
import classNames from "classnames";
import {NavLink} from 'react-router-dom'
import { MyButton } from './MyButton';


const Button = ({
    size,
    className,
    color,
    font,
    icon,
    type,
    onClick,
    label,
    endIcon,
    startIcon,
    endIconClassName,
    startIconClassName,
    ...props
  }) => {
    return (
      <button
        onClick={onClick}
        type={type}
        className={classNames(
          className,
          "flex items-center justify-center",
          size ? size : "",
          color ? color : "bg-blue",
          font ? font : "font-[500] tracking-tight text-white"
        )}
        {...props}
      >
        {startIcon && (
          <div className={classNames(startIconClassName || "")}>{startIcon}</div>
        )}
        <div className="relative">
          <div className="flex items-center justify-center gap-3">
            <div className="label">{label}</div>
            {icon && <div>{icon}</div>}
          </div>
        </div>
        {endIcon && (
          <div className={classNames(endIconClassName || "")}>{endIcon}</div>
        )}
      </button>
    );
  };

  const pages = [
    { path: "/", name: "Főoldal" },
    { path: "myblog", name: "Bejegyzések" },
  ];
  const settings = [
    { path: "/profile", name: "Fiókod" },
    { path: "/", name: "Kijelentkezés" },
  
  ];
  

export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0  flex w-full items-center justify-between gap-5 p-1 py-[15px] md:py-5 bg-gradient-to-l to-[#2B2B2B] from-[#3B3B3B]" >
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 ">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>


  <div className="hidden items-center gap-5 whitespace-nowrap text-base font-semibold capitalize leading-[22px] text-white md:flex lg:gap-[50px]">
    <span className='flex gap-2'>
       {pages.map((navitem, index) =>
        <NavLink key={index} to={navitem.path}>
          {navitem.name}
        </NavLink>
      )}
    </span>
        <span className='flex gap-2'>
          <MyButton text='Sign In'/>
          <MyButton text='Sign Up'/>
        </span>
    
  </div>
  <div
    className="relative cursor-pointer md:hidden"
    onClick={() => setIsNavOpen(!isNavOpen)}
  >
    <img src={navmenu} alt="menu" />
  </div>
  <div 
    className={`absolute ${
      isNavOpen
        ? "absolute right-0 top-0 z-30 flex h-40 w-fit flex-col items-center justify-center rounded-lg bg-[#201f1f] text-white md:hidden"
        : "hidden"
    } `}
  >
    <div
      className={`w-full flex-col items-end justify-end pr-4 pt-3 ${
        isNavOpen ? "flex" : "hidden"
      }`}
      onClick={() => setIsNavOpen(!isNavOpen)}
    >
      <h1 className="cursor-pointer text-white">X</h1>
    </div>

    <div className="flex h-screen w-full flex-col items-center justify-center gap-2.5 px-6 text-sm font-normal md:hidden">
      {pages.map((navitem, index) => 
          <NavLink key={index} to={navitem.path}>
            {navitem.name}
          </NavLink>
        )}
    </div>
  </div>
</div>
  )
}

