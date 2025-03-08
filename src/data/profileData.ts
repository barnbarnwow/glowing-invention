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
    "Hey! I’m a web developer—which basically means I turn coffee into websites that people actually enjoy using (shocking, I know). I specialize in Next.js, creating responsive apps that look good on every device… at least according to my mom.",
    "When I’m not busy arguing with my code, I’m probably checking out the latest tech, contributing to open-source projects (because coding for free builds character), or pretending to love hiking for Instagram points. Always open to new adventures, especially ones involving tricky problems and fewer CSS nightmares."
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