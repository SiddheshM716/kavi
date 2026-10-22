"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  GraduationCap,
  Award,
  Sparkles,
  Calendar,
  ExternalLink,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export default function EducationCertifications() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Education Header */}
      <div id="education" className="flex flex-col items-center text-center mb-16 scroll-mt-24">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Education & Core Foundations
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
          Rigorous undergraduate coursework in Computer Science combined with
          systematic study in core systems and algorithm design.
        </p>

        {/* Education Highlight Card */}
        <div className="mt-10 w-full max-w-4xl text-left glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-cyan-500/20">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {PORTFOLIO_DATA.education.institution}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                  {PORTFOLIO_DATA.education.degree}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {PORTFOLIO_DATA.education.location} · {PORTFOLIO_DATA.education.status}
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-cyan-300 border border-cyan-500/30">
                {PORTFOLIO_DATA.education.period}
              </span>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Cumulative Score</span>
                <span className="text-lg font-black text-white">
                  CGPA {PORTFOLIO_DATA.education.cgpa}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              Core Academic Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_DATA.education.courses.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3 h-3 text-cyan-400" />
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Header */}
      <div id="certifications" className="flex flex-col items-center text-center mt-20 mb-12 scroll-mt-24">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Professional Verification</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Certifications & Professional Credentials
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
          Specialized industry certificates demonstrating competence in relational
          databases, systems programming, and modern object-oriented C++.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PORTFOLIO_DATA.certifications.map((cert, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-amber-400 border border-amber-500/20">
                  {cert.issuer}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                {cert.description}
              </p>

              <div className="space-y-1.5 mb-6">
                <span className="text-[11px] font-semibold text-slate-300 block mb-1">
                  Key Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                <CheckCircle className="w-3 h-3" />
                Verified Coursework
              </span>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                <span>Credential Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
