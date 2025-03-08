import { images } from './imageData';
import { Project } from './types';

/**
 * Project data for the portfolio
 * Contains all project information displayed in the Projects section
 */
export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Luxury Vehicle Showcase',
    description: 'An immersive digital platform showcasing high-end sports cars and motorcycles with interactive 3D models and detailed specifications.',
    technologies: ['React', 'Three.js', 'WebGL'],
    projectUrl: '#',
    imageUrl: images.projects.project1,
    featured: true,
    category: 'Web Development',
    completionDate: '2023-06'
  },
  {
    id: 'project2',
    title: 'Material Texture Library',
    description: 'A comprehensive database of high-resolution material textures for designers and 3D artists, featuring advanced search and filtering capabilities.',
    technologies: ['Next.js', 'MongoDB', 'AWS S3'],
    projectUrl: '#',
    imageUrl: images.projects.project2,
    featured: true,
    category: 'Full Stack',
    completionDate: '2023-08'
  },
  {
    id: 'project3',
    title: 'Modern Interior Design Platform',
    description: 'A design solution that helps users visualize and plan interior spaces with photorealistic renders and smart furniture placement algorithms.',
    technologies: ['TypeScript', 'Vue.js', 'Three.js'],
    projectUrl: '#',
    imageUrl: images.projects.project3,
    featured: true,
    category: 'Design Tools',
    completionDate: '2023-11'
  },
  // You can add more projects here
]; 