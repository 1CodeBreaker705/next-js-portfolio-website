import { Project } from "@/types";
export const projects:Project[] = [
      {
        title: 'Task Management App',
        description: 'A full-stack task management app that lets users securely create, organize, and track their tasks with JWT authentication and a modern React interface.',
        technologies: ['React', 'Node.js','Express', 'MongoDB'],
        githubLink: 'https://github.com/1CodeBreaker705/_TaskManagementApp',
        demoLink: 'https://task-management-app-tan-six.vercel.app',
        image: '/projects/task-manager.webp',
      },
      {
        title: 'Blog Platform',
        description: 'A blogging platform with user authentication and markdown support.',
        technologies: ['Gatsby', 'GraphQL', 'Contentful'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/blog-website.jpeg',
      },
      {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my projects and skills.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/portfolio-website.jpg',
      },
  ];
