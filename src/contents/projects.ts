import { Project } from "@/types";
export const projects:Project[] = [
      {
        title: 'Taskin',
        description: 'A full-stack task management app that lets users securely create, organize, and track their tasks with JWT authentication and a modern React interface.',
        technologies: ['React', 'Node.js','Express', 'MongoDB'],
        githubLink: 'https://github.com/1CodeBreaker705/_TaskManagementApp',
        demoLink: 'https://task-management-app-tan-six.vercel.app',
        image: '/projects/New-Task-Management-App.png',
      },
      {
        title: 'Blogify',
        description: 'Developed a full-stack blogging web application using React, Tailwind CSS, and Appwrite, enabling users to create, publish, and interact with blogs.',
        technologies: ['React','Tailwind Css','Appwrite'],
        githubLink: 'https://github.com/1CodeBreaker705/Blogify-BlogWebsite',
        demoLink: 'https://blogify-blog-website.vercel.app/',
        image: '/projects/Blog-Website.png',
      },
      {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my projects and skills.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com/1CodeBreaker705/next-js-portfolio-website',
        demoLink: 'https://next-js-portfolio-website-livid.vercel.app/',
        image: '/projects/My-Portfolio-Website.png',
      }
  ];
