"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  ArrowDown,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ExternalLink,
  Code2,
  BrainCircuit,
  Layers,
  GraduationCap,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden tech-grid-bg">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-indigo-600/15 to-purple-500/20 rounded-full blur-[120px] pointer-events-none aura-pulse" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Name Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          Hi, I&apos;m{" "}
          <span className="text-gradient-cyan">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </h1>

        {/* Role Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 max-w-3xl mb-6">
          Architecting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Intelligent Machine Learning
          </span>{" "}
          &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            High-Performance Web Apps
          </span>
        </p>

        {/* Bio summary */}
        <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed">
          {PORTFOLIO_DATA.personal.bio}
        </p>

        {/* Contact and Info Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 max-w-3xl">
          {/* Email button with copy */}
          <div className="flex items-center rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-sm overflow-hidden">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center gap-2 px-3 py-2 hover:text-cyan-400 transition-colors"
              title="Click to email"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PORTFOLIO_DATA.personal.email}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-2 border-l border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Phone button with copy */}
          <div className="flex items-center rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-sm overflow-hidden">
            <a
              href={`tel:${PORTFOLIO_DATA.personal.phone}`}
              className="flex items-center gap-2 px-3 py-2 hover:text-cyan-400 transition-colors"
              title="Click to call"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PORTFOLIO_DATA.personal.formattedPhone}</span>
            </a>
            <button
              onClick={handleCopyPhone}
              className="px-2.5 py-2 border-l border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Copy phone to clipboard"
            >
              {copiedPhone ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>{PORTFOLIO_DATA.personal.location}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1.5">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Main Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 cursor-pointer"
          >
            <BrainCircuit className="w-4 h-4 text-slate-950" />
            <span>Explore Projects</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all shadow-md shadow-black/40 hover:-translate-y-0.5 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>View Resume (PDF)</span>
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full max-w-4xl text-left">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                {idx === 0 && <BrainCircuit className="w-5 h-5 text-cyan-400 opacity-80" />}
                {idx === 1 && <Code2 className="w-5 h-5 text-indigo-400 opacity-80" />}
                {idx === 2 && <GraduationCap className="w-5 h-5 text-teal-400 opacity-80" />}
                {idx === 3 && <Layers className="w-5 h-5 text-amber-400 opacity-80" />}
              </div>
              <div className="text-xs font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 line-clamp-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll down indicator */}
        <a
          href="#about"
          className="mt-14 inline-flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors"
          aria-label="Scroll down to About section"
        >
          <span className="text-[11px] font-medium tracking-wider uppercase">
            Scroll to explore
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
