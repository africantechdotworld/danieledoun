import menuflixer from '../assets/projects/menuflixer-web.png';
import dropdeli from '../assets/projects/dropdeli.png';
import africaFundMe from '../assets/projects/afm-landing.png';
import dumpVideoDownloader from '../assets/projects/dump-web.png';
import convert from '../assets/projects/convert.svg';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;  // Optional
  githubUrl?: string;  // Optional
  image: string;
  buttonType?: 'demo' | 'download' | 'none';  // New field to determine button type
  buttonText?: string;  // Custom button text
}

export const projects: Project[] = [
  {
    title: "Menuflixer",
    description: "A full-fledged digital food menu management platform with separate web apps for restaurant operations and customer menu browsing. Features include QR code scanning, menu management dashboard, and payment integration.",
    tags: ["ReactJs", "NodeJs", "RestAPI", "Firebase", "MongoDb", "TailwindCSS", "Shadcn UI", "Framer Motion", "Payfast", "JWT", "Charts"],
    demoUrl: "https://menuflixer.vercel.app",
    image: menuflixer.src,
    buttonType: 'demo'
  },
  {
    title: "Dropdeli",
    description: "A modern landing page design for a food delivery platform, showcasing the brand's services and features with a clean, user-friendly interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://dropdeli.vercel.app",
    image: dropdeli.src,
    buttonType: 'demo'
  },
  {
    title: "Africa Fund Me",
    description: "A loan funding website featuring a professional landing page and ongoing development of web application to power their operations.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://fund-africa.vercel.app",
    image: africaFundMe.src,
    buttonType: 'demo'
  },
  {
    title: "Dump Video Downloader",
    description: "A comprehensive platform for downloading internet videos, available as both web and mobile applications with advanced features and user-friendly interface.",
    tags: ["Flutter", "ReactJS", "Python", "RestAPI", "FFMPEG", "Google Play IAP", "Admob"],
    demoUrl: "https://dumpvideodownloader.com",
    image: dumpVideoDownloader.src,
    buttonType: 'demo',
  },
  {
    title: "Convert",
    description: "An Android mobile application for live currency exchange, built with modern Android development practices and real-time data integration.",
    tags: ["Android", "Jetpack Compose", "RESTAPI"],
    demoUrl: "#",
    githubUrl: "https://github.com/africantechdotworld/convert-mobile",
    image: convert.src,
    buttonType: 'none',
  }
];

// Helper functions for filtering
export const filterProjectsByTag = (projects: Project[], tagCategory: string) => {
  if (tagCategory === 'all') return projects;
  
  if (tagCategory === 'web') {
    return projects.filter(project => 
      project.tags.some(tag => 
        ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Python', 'RestAPI', 
        'Firebase', 'MongoDB', 'TailwindCSS', 'Shadcn UI', 'Framer Motion', 
        'JWT', 'Charts', 'Payfast'].includes(tag)
      )
    );
  }
  
  if (tagCategory === 'mobile') {
    return projects.filter(project => 
      project.tags.some(tag => 
        ['Flutter', 'Android', 'Jetpack Compose', 'Google Play IAP', 'Admob'].includes(tag)
      )
    );
  }
  
  return projects;
}; 