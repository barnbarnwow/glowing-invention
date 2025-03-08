import { images } from './imageData';

// Define the structure of a project
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  imageUrl?: string;
  featured?: boolean;
}

// Project data for the portfolio
export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Project Title 1',
    description: 'A brief description of the project, technologies used, and your role in it.',
    technologies: ['React', 'Node.js'],
    projectUrl: '#',
    imageUrl: images.projects.project1,
    featured: true
  },
  {
    id: 'project2',
    title: 'Project Title 2',
    description: 'A brief description of the project, technologies used, and your role in it.',
    technologies: ['Next.js', 'Tailwind'],
    projectUrl: '#',
    imageUrl: images.projects.project2,
    featured: true
  },
  {
    id: 'project3',
    title: 'Project Title 3',
    description: 'A brief description of the project, technologies used, and your role in it.',
    technologies: ['TypeScript', 'API'],
    projectUrl: '#',
    imageUrl: images.projects.project3,
    featured: true
  },
  // You can add more projects here
]; 