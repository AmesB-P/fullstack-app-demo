"use client"

import React, {createContext, useState , useContext} from "react";

type themeContextTypes = {
    theme: string;
    setTheme: (theme: string) => void ;
};
export const ThemeContext = createContext<themeContextTypes | null>(null)

export const ThemeProvider =({children}: Readonly<{
    children: React.ReactNode;
}>)=>{
    const [theme, setTheme] = useState<themeContextTypes["theme"]>("dark");
 return (
     <ThemeContext.Provider value={{theme , setTheme}}>
         {children}
     </ThemeContext.Provider>
 )
}
