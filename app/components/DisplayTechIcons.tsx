"use client";

import React, { useEffect, useState } from 'react'
import { cn, getTechLogos } from "@/lib/utils";
import Image from 'next/image';

type TechIcon = { tech: string; url: string };
type TechIconProps = { techStack: string[] };

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
  const [techIcons, setTechIcons] = useState<TechIcon[]>([]);

  useEffect(() => {
    getTechLogos(techStack).then(setTechIcons);
  }, [techStack]);

  return (
    <div className='flex flex-row'>
      {techIcons.slice(0, 3).map(({ tech, url },index) => (
        <div className={cn("relative group bg-dark-300 rounded-full p-2 flex-center",index >= 1 && '-ml-3')} key={tech}>
          <span className="tech-tooltip">{tech}</span>
          <Image src={url} alt={tech} width={100} height={100} className='size-5'/>
        </div>
      ))}
    </div>
  );
}

export default DisplayTechIcons


