"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Award,
  Briefcase,
  Code2,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-3 text-xs font-semibold text-slate-300">
              Kaviarasu_Subramani_Resume.pdf (Preview)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 font-sans text-xs sm:text-sm">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-2.5 text-xs text-slate-400">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="hover:text-cyan-400 flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <span>•</span>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="hover:text-cyan-400 flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </span>
              <span>•</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* SUMMARY */}
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">
              Summary
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {PORTFOLIO_DATA.personal.bio}
            </p>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2 border-b border-slate-800 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-bold text-white text-sm">
                {PORTFOLIO_DATA.education.institution}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {PORTFOLIO_DATA.education.period}
              </span>
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span className="italic">{PORTFOLIO_DATA.education.degree}</span>
              <span className="font-semibold text-cyan-300">
                CGPA: {PORTFOLIO_DATA.education.cgpa}
              </span>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-800 pb-1 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <div>
                <span className="font-bold text-slate-200">Programming Languages: </span>
                <span className="text-slate-400">
                  Python, C, C++, JavaScript, SQL, TypeScript
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-200">Web Technologies & Frameworks: </span>
                <span className="text-slate-400">
                  HTML, CSS, React.js, Flask, FastAPI, Tailwind CSS, Vite
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-200">Machine Learning & Data Science: </span>
                <span className="text-slate-400">
                  Machine Learning, Deep Learning, Predictive Modeling, Feature
                  Engineering, Model Training, Model Evaluation, NumPy, Pandas,
                  Scikit-learn, XGBoost, PyTorch
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-200">Tools & Technologies: </span>
                <span className="text-slate-400">
                  Git, GitHub, Docker, MySQL, SQLite, npm
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-200">Domain Knowledge: </span>
                <span className="text-slate-400">
                  DSA, DBMS, OOP, Operating Systems, Computer Networks
                </span>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-800 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              Projects
            </h2>
            <div className="space-y-6">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-white text-sm">
                      {proj.title}
                    </span>
                    <span className="text-xs text-slate-400">
                      {proj.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 text-[11px] text-cyan-400 font-mono">
                    <span>{proj.technologies.join(", ")}</span>
                    <span>•</span>
                    <span className="italic text-slate-400">
                      {proj.categoryLabel}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-slate-300 text-xs">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-800 pb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Certifications
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.certifications.map((cert, i) => (
                <div key={i} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-semibold text-white">
                      {cert.title}
                    </span>
                    <span className="text-slate-400"> — {cert.issuer}</span>
                  </div>
                  <span className="text-slate-400 shrink-0 ml-4 font-mono">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Formatted from official resume documentation
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
