// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import React from "react";
import {useThemeContext} from "@/hooks/useThemeContext";
import {ThemeProvider} from "@/context/themeContext";
import {SidebarProvider} from "@/context/SidebarContext";

const ThemeProviderWrapper = ({children}: { children: React.ReactNode }) => {
    const {theme} = useThemeContext();
    return (
        <NextUIProvider>
            <div className={`${theme} w-dvw h-dvh text-foreground bg-background`}>
                {children}
            </div>
        </NextUIProvider>
    )
}

export const AppProviders = ({children}: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <ThemeProvider>
                <ThemeProviderWrapper>
                    {children}
                </ThemeProviderWrapper>
            </ThemeProvider>
        </SidebarProvider>
    )
}