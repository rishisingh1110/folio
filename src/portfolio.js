import cinnamint from "./components/Access/cinnamint.jpg";
import netflix from "./components/Access/netflix.jpg";
import sogo from "./components/Access/sogo.jpg"
import profilepic from "./components/Access/profilepic.jpg"

const header = {
  homepage: "rishi",
  title: "Rishi.",
};

const about = {
  photo: profilepic,
  name: "Rishi Singh",
  role: "Full stack developer",
  description:
    "A Software Developer with around 2 years of experience building web apps.",
  resume:
    "https://drive.google.com/drive/folders/1n7M4zT3l1XIOzMJ6N6BGTIs3wW9f9XYZ?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/rishisingh1110/",
    github: "https://github.com/rishisingh1110",
  },
};


const projects = [
  {
    name: "Cinnamint Bakery  ",
    description: `An E-Commerce Website with a wide array of Cakes and Muffins, boasting detailed filters and secure user authentication; implemented persistent search, pagination, and real-time alerts for a seamless user experience. `,
    stack: ["HTML","CSS", "React.js", "Context API"],
    sourceCode: "https://github.com/rishisingh1110/CakeShop",
    livePreview: "https://cake-shop-wheat.vercel.app/",
    image: cinnamint
  },
  {
   name: 'Netflix Clone',
   description: `Group Project. Utilized 'react router dom' and module CSS for the login/signup flow. Developed key core components to enhance functionality.`,
   stack: ["React.js", "Redux", "JavaScript", "CSS", "HTML", "Material-UI"],
   sourceCode: 'https://github.com/rishisingh1110/Netflix',
   livePreview: 'https://netflix-clone-two-black.vercel.app/login',
   image: netflix
  },
  
  {
    name: 'Sogo Hotel',
    description: `Used CSS concepts such as Grids, Flex, and Combinators. Employed media queries to ensure full responsiveness across various devices, enhancing user experience.`,
    stack: ["HTML","CSS3","JavaScript"],
    sourceCode: 'https://github.com/rishisingh1110/Sogo-Hotel-Website',
    livePreview: 'https://rishisingh1110.github.io/Sogo-Hotel-Website/home.html',
    image:sogo
   },
];

const skills = [
  {
    name: "HTML",
    imageUrl: "https://www.svgrepo.com/show/353884/html-5.svg",
  },
  {
    name: "CSS",
    imageUrl: "https://www.svgrepo.com/show/452185/css-3.svg",
  },
  {
    name: "JavaScript",
    imageUrl: "https://www.svgrepo.com/show/373705/js-official.svg",
  },
  {
    name: "React",
    imageUrl: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    name: "TypeScript",
    imageUrl: "https://www.svgrepo.com/show/443502/brand-typescript.svg",
  },
  
  
  { name: "NextJS", imageUrl: "https://www.svgrepo.com/show/354112/nextjs.svg" },
  {
    name: "Node Js",
    imageUrl: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
  },
  {
    name: "Express",
    imageUrl: "https://www.svgrepo.com/show/330398/express.svg",
  },  
  {
    name: "MongoDB",
    imageUrl: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    name: "postgresql",
    imageUrl: "https://www.svgrepo.com/show/439268/postgresql.svg",
  },
  {
    name: "Git",
    imageUrl: "https://www.svgrepo.com/show/452210/git.svg",
  },
  
  {
    name: "Vercel",
    imageUrl: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
  },
  {
    name: "Netlify",
    imageUrl: "https://www.svgrepo.com/show/376339/netlify.svg",
  },
];

const contact = {
  email: "rishisingh1110@gmail.com",
};

export { header, about, projects, skills, contact };
