"use client"

import {FC, JSX, useState} from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";
import {useSidebar} from "@/hooks/useSidebar";
import {motion} from "framer-motion";
import {useThemeContext} from "@/hooks/useThemeContext";

const Sidebar: FC = (): JSX.Element => {
    const {isMenuOpen, setIsMenuOpen} = useSidebar();
    const {theme} = useThemeContext();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
    return (
        <aside>
            {/*<Navbar onMenuOpenChange={setIsMenuOpen} maxWidth={"full"}>*/}
            {/*    <NavbarContent>*/}
            {/*        <NavbarMenuToggle*/}
            {/*            aria-label={isMenuOpen ? "Close menu" : "Open menu"}*/}
            {/*            // className="sm:hidden"*/}
            {/*        />*/}
            {/*    </NavbarContent>*/}
            {/*    <NavbarMenu>*/}
            {/*        {menuItems.map((item, index) => (*/}
            {/*            <NavbarMenuItem key={`${item}-${index}`}>*/}
            {/*                <Button*/}
            {/*                    color={*/}
            {/*                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"*/}
            {/*                    }*/}
            {/*                    className="w-2/12"*/}
            {/*                    href="#"*/}
            {/*                    size="lg"*/}
            {/*                >*/}
            {/*                    {item}*/}
            {/*                </Button>*/}
            {/*            </NavbarMenuItem>*/}
            {/*        ))}*/}
            {/*    </NavbarMenu>*/}
            {/*</Navbar>*/}

            <motion.div
                className={`${theme} h-full text-white z-10 md:flex md:flex-col hidden ${isSidebarOpen ? 'w-250px' : 'w-100px'}`}
                initial={{ width: 250 }}
                animate={{ width: isSidebarOpen ? 250 : 100 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center justify-center h-16 bg-gray-800 text-white">
                    <button
                        className="bg-gray-800 text-white px-2 py-1 rounded-full"
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ? 'Close' : 'Open'}
                    </button>
                </div>
                <div className="flex-grow overflow-y-auto">
                    <ul className="space-y-2">
                        <li className="px-4 py-2 hover:bg-gray-200">Menu Item 1</li>
                        <li className="px-4 py-2 hover:bg-gray-200">Menu Item 2</li>
                        <li className="px-4 py-2 hover:bg-gray-200">Menu Item 3</li>
                    </ul>
                </div>

            </motion.div>


        </aside>
    )
}

export default Sidebar