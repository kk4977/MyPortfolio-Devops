import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  git,
  docker,
  postgresql,
  coverhunt,
  srm,
  ibm,
  pibit,
  practitioner,
  // foundation,
  Redhat,
  deloitte
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: "Automation",
    icon: frontend,
  },
  {
    title: "CI/CD",
    icon: backend,
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: ux,
  },
  {
    title: "Monitoring and Logging",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  // {
  //   name: 'React JS',
  //   icon: reactjs,
  // },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Cloud & DevOps Intern',
    company_name: 'Pibit',
    icon: pibit,
    iconBg: '#333333',
    date: 'AUG 2024 - DEC 2024',
  },
  {
    title: 'Data Science Intern',
    company_name: 'IBM',
    icon: ibm,
    iconBg: '#333333',
    date: 'Jan 2024 - march 2024',
  },
  {
    title: 'B.tech CSE',
    company_name: 'SRM Institute of Science & Technology, Chennai',
    icon: srm,
    iconBg: '#333333',
    date: 'July 2021 - Present',
  },
];

const projects = [
  // {
  //   id: "project-1",
  //   name: "AWS Academy Foundation Graduate ",
  //   description: "View my verified achievement from Amazon Web Services (AWS).",
  //   image: foundation,
  //   repo: "#",
  //   demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20230804-28-luyiiy.pdf",
  // },
  {
    id: "project-2",
    name: "AWS Certified Solution Architect",
    description:
      "AWS Academy Graduate issued by  Amazon Web Services Training and Certification.",
    image: practitioner,
    repo: "#",
    demo: "https://drive.google.com/file/d/1y-k00B9kxwtO7yqaPUoGnUbT9zYr2BNN/view?usp=sharing",
  },
  {
    id: "project-3",
    name: "Redhat",
    description: "Create a virtual machine and deploy a Web Server",
    image: Redhat,
    repo: "#",
    demo: "https://drive.google.com/file/d/1T-yFKnGpRl0ijrZ5Xos8tgRNzxCiF2v8/view?usp=sharing",
  },
  // {
  //   id: "project-4",
  //   name: "Deloitte",
  //   description:
  //     "Technology Consulting Virtual Internship",
  //   image: deloitte,
  //   repo: "#",
  //   demo: "https://manp1209.s3.ap-south-1.amazonaws.com/FqFtWwQzNxJ8Qsh5H_Deloitte_P9vz2x4Mcp37hehcd_completion_certificate.pdf",
  // },
  // {
  //   id: "project-5",
  //   name: "AWS Academy Foundation Graduate ",
  //   description: "View my verified achievement from Amazon Web Services (AWS).",
  //   image: foundation,
  //   repo: "#",
  //   demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20230804-28-luyiiy.pdf",
  // },
];

export { services, technologies, experiences, projects };
