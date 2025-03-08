import { images } from './imageData';

// Profile data for the portfolio
export const profileData = {
  // Basic info
  name: "Barney Jesse",
  title: "Web Developer & Designer",
  profileImage: images.profile.main, // Using the centralized image data
  
  // Social media links
  socialMedia: [
    { platform: "GitHub", url: "https://github.com/barnbarnwow" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/baranpas-jesse/" },
    { platform: "Twitter", url: "https://twitter.com/yourusername" }
  ],
  
  // Biography paragraphs - each item in the array is a new paragraph
  bioParagraphs: [
    "Hello! I'm a passionate web developer with a focus on creating beautiful, functional, and user-friendly websites. With expertise in modern frameworks like Next.js, I build responsive applications that deliver exceptional user experiences.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors. I'm always looking for new challenges and opportunities to grow as a developer."
  ],
  
  // Education history
  education: [
    {
      degree: "Bachelor of Science in Business Administration",
      institution: "Missouri Southern State University",
      years: "2021-2022",
      description: "Member of The Phi Sigma Pi National Honor Fraternity and The National Society of Leadership and Success"
    },
    {
      degree: "Associate's Degree in Business Administration",
      institution: "Crowder College",
      years: "2020-2021",
      description: "Member of The International Club"
    },
    // Add more education items as needed
    // {
    //   degree: "Master's in Web Development",
    //   institution: "Another University",
    //   years: "2022-2024",
    //   description: "Focused on advanced frontend frameworks and UX design."
    // }
  ],
  
  // Interests and hobbies
  interests: [
    "Web Development",
    "UI/UX Design",
    "Reading Literature",
    "Gaming",
    "Music",
    "Hiking",
    "Photography"
  ],
  
  // Skills (optional - can be used in the skills page as well)
  keySkills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "HTML/CSS",
    "Git",
    "Python",
    "Statistics",
    "Marketing",
    "Analytics",
    "Automation",
    "Project Management",
    "Team Leadership",
    "Strategic Planning",
    "Client Relations",
    "Business Analysis",
    "Marketing Strategy",
    "Financial Analysis"
  ],
  
  // Business skills categorized
  businessSkills: [
    {
      category: "Business Management",
      skills: [
        "Project Management",
        "Team Leadership",
        "Strategic Planning",
        "Time Management",
        "Resource Allocation"
      ]
    },
    {
      category: "Client & Customer Relations",
      skills: [
        "Client Communication",
        "Stakeholder Management",
        "Requirement Gathering",
        "Expectation Management",
        "Customer Support"
      ]
    },
    {
      category: "Analysis & Strategy",
      skills: [
        "Business Analysis",
        "Marketing Strategy",
        "Financial Analysis",
        "Data-Driven Decision Making",
        "Market Research"
      ]
    }
  ]
}; 