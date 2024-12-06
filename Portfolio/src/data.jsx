import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Tugberk",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Savas",
  },

  {
    id: 3,
    title: "Age : ",
    description: "28 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Turkish",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Istanbul/Turkey",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+905344102545",
  },

  {
    id: 8,
    title: "Email : ",
    description: "tugberk.savas@gmail.com",
  },

  {
    id: 9,
    title: "Linkedin : ",
    description: "tugberksavas",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "20+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "21+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "2+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2013-2014",
    title: "Internship <span> Erdemir </span>",
    desc: "By doing an internship in the machinery department at Erdemir, I gained experience in mechanical engineering applications in the industrial sector.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018-2021",
    title: "Department Manager <span> Koton </span>",
    desc: "-",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022-2023",
    title: "Personal Shopping Assistant <span> Migros </span>",
    desc: "-",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2014-2016",
    title: "Machine <span> Kocaeli University </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016-2019",
    title: "Business Department <span> Anadolu University </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023-2024",
    title: "Frontend-Backend <span> Patika Plus+ </span>",
    desc: "By taking frontend and backend training through Patika+, I developed a wide skill set in the software world.",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "100",
  },

  {
    id: 2,
    title: "Css",
    percentage: "89",
  },

  {
    id: 3,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 4,
    title: "Php",
    percentage: "66",
  },

  {
    id: 5,
    title: "React",
    percentage: "95",
  },

  {
    id: 6,
    title: "Jquery",
    percentage: "50",
  },

  {
    id: 7,
    title: "Angular",
    percentage: "10",
  },

  {
    id: 8,
    title: "Java",
    percentage: "55",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
