"use client";

import { useState } from "react";
import ProjectsSidebar from "./ProjectsSidebar";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects({ limit }) {
  const list = limit ? projects.slice(0, limit) : projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = list[activeIndex] ?? list[0];

  return (
    <section id="projects" className="wrap" style={{ padding: "40px 24px"}}>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          fontSize: "clamp(2.25rem, 4vw, 3rem)",
          color: "#f5f4ef",
          marginBottom: 48,
        }}
      >
        {limit ? "Selected Work" : "Projects"}
      </h1>

      <div style={{ display: "flex", gap: "64px", alignItems: "center", flexWrap: "wrap" }}>
        <ProjectsSidebar
          items={list.map((p) => p.title)}
          activeIndex={activeIndex}
          onItemClick={setActiveIndex}
        />
        <div style={{ flex: 1, minWidth: 320 }}>
          {activeProject && <ProjectCard key={activeProject.title} project={activeProject} />}
        </div>
      </div>
    </section>
  );
}