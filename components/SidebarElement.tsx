"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from '@/libs/utils';
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from '@tabler/icons-react';
import React, { useState } from 'react'
import { SidebarBody, Sidebar, SidebarLink } from './ui/sidebar';
import { User } from "@nextui-org/user"
import { button, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Group } from "lucide-react";
export const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Communities",
    href: "#",
    icon: (
      <Group className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },


];
const SidebarElement = (data: any) => {
  console.log(data)
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Communities",
      href: "#",
      icon: (
        <Group className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },


  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-full rounded">

      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10 min-h-[93vh] border-r-slate-200 dark:border-r-slate-800 border-r-[0.5px]">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-3 flex flex-col gap-2">
              {links.map((link, idx) => (
                <Button as={Link} passHref href={link.href} variant="light" className="w-full justify-start" startContent={link.icon} key={idx}>{link.label}</Button>

              ))}
            </div>
          </div>
          <div>
            <Dropdown placement="top-end" className="text-foreground bg-background ">
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
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content

export default SidebarElement
