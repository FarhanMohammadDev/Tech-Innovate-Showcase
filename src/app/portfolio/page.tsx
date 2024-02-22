"use client";

import React, { useState } from "react";
import Heading from "@/components/Heading";
import { projects } from "@/constants/projectItems";
import ProjectCard from "@/components/ProjectCard";

const PortfolioPage = () => {
  return (
    <section id="pricing" className="relative container flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-10">
      <Heading title="Find a plan to power your projects" isCentered />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
