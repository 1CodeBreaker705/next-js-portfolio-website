import { Project } from "@/types";
export const projects:Project[] = [
      {
        title: 'Task Management App',
        description: 'A full-stack task management app that lets users securely create, organize, and track their tasks with JWT authentication and a modern React interface.',
        technologies: ['React', 'Node.js','Express', 'MongoDB'],
        githubLink: 'https://github.com/1CodeBreaker705/_TaskManagementApp',
        demoLink: 'https://task-management-app-tan-six.vercel.app',
        image: '/projects/New-Task-Management-App.png',
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
