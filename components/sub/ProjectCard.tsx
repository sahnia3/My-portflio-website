import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  className?: string;
  imageHeight?: string;
}

const ProjectCard = ({ src, title, description, className = "", imageHeight = "h-[200px]" }: Props) => {
  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg border border-[#5656578b] ${className}`}>
      <Image
        src={src}
        alt={title}
        width={400}
        height={300}
        className={`w-full ${imageHeight} object-cover`}
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
