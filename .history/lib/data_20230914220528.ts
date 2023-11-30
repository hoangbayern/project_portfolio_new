import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { RxOpenInNewWindow } from "react-icons/rx";
import { amazonImg, cyberImg, noorShop } from "@/public/assets";

export const links = [
  {
    id: 1,
    name: "Home",
    hash: "#home",
  },
  {
    id: 2,
    name: "About",
    hash: "#about",
  },
  {
    id: 3,
    name: "Project",
    hash: "#project",
  },
  {
    id: 4,
    name: "Skill",
    hash: "#skill",
  },
  {
    id: 5,
    name: "Experience",
    hash: "#experience",
  },
  {
    id: 6,
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const socialLinks = [
    {
      id: 1,  
      icon: React.createElement(TbBrandGithub),
      hash: "https://github.com/noorjsdivs",
    },
    {
      id: 2,  
      icon: React.createElement(SlSocialYoutube),
      hash: "https://github.com/noorjsdivs",
    },
    {
      id: 3,
      icon: React.createElement(SlSocialLinkedin),
      hash: "https://github.com/noorjsdivs",
    },
    {
      id: 4,
      icon: React.createElement(SlSocialFacebook),
      hash: "https://github.com/noorjsdivs",
    },
    {
      id: 5,
      icon: React.createElement(SlSocialInstagram),
      hash: "https://github.com/noorjsdivs",
    },
  ] as const;

  export const projectsData = [
    {
      lable: "Featured Project",
      title: "CorpComment",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: amazonImg,
    },
    {
      lable: "Featured Project",
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: cyberImg,
      icon: {
        iconGit: React.createElement(TbBrandGithub),
        iconWeb: React.createElement(RxOpenInNewWindow),
      },
      hash: {
        linkGit: "#",
        linkWeb: "#",
      }
    },
    {
      lable: "Featured Project",
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: noorShop,
    },
  ] as const;
