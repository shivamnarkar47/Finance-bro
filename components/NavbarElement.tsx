"use client"
import { AcmeLogo } from "@/assets/AcmeLogo";
import ThemeSwitcher from "./ThemeSwitcher"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { AcmeDarkLogo } from "@/assets/AcmeDarkLogo";


const NavbarElement = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const menuItems = [
    {
      name: "Home", href: "/"
    },
    {
      name: "About", href: "/about"
    },
    {
      name: "Contact", href: "/contact"
    },
    {
      name: "Login", href: "/auth/login"
    },

  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        {theme == "dark" ?
          <NavbarBrand>
            <Link href={'/'} className="flex items-center">
              <AcmeLogo />
              <p className="font-bold text-inherit">Finance Bro</p>
            </Link>
          </NavbarBrand>
          :
          <NavbarBrand>
            <Link href={'/'} className="flex items-center">
              <AcmeDarkLogo />
              <p className="font-bold text-inherit">Finance Bro</p>
            </Link>
          </NavbarBrand>
        }
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href={'/'} className="flex items-center">{theme == "dark" ? <AcmeLogo /> : theme == "light" ? <AcmeDarkLogo /> : <AcmeLogo />}
            <p className="font-bold text-inherit">Finance Bro</p>
          </Link>
        </NavbarBrand>

      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) =>
          <NavbarItem key={index}>
            <Link color="foreground" href={item.href}>
              {item.name != "Login" && item.name}
            </Link>
          </NavbarItem>
        )}

      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} passHref color="primary" href="/auth/register" variant="shadow">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={theme == "dark" ? "text-white" : "text-black"}
              href={item.href}

            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarElement
