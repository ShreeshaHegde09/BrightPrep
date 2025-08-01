import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


import { interviewCovers, mappings } from "@/constants/index";

// Map normalized tech names to logo URLs
const techLogoMap: Record<string, string> = {
  react: "/logos/react.svg",
  nextjs: "/logos/nextjs.svg",
  vuejs: "/logos/vuejs.svg",
  express: "/logos/express.svg",
  nodejs: "/logos/nodejs.svg",
  mongodb: "/logos/mongodb.svg",
  mysql: "/logos/mysql.svg",
  postgresql: "/logos/postgresql.svg",
  firebase: "/logos/firebase.svg",
  docker: "/logos/docker.svg",
  kubernetes: "/logos/kubernetes.svg",
  aws: "/logos/aws.svg",
  azure: "/logos/azure.svg",
  gcp: "/logos/gcp.svg",
  html5: "/logos/html5.svg",
  css3: "/logos/css3.svg",
  sass: "/logos/sass.svg",
  tailwindcss: "/logos/tailwindcss.svg",
  bootstrap: "/logos/bootstrap.svg",
  typescript: "/logos/typescript.svg",
  javascript: "/logos/javascript.svg",
  angular: "/logos/angular.svg",
  redux: "/logos/redux.svg",
  git: "/logos/git.svg",
  github: "/logos/github.svg",
  figma: "/logos/figma.svg",
  // ...add more as needed
};

type TechIcon = { tech: string; url: string };

export async function getTechLogos(techStack: string[]): Promise<TechIcon[]> {
  if (!techStack || !Array.isArray(techStack) || techStack.length === 0) {
    return [];
  }

  return techStack.map((tech) => {
    if (!tech || typeof tech !== 'string') {
      return {
        tech: 'Unknown',
        url: "/logos/default.svg",
      };
    }

    const key = tech.toLowerCase() as keyof typeof mappings;
    const normalized = mappings[key] || tech.toLowerCase();
    const logoUrl = techLogoMap[normalized];
    
    return {
      tech,
      url: logoUrl || "/logos/default.svg",
    };
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};
