"use client"

import React, {createContext, useState } from "react";

type SidebarContextTypes = {
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void ;
};
export const SidebarContext = createContext<SidebarContextTypes | null>(null)

export const SidebarProvider =({children}: Readonly<{
    children: React.ReactNode;
}>)=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <SidebarContext.Provider value={{isMenuOpen , setIsMenuOpen}}>
            {children}
        </SidebarContext.Provider>
    )
}
