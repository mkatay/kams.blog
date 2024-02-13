import React, { useContext, useState } from "react";
import { LangContext } from "../contexts/LangContext";

export const SwitchLang = () => {
  const { language, handleChangeLanguage } = useContext(LangContext);
  const [isChecked, setIsChecked] = useState(language === "hu");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    const selectedLanguage = isChecked ? "en" : "hu";
    handleChangeLanguage(selectedLanguage);
  };

  return (
    <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="sr-only"
      />
      <span className="label flex items-center text-sm font-medium text-black">
        En
      </span>
      <span
        className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
          isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
        }`}
      >
        <span
          className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
            isChecked ? "translate-x-[28px]" : ""
          }`}
        ></span>
      </span>
      <span className="label flex items-center text-sm font-medium text-black">
        Hu
      </span>
    </label>
  );
};
