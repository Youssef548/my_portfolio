import FrontIcon from "./imgs/Front1.png";
import npmIcon from "./imgs/npm.png";
import HTML from "./imgs/skills/html5.png";
import CSS from "./imgs/skills/css3.png";
import JS from "./imgs/skills/js1.png";
import React from "./imgs/skills/reactjs.png";
import NEXT from "./imgs/skills/nextjs.png";
import NODE from "./imgs/skills/nodejs.png";
// projects images
import ominifood from "./imgs/project-images/ominifood.png";
import kasper from "./imgs/project-images/kasper.png";
import lion from "./imgs/project-images/lion.png";
import elzero from "./imgs/project-images/elzero.png";
import martin from "./imgs/project-images/martin.png";
import todo from "./imgs/project-images/todo.png";
import notesapp from "./imgs/project-images/notes.png";
import hangman from "./imgs/project-images/hangman.png";
import orderfood from "./imgs/project-images/order-food.png";
import weatherapp from "./imgs/project-images/weather.png";
import chatapp from "./imgs/project-images/chat-app.png";

import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsLink,
} from "react-icons/bs";

export const links = [
  {
    id: 1,
    url: "#home",
    text: "home",
  },
  {
    id: 2,
    url: "#about",
    text: "about me",
  },
  {
    id: 3,
    url: "#skills",
    text: "skills",
  },
  {
    id: 4,
    url: "#services",
    text: "services",
  },
  {
    id: 5,
    url: "#experience",
    text: "experience",
  },
  {
    id: 6,
    url: "#portfolio",
    text: "projects",
  },
  {
    id: 7,
    url: "#contact",
    text: "contact",
  },
];

export const services = [
  {
    id: 1,
    serviceIcon: FrontIcon,
    text: "Frontend Development",
    serviceInfo:
      "Creating responsive, intuitive user interfaces with React, Next.js, and modern CSS. Building performant SPAs with optimized rendering and state management for exceptional user experiences.",
  },
  {
    id: 2,
    serviceIcon: npmIcon,
    text: "Backend Development",
    serviceInfo:
      "Designing scalable APIs and server architectures with Node.js, Express, and Nest.js. Implementing secure authentication, database optimization, and real-time features to handle high-traffic applications.",
  },
  {
    id: 3,
    serviceIcon: NODE,
    text: "Full-Stack Integration",
    serviceInfo:
      "Seamlessly connecting frontend and backend systems with efficient data flow and state management. Deploying with Docker, PM2, and CI/CD pipelines for reliable, scalable applications.",
  },
];

export const skills = [
  {
    id: 1,
    image: HTML,
    text: "html",
  },
  {
    id: 2,
    image: CSS,
    text: "css",
  },
  {
    id: 3,
    image: JS,
    text: "js",
  },
  {
    id: 4,
    image: React,
    text: "react",
  },
  {
    id: 5,
    image: NODE,
    text: "nodejs",
  },
  {
    id: 6,
    image: NEXT,
    text: "nextjs",
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
    displayName: "All",
  },
  {
    id: 2,
    name: "htmlAndCss",
    displayName: "HTML & CSS",
  },
  {
    id: 3,
    name: "js",
    displayName: "JavaScript",
  },
  {
    id: 4,
    name: "react",
    displayName: "React",
  },
  {
    id: 5,
    name: "nodejs",
    displayName: "Node.js",
  },
];

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Native Code IQ",
    date: "Oct 2023 - Present",
    description: "Built and deployed an HR SaaS used by 3 companies and 1,000+ employees, featuring fingerprint attendance, payroll, and real-time tracking. Led backend and infrastructure efforts, scaling to 180K+ daily requests with Docker and PM2.",
    responsibilities: [
      "Developed and deployed an HR SaaS adopted by 3 companies and 1,000+ employees, with fingerprint attendance, payroll automation, and fraud detection.",
      "Optimized server performance with Docker-based load balancing and PM2, handling 180K+ daily requests in production with high reliability.",
      "Implemented real-time employee tracking and custom activity reports using WebSockets, enhancing operational visibility and accountability.",
      "Collaborated with a Flutter developer and deployed the mobile app on Google Play, now used by 1,000+ employees."
    ]
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "KAL BNYAN-EL MARSOS",
    date: "Nov 2022 - Nov 2023",
    description: "Learned full-stack development using the MERN stack, focusing on responsive UIs, RESTful APIs, and database integration through hands-on practice and guided training.",
    responsibilities: [
      "Trained in HTML, CSS, JavaScript, React, Express, and MongoDB.",
      "Built full-stack web development projects, focusing on responsive and interactive web applications.",
      "Gained experience in RESTful API design and database integration"
    ]
  }
];

export const socialLinks = [
  // {
  //   id: 1,
  //   name: "facebook",
  //   icon: <BsFacebook />,
  //   url: "https://www.facebook.com/profile.php?id=100037880400267",
  // },
  {
    id: 2,
    name: "linkedin",
    icon: <BsLinkedin />,
    url: "https://www.linkedin.com/in/yousef-fawzy/",
  },
  {
    id: 3,
    name: "github",
    icon: <BsGithub />,
    url: "https://github.com/Youssef548",
  },
  // {
  //   id: 4,
  //   name: "twitter",
  //   icon: <BsTwitter />,
  //   url: "none",
  // },
];
