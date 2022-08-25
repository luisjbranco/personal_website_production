import { personalWebsite, projectExample2, blogWebsite } from "../../assets";

export type Project = {
  name: string;
  description: string;
  image: any;
  url: string;
  github: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    name: "Portfolio",
    description:
      "My personal portfolio and biggest project of Web Development. Future works include animation libraries and more projects.",
    image: personalWebsite,
    url: "https://luisbranco.vercel.app/",
    github: "https://github.com/luisjbranco/personal_website",
    technologies: [
      "React",
      "Typescript",
      "HTML",
      "Tailwind CSS",
      "Git",
      "NextJs",
    ],
  },
  {
    name: "Keep 2.0",
    description:
      "A google keep clone to apply acquired knowledge on React. It allows to create and save notes.",
    image: projectExample2,
    url: "",
    github: "",
    technologies: ["React", "Javascript", "HTML", "CSS", "Git", "NodeJs"],
  },
  {
    name: "Blog Website",
    description:
      "A blog website with backend development and a database connection.",
    image: blogWebsite,
    url: "https://pure-reef-59993.herokuapp.com/",
    github: "https://github.com/luisjbranco/blog_site",
    technologies: [
      "JavaScript",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Ejs",
      "Bootstrap",
    ],
  },
];
