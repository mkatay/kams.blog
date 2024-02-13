import React, { createContext, useState } from "react";

const translations = {
  en: {
    page404: "Page Not Found"
  },
  hu: {
    page404: "Az oldal nem található"
  }
  // további fordítások itt lehetnek
};

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [element,setElement]=useState('page404')

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  const handleChangeElement = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const getElement = () => translations[language][element]

  return (
    <LangContext.Provider value={{ language, handleChangeLanguage,handleChangeElement, getElement }}>
      {children}
    </LangContext.Provider>
  );
};
