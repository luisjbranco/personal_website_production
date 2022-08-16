import {
  bash,
  css,
  git,
  html,
  javascript,
  keras,
  pandas,
  python,
  react,
  sklearn,
  sql,
  tableau,
  tensorflow,
  npm,
} from "../../assets";

export type Skill = {
  id: number;
  name: string;
  img: any;
  url: string;
  style: string;
};

export const getSkill = (names: string[]) => {
  const toReturn: Skill[] = [];
  names.map((name: string) => {
    skills.map((skill: Skill) => {
      if (skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  });
  return toReturn;
};

export const skills: Skill[] = [
  {
    id: 1,
    name: "Bash",
    url: "https://tiswww.case.edu/php/chet/bash/bashtop.html",
    img: bash,
    style: "shadow-black",
  },
  {
    id: 2,
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: css,
    style: "shadow-blue-600",
  },
  {
    id: 3,
    name: "Git",
    url: "https://git-scm.com/",
    img: git,
    style: "shadow-red-400",
  },
  {
    id: 4,
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: html,
    style: "shadow-orange-500",
  },
  {
    id: 5,
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: javascript,
    style: "shadow-yellow-500",
  },
  {
    id: 6,
    name: "Keras",
    url: "https://keras.io/",
    img: keras,
    style: "shadow-red-500",
  },
  {
    id: 7,
    name: "Pandas",
    url: "https://pandas.pydata.org/",
    img: pandas,
    style: "shadow-blue-700",
  },
  {
    id: 8,
    name: "Python",
    url: "https://www.python.org/",
    img: python,
    style: "shadow-yellow-300",
  },
  {
    id: 9,
    name: "React",
    url: "https://reactjs.org/",
    img: react,
    style: "shadow-blue-300",
  },
  {
    id: 10,
    name: "Scikit-learn",
    url: "https://scikit-learn.org/stable/",
    img: sklearn,
    style: "shadow-orange-300",
  },
  {
    id: 11,
    name: "SQL",
    url: "",
    img: sql,
    style: "shadow-black",
  },
  {
    id: 12,
    name: "Tableau",
    url: "https://www.tableau.com/",
    img: tableau,
    style: "shadow-blue-600",
  },
  {
    id: 13,
    name: "Tensorflow",
    url: "https://www.tensorflow.org/",
    img: tensorflow,
    style: "shadow-orange-500",
  },
  {
    id: 14,
    name: "NPM",
    url: "https://www.npmjs.com/",
    img: npm,
    style: "shadow-red-500",
  },
];
