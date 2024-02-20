"use client"

import {FC, JSX, useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button , NavbarMenuToggle , NavbarMenu , NavbarMenuItem} from "@nextui-org/react";
import MyLogo from "@/components/SvgComponent/MyLogo";
import { IoMdSunny } from "react-icons/io";
import { FaMoon  } from "react-icons/fa";
import {useThemeContext} from "@/hooks/useThemeContext";

const Header : FC = () : JSX.Element => {
    const {theme, setTheme} = useThemeContext();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header>
          <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth={"full"}>
              <NavbarContent>
                  <NavbarMenuToggle
                      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                      className="md:hidden"
                  />
                  <NavbarBrand>
                      {/*<AcmeLogo />*/}
                      <span className={"sm:flex hidden"}><MyLogo/></span>

                      <p className="font-bold text-inherit">Porames.A</p>
                  </NavbarBrand>
              </NavbarContent>

              <NavbarContent className="hidden sm:flex gap-4" justify="center">

                  <NavbarItem isActive>
                      title
                  </NavbarItem>

              </NavbarContent>
              <NavbarContent justify="end">
                  <NavbarItem >
                      <Button variant={"light"} onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>
                          {
                              theme === "light" ?<FaMoon fontSize={"1.2rem"}/>  : <IoMdSunny fontSize={"1.4rem"}/>
                          }
                      </Button>
                  </NavbarItem>
                  <NavbarItem className="hidden lg:flex">
                      <Link href="#">Login</Link>
                  </NavbarItem>
                  <NavbarItem>
                      <Button as={Link} color="primary" href="#" variant="flat">
                          Sign Up
                      </Button>
                  </NavbarItem>
              </NavbarContent>
              <NavbarMenu>
                  {menuItems.map((item, index) => (
                      <NavbarMenuItem key={`${item}-${index}`}>
                          <Button
                              color={
                                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                              }
                              className="w-full"
                              href="#"
                              size="lg"
                          >
                              {item}
                          </Button>
                      </NavbarMenuItem>
                  ))}
              </NavbarMenu>
          </Navbar>
      </header>
  )
}

export default Header