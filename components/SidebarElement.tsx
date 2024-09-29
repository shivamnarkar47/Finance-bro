"use client"
import Link from "next/link";
import Image from "next/image";
import { storage } from "@/libs/storage"
import { motion } from "framer-motion";
import { cn } from '@/libs/utils';
import { IconArrowLeft, IconBrandTabler, IconCe, IconHome, IconNewSection, IconSettings, IconUserBolt } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'
import { SidebarBody, Sidebar, SidebarLink } from './ui/sidebar';
import { User } from "@nextui-org/user"
import { Button, Card, CardBody, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Textarea } from "@nextui-org/react";
import { Check, Group, LockIcon, MailIcon, MessageSquare, Newspaper, Upload, Users } from "lucide-react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const links = [

  {
    label: "Home",
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
  {
    label: "Test",
    href: "/test",
    icon: (
      <Group className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },

];
const SidebarElement = (data: any) => {
  // useEffect(()=>{
  //   if(document.querySelector("body")?.classList.contains("page-transition")){
  //     document.querySelector("body")?.classList.remove("page-transition")
  //   }
  // })
  const links = [
    {
      label: "Home",
      href: "/dashboard",
      icon: (
        <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Communities",
      href: "#",
      icon: (
        <Group className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Test",
      href: "/private/dashboard/test",
      icon: (
        <Group className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

  ];

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [published, setPublished] = useState(false);
  const [contact, setContact] = useState('');
  const [image, setImage] = useState(null);
  const router = useRouter();

  const [alertState, setAlert] = useState(false)
  useEffect(() => {
    if (alertState) {
      setTimeout(() => {
        setAlert(false)
      }, 5000)
    }
  }, [alertState, setAlert])
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [fileUploaded, setfile] = useState<File | null>();

  console.log(data)
  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    // e.preventDefault();
    // // upload image
    // //
    storage({ fileUploaded, bucketType: "images/posts", alertState: setAlert })
    console.log(fileUploaded)
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('author_name', data?.data.identities[0].identity_data.name);
    formData.append('author_role', data?.data.identities[0].identity_data.role);
    formData.append('author_id', data?.data.id)
    formData.append('published', published.toString());
    formData.append('contact', data?.data.identities[0].email);
    if (image) formData.append('image', image);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        router.push('/private/dashboard'); // Redirect after successful creation
        location.reload()

      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setOpen(false); // Close modal after submission
    }

  };

  const handleFileSelected = (e: React.ChangeEvent<any>) => {
    setfile(e.target.files[0]);
  };

  return (
    <div className="min-h-full rounded md:grid
      hidden">

      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10 min-h-[93vh] border-r-slate-200 dark:border-r-slate-800 border-r-[0.5px]">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-3 flex flex-col gap-2">
              {links.map((link, idx) => (
                <Button as={Link} passHref href={link.href} variant="light" className="w-full justify-start" startContent={link.icon} key={idx}>{link.label}</Button>
              ))}
              {data?.data?.user_metadata?.role === "advisor" && <Button as={Link} passHref href={"#"} variant="light" className="w-full justify-start" startContent={<IconNewSection />}>Today's Update</Button>
              }

              <Button as={Link} onPress={onOpen} passHref href={"#"} variant="light" className="w-full justify-start" startContent={<IconNewSection />}>Create Post</Button>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 text-foreground">Create Post</ModalHeader>
                      <form onSubmit={handleSubmit}>
                        <ModalBody>
                          <Input
                            label="Title"
                            fullWidth
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          <Textarea
                            label="Description"
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                          {/* <Input */}
                          {/*   label="Author Name" */}
                          {/*   fullWidth */}
                          {/*   required */}
                          {/*   value={authorName} */}
                          {/*   onChange={(e) => setAuthorName(e.target.value)} */}
                          {/* /> */}
                          {/* <Input */}
                          {/*   label="Author Role" */}
                          {/*   fullWidth */}
                          {/*   required */}
                          {/*   value={authorRole} */}
                          {/*   onChange={(e) => setAuthorRole(e.target.value)} */}
                          {/* /> */}
                          {/* <Input */}
                          {/*   label="Contact" */}
                          {/*   fullWidth */}
                          {/*   value={contact} */}
                          {/*   onChange={(e) => setContact(e.target.value)} */}
                          {/* /> */}
                          <Input
                            label="Image"
                            type="file"
                            fullWidth
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                          <Checkbox
                            checked={published}
                            onChange={(e) => setPublished(e.target.checked)}
                          >
                            Published
                          </Checkbox>                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onPress={onClose} type="submit">
                            Upload
                          </Button>
                        </ModalFooter>
                      </form>

                    </>
                  )}
                </ModalContent>
              </Modal>
                <Button as={Link} passHref href="/private/dashboard/chat" variant="light" className="flex justify-start">
                  <MessageSquare /> Chat
                </Button>
              <Button as={Link} passHref href="/private/dashboard/advisors" variant="light" className="flex justify-start">
                  <Users /> Advisors
                </Button>

            </div>
          </div>
          <div>
            <Dropdown placement="top-end" className="text-foreground bg-background ">
              <DropdownTrigger>
                <User
                  as={"button"}
                  isFocusable
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
      {alertState && (
        <Card className="absolute right-10 bottom-5 z-50">
          <CardHeader className="font-bold text-xl gap-3"><Check className="text-green-300" />Success</CardHeader>
          <CardBody>File uploaded Successfully</CardBody>
        </Card>
      )}
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
