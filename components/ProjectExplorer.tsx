"use client";

import { ArrowUpRight, BarChart3, Code2, Cpu, LayoutGrid, Plus, ScanEye, Smartphone, Sparkles } from "lucide-react";
import { useState } from "react";
import type { Project } from "../data/portfolio";

function categoryIcon(project: Project) {
  if (project.slug === "gui") return Code2;
  if (project.slug === "apdcl-app") return Smartphone;
  if (project.category.includes("AI")) return Sparkles;
  if (project.category.includes("OCR")) return ScanEye;
  if (project.category.includes("DATA")) return BarChart3;
  if (project.category.includes("INTERFACE")) return LayoutGrid;
  return Cpu;
}

export default function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState("");
  return (
    <div className="project-explorer">
      <div className="project-grid">
        {projects.map((project) => {
          const isOpen = open === project.slug;
          const Icon = categoryIcon(project);
          return (
            <article key={project.slug} className={`project-card accent-${project.accent} ${isOpen ? "is-open" : ""}`}>
              <div className="project-card-top">
                <span className="project-card-icon" aria-hidden="true"><Icon size={18} strokeWidth={1.8} /></span>
                <span className="project-card-phase">{project.phase}</span>
              </div>
              <span className="mini-label project-card-category">{project.category}</span>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-summary">{project.summary}</p>
              {!isOpen && (
                <div className="project-card-tags">
                  {project.stack.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
                  {project.stack.length > 3 ? <span className="project-card-tags-more">+{project.stack.length - 3}</span> : null}
                </div>
              )}
              {isOpen && (
                <div id={`${project.slug}-detail`} className="project-card-detail is-detail-open">
                  <p>{project.detail}</p>
                  <div className="stack-row">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                </div>
              )}
              <div className="project-card-footer">
                <button type="button" className="project-card-toggle" onClick={() => setOpen(isOpen ? "" : project.slug)} aria-expanded={isOpen} aria-controls={`${project.slug}-detail`}>
                  <Plus size={13} strokeWidth={2} /> {isOpen ? "Show less" : "Read more"}
                </button>
                <a href="#contact" className="project-card-link">Discuss this build <ArrowUpRight size={13} /></a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
