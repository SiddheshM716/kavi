"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  ArrowUp,
  Mail,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#04060c] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Brand & summary (without KS icon box) */}
        <div className="flex flex-col items-center text-center max-w-lg mb-8">
          <span className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            {PORTFOLIO_DATA.personal.name}
          </span>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Machine Learning & Full-Stack Developer · Final-year B.Tech CSE at
            SRM Institute of Science and Technology.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400 mb-8">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#education" className="hover:text-cyan-400 transition-colors">
            Education
          </a>
          <a
            href="#certifications"
            className="hover:text-cyan-400 transition-colors"
          >
            Certifications
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-300"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume (PDF)</span>
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-slate-400 mb-10">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:text-white hover:border-cyan-500/40 transition-colors"
            title="GitHub: KAVIARASU08"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:text-white hover:border-cyan-500/40 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:text-white hover:border-cyan-500/40 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom line */}
        <div className="w-full pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">

        </div>
      </div>
    </footer>
  );
}
