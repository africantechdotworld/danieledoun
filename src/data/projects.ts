import borec from '../assets/projects/borec.png';

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
    title: "Novumdesk",
    description: "A professional desk management and workspace optimization platform. Designed to streamline office space utilization, featuring real-time booking, interactive floor plans, and comprehensive admin controls to enhance workplace efficiency.",
    tags: ["Web", "Next.js", "SaaS", "Workspace", "Management"],
    demoUrl: "https://app.novumdesk.com/",
    image: "/projects/novumdesk.png",
    buttonType: 'demo'
  },
  {
    title: "Tiakola Website",
    description: "An immersive, artist-centric web experience developed for the French artist Tiakola. Built to capture the unique brand aesthetic, featuring high-fidelity visuals, dynamic content sections, and a seamless interface tailored for his global audience.",
    tags: ["Web", "Next.js", "Entertainment", "Premium UI", "Portfolio"],
    demoUrl: "https://tiakola-homepge.vercel.app/",
    image: "/projects/tiakola.png",
    buttonType: 'demo'
  },
  {
    title: "Eden Food",
    description: "A premium restaurant website for Eden Food in the Republic of Benin. Designed to showcase their exquisite menu, facilitate online reservations, and provide an immersive web dining experience through high-quality visuals and smooth UI interactions.",
    tags: ["Web", "Next.js", "Restaurant", "UI/UX", "TailwindCSS"],
    demoUrl: "https://eden-food.vercel.app/",
    image: "/projects/eden-food.png",
    buttonType: 'demo'
  },
  {
    title: "Tala",
    description: "A fast, secure, and intuitive digital loan application that empowers users with instant access to personal financing. Features real-time credit checking, streamlined KYC onboarding, and seamless repayment scheduling integrated with modern payment gateways.",
    tags: ["Mobile", "Fintech", "React Native", "Finance", "Loan Platform"],
    demoUrl: "https://tala-psi.vercel.app/",
    image: "/projects/tala.png",
    buttonType: 'demo'
  },
  {
    title: "Stud.ia",
    description: "An educational platform designed to enhance the learning experience with interactive tools and comprehensive resources.",
    tags: ["React", "Next.js", "TailwindCSS", "Education"],
    demoUrl: "https://studiaitalia.it/",
    image: "/projects/studia.png",
    buttonType: 'demo'
  },
  {
    title: "Borec",
    description: "A premium digital platform designed for high-end business interactions and professional service management. Features a clean, minimalist interface with a focus on user experience and seamless navigation. Built to represent modern corporate standards.",
    tags: ["React", "Next.js", "TailwindCSS", "Premium UI", "Enterprise Solutions", "Full-Stack"],
    demoUrl: "https://borec-orcin.vercel.app/",
    image: "/projects/borec.png",
    buttonType: 'demo'
  },
  {
    title: "GLD-cart",
    description: "A high-performance e-commerce shopping cart solution designed for seamless user transactions and inventory management. Focused on speed, security, and a premium shopping experience.",
    tags: ["React", "Next.js", "TailwindCSS", "E-commerce", "Stripe", "Full-Stack"],
    demoUrl: "https://gldcart-dev.vercel.app",
    image: "/projects/gldcart.png",
    buttonType: 'demo'
  },

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