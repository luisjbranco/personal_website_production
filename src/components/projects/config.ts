import { getSkill, Skill } from "../skills/config";
import { personalWebsite, projectExample2 } from "../../assets";

export type Project = {
  name: string;
  description: string;
  image: any;
  url: string;
  github: string;
  technologies: Skill[];
};

export const projects: Project[] = [
  {
    name: "Portfolio",
    description:
      "My personal portfolio and biggest project of Web Development. Future works include animation libraries and more projects.",
    image: personalWebsite,
    url: "",
    github: "https://github.com/luisjbranco/personal_website",
    technologies: getSkill([
      "react",
      "typescript",
      "html",
      "css",
      "git",
      "npm",
    ]),
  },
  {
    name: "Keep 2.0",
    description:
      "A google keep clone to apply acquired knowledge on React. It allows to create and save notes.",
    image: projectExample2,
    url: "",
    github: "",
    technologies: getSkill([
      "react",
      "javascript",
      "html",
      "css",
      "git",
      "npm",
    ]),
  },
];
