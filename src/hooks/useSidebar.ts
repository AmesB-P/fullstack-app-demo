import {useCallback, useContext} from "react";
import {SidebarContext} from "@/context/SidebarContext";


export const useSidebar = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("useThemeContext must be used inside the ThemeProvider");
    }

    return context
};