"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Layers,
  Calendar,
  X,
  Bot,
} from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "ai-ml" | "web-dev">("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    null
  );

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Featured Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
          Real-world applications spanning deep neural networks, machine
          learning pipelines, REST API microservices, and responsive web systems.
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mt-8 p-1.5 rounded-full bg-slate-900/90 border border-slate-800">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All Projects ({PORTFOLIO_DATA.projects.length})
          </button>
          <button
            onClick={() => setFilter("ai-ml")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === "ai-ml"
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            AI & Machine Learning (2)
          </button>
          <button
            onClick={() => setFilter("web-dev")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === "web-dev"
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Web Development (1)
          </button>
        </div>
      </div>

      {/* Projects Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel rounded-3xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/20"
          >
            <div>
              {/* Image Preview Container */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-black/30" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                    {project.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-slate-900/90 backdrop-blur-md text-slate-300 border border-slate-700">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 mb-4 line-clamp-2">
                  {project.subtitle}
                </p>

                {/* Key Bullet Highlights from Resume */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-400"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-900 text-slate-400 border border-slate-800">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Card Action Footer */}
            <div className="p-6 pt-0 border-t border-slate-800/60 mt-auto flex items-center justify-between gap-2">
              <button
                onClick={() => setActiveModalProject(project)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Deep Dive</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for In-depth Architecture Breakdown */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                {activeModalProject.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">
                {activeModalProject.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {activeModalProject.period} · {activeModalProject.subtitle}
              </p>
            </div>

            <div className="my-5 rounded-2xl overflow-hidden border border-slate-800 relative h-60">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-slate-300 text-sm">
              <h4 className="font-semibold text-white text-base flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400" />
                Project Architecture & Implementation
              </h4>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                {activeModalProject.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {activeModalProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800">
                <h5 className="text-xs font-semibold text-slate-200 mb-2">
                  Technologies & Frameworks Used
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-cyan-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:from-cyan-300 hover:to-teal-300 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-950" />
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
