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
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
      id: 1,
      lable: "Featured Project",
      title: "Amazon Clone 2.0",
      description:
        "An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with O-auth and then make the purchage using stripe.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: amazonImg,
      altImg: "amazonImg",
      icon: {
        iconGit: React.createElement(TbBrandGithub),
        iconWeb: React.createElement(RxOpenInNewWindow),
      },
      hash: {
        linkGit: "#",
        linkWeb: "#",
      },
    },
    {
      id: 2,
      lable: "Featured Project",
      title: "Cyber Security Blog",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: cyberImg,
      altImg: "cyberImg",
      icon: {
        iconGit: React.createElement(TbBrandGithub),
        iconWeb: React.createElement(RxOpenInNewWindow),
      },
      hash: {
        linkGit: "#",
        linkWeb: "#",
      },
    },
    {
      id: 3,
      lable: "Featured Project",
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: noorShop,
      altImg: "noorShopImg",
      icon: {
        iconGit: React.createElement(TbBrandGithub),
        iconWeb: React.createElement(RxOpenInNewWindow),
      },
      hash: {
        linkGit: "#",
        linkWeb: "#",
      },
    },
  ] as const;

  export const experiencesData = [
    {
      title: "Graduated bootcamp",
      location: "University of transport and communications, Ha Noi",
      description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      icon: React.createElement(LuGraduationCap),
      date: "2020 - present",
    },
    {
      title: "Front-End Developer",
      location: "Duy Tan, Ha Noi",
      description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: React.createElement(CgWorkAlt),
      date: "Summer 2023",
    },
    {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2021 - present",
    },
  ] as const;