"use client";

import React, { useState, useMemo } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Cpu,
  Globe,
  Code2,
  Terminal,
  BookOpen,
  Search,
  Sparkles,
  Layers,
} from "lucide-react";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    return ["All", ...PORTFOLIO_DATA.skillCategories.map((c) => c.name)];
  }, []);

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Machine Learning & Data Science":
        return Cpu;
      case "Web Technologies & Frameworks":
        return Globe;
      case "Programming Languages":
        return Code2;
      case "Tools, Database & DevOps":
        return Terminal;
      case "Domain Knowledge":
        return BookOpen;
      default:
        return Layers;
    }
  };

  const filteredCategories = useMemo(() => {
    return PORTFOLIO_DATA.skillCategories
      .map((cat) => {
        const matchesCategory =
          selectedCategory === "All" || cat.name === selectedCategory;
        if (!matchesCategory) return null;

        const filteredSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filteredSkills.length === 0) return null;

        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter(Boolean);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills & Technical Expertise
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
          From deep learning algorithms and predictive analytics to full-stack
          web infrastructure and modern developer tooling.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search skills (e.g. PyTorch, FastAPI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => {
            if (!cat) return null;
            const CategoryIcon = getCategoryIcon(cat.name);
            return (
              <div
                key={cat.name}
                className="glass-panel p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {cat.name}
                      </h3>
                      <span className="text-[11px] text-slate-400">
                        {cat.skills.length} skills listed
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group relative px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                          skill.highlight
                            ? "bg-slate-900/90 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 shadow-sm shadow-cyan-950/20"
                            : "bg-slate-900/60 text-slate-300 border border-slate-800/80 hover:border-slate-700"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          )}
                          {skill.name}
                        </span>
                        <span className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700 whitespace-nowrap shadow-lg z-20">
                          {skill.level} Proficiency
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Key Focus
                  </span>
                  <span>Hover for proficiency</span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-12 text-center text-slate-400">
            No technical skills found matching &quot;{searchQuery}&quot;. Try a different term.
          </div>
        )}
      </div>
    </section>
  );
}
