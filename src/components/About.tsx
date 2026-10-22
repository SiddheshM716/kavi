"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Brain,
  Cpu,
  Server,
  Layout,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const competencies = [
    {
      icon: Brain,
      title: "Dual Neural Networks & Deep Learning",
      description:
        "Trained multi-head architectures in PyTorch for simultaneous classification of complex domains, such as potable water safety and waterborne disease propagation risks.",
      tag: "PyTorch & Deep Learning",
      accent: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400",
    },
    {
      icon: Cpu,
      title: "End-to-End ML Pipelines",
      description:
        "Engineered robust feature pipelines, outlier handling, categorical encoding, and gradient boosting with XGBoost to proactively identify business churn patterns.",
      tag: "XGBoost & Scikit-Learn",
      accent: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400",
    },
    {
      icon: Server,
      title: "High-Throughput REST APIs",
      description:
        "Architected clean, asynchronous microservices with FastAPI and Flask, bridging ML models to client dashboards with Dockerized deployment and database persistence.",
      tag: "FastAPI, Flask & Docker",
      accent: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
    },
    {
      icon: Layout,
      title: "Modern Full-Stack Applications",
      description:
        "Crafting intuitive user interfaces using React, Next.js, TypeScript, and Tailwind CSS with centralized state management, responsive design, and fluid interactions.",
      tag: "React, Next.js & Tailwind",
      accent: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Bridging Artificial Intelligence with Practical Engineering
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          I combine mathematical foundations of machine learning with modern web
          architectures to turn data into intelligent, intuitive software products.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Card */}
        <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="mb-6 pb-4 border-b border-slate-800/80">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              {PORTFOLIO_DATA.personal.name}
            </h3>
            <p className="text-xs text-cyan-400 font-medium mt-1">
              {PORTFOLIO_DATA.personal.role}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              {PORTFOLIO_DATA.personal.location}
            </p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            I am currently in my final year pursuing a{" "}
            <span className="text-white font-medium">
              B.Tech in Computer Science and Engineering
            </span>{" "}
            at{" "}
            <span className="text-cyan-400 font-medium">
              SRM Institute of Science and Technology
            </span>{" "}
            (2023 – 2027) with a CGPA of 7.06.
          </p>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            My work focuses on translating machine learning algorithms into
            reliable real-world tools — from training dual neural networks for
            potable water safety (AquaAI) and building predictive churn engines in
            FastAPI to developing smart city citizen complaint portals with
            responsive React and Tailwind interfaces.
          </p>

          {/* Key bullets */}
          <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Experienced with end-to-end ML lifecycle: data preprocessing,
                feature engineering, neural networks, and evaluation.
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Hands-on backend development with Python, Flask, FastAPI, Docker,
                and relational databases (MySQL, SQLite).
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Modern frontend development with React, Next.js, TypeScript, and
                Tailwind CSS for responsive, accessible user interfaces.
              </span>
            </div>
          </div>

          {/* Academic Highlight */}
          <div className="mt-6 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-indigo-400 shrink-0" />
            <div className="text-xs">
              <span className="text-slate-200 font-semibold block">
                SRM Institute of Science and Technology
              </span>
              <span className="text-slate-400">
                B.Tech CSE (2023–27) · CGPA: 7.06/10
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Competency Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {competencies.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-4 border`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
