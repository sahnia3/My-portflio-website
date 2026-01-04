import Image from "next/image";
import React from "react";
import Link from "next/link"; // Add import

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string; // Add optional link prop
  className?: string;
  imageHeight?: string;
}

const ProjectCard = ({ src, title, description, link, className = "", imageHeight = "h-[200px]" }: Props) => {
  const content = (
    <>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className={`w-full ${imageHeight} object-cover`}
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </>
  );

  const cardClasses = `relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-purple-500/50 transition-all duration-300 ${className}`;

  if (link) {
    return (
      <Link href={link} className={`${cardClasses} block cursor-pointer hover:scale-[1.02] z-[20]`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`${cardClasses} z-[20]`}>
      {content}
    </div>
  );
};

export default ProjectCard;
