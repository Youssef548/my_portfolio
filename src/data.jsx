import FrontIcon from "./assets/imgs/Front1.png";
import npmIcon from "./assets/imgs/npm.png";
import HTML from "./assets/skills/html5.png";
import CSS from "./assets/skills/css3.png";
import JS from "./assets/skills/js.png";
import GIT from "./assets/skills/git.png";
import React from "./assets/skills/reactjs.png";
import NEXT from "./assets/skills/nextjs.png";
import NODE from "./assets/skills/nodejs.png";
import MONGO from "./assets/skills/mongo.png";
// projects images

import ominifood from "./assets/project-images/ominifood.png";
import kasper from "./assets/project-images/kasper.png";
import lion from "./assets/project-images/lion.png";
import elzero from "./assets/project-images/elzero.png";
import martin from "./assets/project-images/martin.png";
import todo from "./assets/project-images/todo.png";
import notesapp from "./assets/project-images/notes.png";
import hangman from "./assets/project-images/hangman.png";
import orderfood from "./assets/project-images/order-food.png";
import weatherapp from "./assets/project-images/weather.png";
import chatapp from "./assets/project-images/chat-app.png";

import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsLink,
} from "react-icons/bs";

export const links = [
  {
    id: 3,
    url: "#about",
    text: "About",
  },
  {
    id: 4,
    url: "#portfolio",
    text: "Portfolio",
  },
  {
    id: 5,
    url: "#contact",
    text: "Contact",
  },
];

export const services = [
  {
    id: 1,
    serviceIcon: FrontIcon,
    text: "Front-end Development",
    serviceInfo:
      " displaying the right content on the different target devices and systems Smartphone, Desktop-Browser.",
  },
  {
    id: 2,
    serviceIcon: npmIcon,
    text: "NPM and NODEJS",
    serviceInfo:
      "install and switch between multiple versions of Node.js and npm on your system so you can test your applications",
  },
];

export const skills = [
  {
    id: 1,
    image: HTML,
    text: "HTML",
  },
  {
    id: 2,
    image: CSS,
    text: "CSS",
  },
  {
    id: 3,
    image: JS,
    text: "JS",
  },
  {
    id: 4,
    image: React,
    text: "react",
  },
  {
    id: 5,
    image: NEXT,
    text: "nextjs",
  },
  {
    id: 6,
    image: NODE,
    text: "nodejs",
  },
  {
    id: 7,
    image: MONGO,
    text: "mongo db",
  },
  {
    id: 8,
    image: GIT,
    text: "Git Source Control",
  },
];

export const projectsData = [
  {
    id: 1,
    category: "htmlAndCss",
    projectImage: ominifood,
    projectName: "ominifood",
    projectDesc: "A restaurn website",
    demoLink: "https://youssef548.github.io/ominifood-website/",
    gitHubLink:
      "https://github.com/Youssef548/Kalbonyan-Elmarsos/tree/main/02-Udemy/-01-HTML-CSS/Projects/Omnifood",
  },
  {
    id: 2,
    category: "htmlAndCss",
    projectImage: kasper,
    projectName: "Kasper Template",
    projectDesc: "html and css land page",
    demoLink: "https://youssef548.github.io/kaseperTemplate/",
    gitHubLink: "https://github.com/Youssef548/kaseperTemplate",
  },
  {
    id: 3,
    category: "htmlAndCss",
    projectImage: lion,
    projectName: "Lion Template",
    projectDesc: "html and css land page",
    demoLink: "https://youssef548.github.io/leon-template/",
    gitHubLink: "https://github.com/Youssef548/leon-template.git",
  },
  {
    id: 4,
    category: "htmlAndCss",
    projectImage: elzero,
    projectName: "elzero world",
    projectDesc: "html and css big page",
    demoLink: "https://youssef548.github.io/template-three/",
    gitHubLink: "https://github.com/Youssef548/template-three",
  },
  {
    id: 5,
    category: "htmlAndCss",
    projectImage: martin,
    projectName: "martin",
    projectDesc: "html and css page",
    demoLink: "https://youssef548.github.io/martin/",
    gitHubLink: "https://github.com/Youssef548/martin",
  },
  {
    id: 6,
    category: "js",
    projectImage: todo,
    projectName: "To-Do-App",
    projectDesc: "to do app for your tasks",
    demoLink: "https://todo5-app.netlify.app/",
    gitHubLink:
      "https://github.com/Youssef548/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-JS/Projects/Todo-app",
  },
  {
    id: 7,
    category: "js",
    projectImage: notesapp,
    projectName: "notes app",
    projectDesc: "notes app to add your notes",
    demoLink: "https://notes5-app.netlify.app/",
    gitHubLink:
      "https://github.com/Youssef548/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-JS/Projects/Notes-app",
  },
  {
    id: 8,
    category: "js",
    projectImage: hangman,
    projectName: "hangman-game",
    projectDesc: "hangman game guess word",
    demoLink: "https://hang5-man.netlify.app/",
    gitHubLink:
      "https://github.com/Youssef548/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-JS/Projects/Hangman-Game",
  },
  {
    id: 9,
    category: "react",
    projectImage: orderfood,
    projectName: "order food",
    projectDesc: "order food app",
    demoLink: "https://order-app-v2.netlify.app/",
    gitHubLink:
      "https://github.com/Youssef548/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs/Projects/order-food-app/S17-project",
  },
  {
    id: 10,
    category: "nodejs",
    projectImage: weatherapp,
    projectName: "weather-app",
    projectDesc: "weather-app ",
    demoLink: "https://weather-app548.herokuapp.com/",
    gitHubLink:
      "https://github.com/Youssef548/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs/Projects/Weather-App",
  },
  {
    id: 11,
    category: "nodejs",
    projectImage: chatapp,
    projectName: "chat-app",
    projectDesc: "chat-app ",
    demoLink: "https://chat-app548.herokuapp.com/",
    gitHubLink:
      "https://github.com/Youssef548/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs/Projects/Chat-App",
  },
];

export const projectsNav = [
  {
    id: 1,
    name: "all",
  },
  {
    id: 2,
    name: "htmlAndCss",
  },
  {
    id: 3,
    name: "js",
  },
  {
    id: 4,
    name: "react",
  },
  {
    id: 5,
    name: "nodejs",
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "facebook",
    icon: <BsFacebook />,
    url: "https://www.facebook.com/profile.php?id=100037880400267",
  },
  {
    id: 2,
    name: "linkedin",
    icon: <BsLinkedin />,
    url: "https://www.linkedin.com/in/youssef-ahmed-a50042203/",
  },
  {
    id: 3,
    name: "github",
    icon: <BsGithub />,
    url: "https://github.com/Youssef548",
  },
  {
    id: 4,
    name: "twitter",
    icon: <BsTwitter />,
    url: "none",
  },
];
