import Image from "next/image";
import React, { FC } from "react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  };
}
const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="relative w-full py-6 px-4 flex flex-col space-y-4 
    lg:space-y-6 border-2 border-sky-700 bg-slate-800 rounded-lg overflow-hidden">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          className="w-full h-64 object-cover object-center"
          src={project.imageUrl}
          width={200}
          height={200}
          alt={project.title}
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

          <p className="text-gray-700">{project.description}</p>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
