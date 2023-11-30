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
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Project",
    hash: "#project",
  },
  {
    name: "Skill",
    hash: "#skill",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const socialLinks = [
    {
      icon: React.createElement(TbBrandGithub),
      hash: "https://github.com/noorjsdivs",
    },
    {
      icon: React.createElement(SlSocialYoutube),
      hash: "https://github.com/noorjsdivs",
    },
    {
      icon: React.createElement(SlSocialLinkedin),
      hash: "https://github.com/noorjsdivs",
    },
    {
      icon: React.createElement(SlSocialFacebook),
      hash: "https://github.com/noorjsdivs",
    },
    {
      icon: React.createElement(SlSocialInstagram),
      hash: "https://github.com/noorjsdivs",
    },
  ] as const;