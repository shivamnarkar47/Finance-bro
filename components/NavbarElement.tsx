"use client"
import { AcmeLogo } from "@/assets/AcmeLogo";
import ThemeSwitcher from "./ThemeSwitcher"
import { User } from "@nextui-org/user"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AcmeDarkLogo } from "@/assets/AcmeDarkLogo";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/hooks/user";
import { createClient as createClientSignOut } from "@/utils/supabase/client";
import { links } from "./SidebarElement";
type NavProps = {
  data?: any
}
const NavbarElement = (data: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname)

  const signOut = async () => {
    const supabase = createClientSignOut();
    const { error } = await supabase.auth.signOut();
    if (error) {
      router.push("/error")
    }
    else {
      router.push("/home")
    }
  }


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

        {
          !pathname.includes("/private/") && menuItems.map((item, index) =>
            <NavbarItem key={index}>
              <Link color="foreground" href={item.href}>
                {item.name != "Login" && item.name}
              </Link>
            </NavbarItem>
          )}

      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {
            pathname.includes("/private/")
              ?
              <Button onClick={signOut}>Logout</Button>

              :
              <Link href="/login">Login</Link>

          }
        </NavbarItem>
        <NavbarItem>
          {
            !pathname.includes("/private/") &&
            <Button as={Link} passHref color="primary" href="/register" variant="shadow">
              Sign Up
            </Button>}
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {pathname.includes("/private/") ? (
        <NavbarMenu className="flex p-4">
          <div className="flex flex-1 flex-col">

          {links.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={"text-foreground flex "}
                href={item.href}

              >
                <Button variant="light" className="w-full justify-start" startContent={item.icon}>{item.label}</Button>
              </Link>

            </NavbarMenuItem>
          ))}
          </div>
          <Dropdown placement="top" className="text-foreground bg-background ">
            <DropdownTrigger>
              <User
                as={"div"}
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                }}
                className="transition-transform z-10 cursor-pointer"
                description={data?.data?.email}
                name={data?.data?.user_metadata?.name}

              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as</p>
                <p className="font-bold">{data?.data?.email}</p>
              </DropdownItem>
              <DropdownItem key="settings">
                My Settings
              </DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">
                Analytics
              </DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </NavbarMenu>
      )
        :
        (
          <NavbarMenu>

            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className={"text-foreground flex"}
                  href={item.href}

                >
                  <Button variant="light" className="w-full justify-start" >{item.name}</Button>
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        )}


    </Navbar >
  );
}

export default NavbarElement
