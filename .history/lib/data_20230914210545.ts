import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

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