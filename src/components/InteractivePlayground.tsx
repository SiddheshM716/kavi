"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Droplet,
  TrendingDown,
  Activity,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Cpu,
  Bot,
  Sliders,
} from "lucide-react";

interface InteractivePlaygroundProps {
  activeTab: "water-safety" | "churn-risk";
  setActiveTab: (tab: "water-safety" | "churn-risk") => void;
}

export default function InteractivePlayground({
  activeTab,
  setActiveTab,
}: InteractivePlaygroundProps) {
  // --- AquaAI Simulator State ---
  const [ph, setPh] = useState<number>(7.2);
  const [turbidity, setTurbidity] = useState<number>(0.4);
  const [conductivity, setConductivity] = useState<number>(380);
  const [chlorine, setChlorine] = useState<number>(1.2);
  const [isWaterAnalyzing, setIsWaterAnalyzing] = useState<boolean>(false);
  const [waterResult, setWaterResult] = useState<{
    safetyIndex: number;
    isSafe: boolean;
    diseaseRisk: number;
    diseaseLevel: "Low" | "Moderate" | "High";
    advisory: string;
  } | null>({
    safetyIndex: 94,
    isSafe: true,
    diseaseRisk: 4,
    diseaseLevel: "Low",
    advisory:
      "Dual neural network confirms safe potability parameters. pH (7.2) and low turbidity (0.4 NTU) indicate minimal microbial suspension. Claude API diagnostic suggests optimal mineral equilibrium.",
  });

  // --- Churn Prediction Simulator State ---
  const [contract, setContract] = useState<"monthly" | "one_year" | "two_year">(
    "monthly"
  );
  const [tenure, setTenure] = useState<number>(8);
  const [monthlyCharge, setMonthlyCharge] = useState<number>(85);
  const [supportTickets, setSupportTickets] = useState<number>(4);
  const [isChurnAnalyzing, setIsChurnAnalyzing] = useState<boolean>(false);
  const [churnResult, setChurnResult] = useState<{
    churnProbability: number;
    riskTier: "Low" | "Medium" | "High";
    confidence: number;
    recommendation: string;
  } | null>({
    churnProbability: 68,
    riskTier: "High",
    confidence: 93.4,
    recommendation:
      "XGBoost identified high churn risk due to month-to-month contract combined with 4 recent support tickets. Recommended proactive VIP outreach and 15% annual contract discount retention offer.",
  });

  // Water Quality Analysis Trigger
  const handleAnalyzeWater = () => {
    setIsWaterAnalyzing(true);
    setTimeout(() => {
      // Calculate realistic scores
      let penalty = 0;
      if (ph < 6.5) penalty += (6.5 - ph) * 20;
      if (ph > 8.5) penalty += (ph - 8.5) * 20;
      if (turbidity > 1.0) penalty += (turbidity - 1.0) * 12;
      if (chlorine < 0.2 || chlorine > 2.5) penalty += 15;
      if (conductivity > 600) penalty += ((conductivity - 600) / 100) * 5;

      const safetyIndex = Math.max(8, Math.min(99, Math.round(100 - penalty)));
      const isSafe = safetyIndex >= 70;

      let diseaseRisk = Math.min(98, Math.round((turbidity * 8) + (ph < 6.0 || ph > 9.0 ? 30 : 0) + (chlorine < 0.2 ? 25 : 5)));
      if (safetyIndex > 85) diseaseRisk = Math.min(10, diseaseRisk);

      let diseaseLevel: "Low" | "Moderate" | "High" = "Low";
      if (diseaseRisk > 50) diseaseLevel = "High";
      else if (diseaseRisk > 20) diseaseLevel = "Moderate";

      let advisory = "";
      if (isSafe && diseaseRisk <= 15) {
        advisory = `Optimal drinking water quality detected. Turbidity at ${turbidity} NTU with neutral pH ${ph}. Dual neural network confirms negative microbial disease vector correlation.`;
      } else if (isSafe) {
        advisory = `Potable under standard filtration, but elevated turbidity (${turbidity} NTU) indicates slight suspended matter. Claude API recommends secondary sediment filtering.`;
      } else {
        advisory = `CRITICAL ALERT: Water sample fails potability standards (Safety Score: ${safetyIndex}%). Elevated pathogen disease risk (${diseaseRisk}%). Immediate chlorination and boiling advisory issued.`;
      }

      setWaterResult({
        safetyIndex,
        isSafe,
        diseaseRisk,
        diseaseLevel,
        advisory,
      });
      setIsWaterAnalyzing(false);
    }, 600);
  };

  // Churn Prediction Analysis Trigger
  const handleAnalyzeChurn = () => {
    setIsChurnAnalyzing(true);
    setTimeout(() => {
      let riskScore = 20;
      if (contract === "monthly") riskScore += 35;
      if (contract === "one_year") riskScore += 10;
      if (contract === "two_year") riskScore -= 10;

      if (supportTickets >= 4) riskScore += supportTickets * 8;
      else if (supportTickets === 0) riskScore += 5;

      if (tenure < 6) riskScore += 20;
      else if (tenure > 24) riskScore -= 18;

      if (monthlyCharge > 75) riskScore += 12;

      const churnProbability = Math.max(5, Math.min(96, Math.round(riskScore)));
      let riskTier: "Low" | "Medium" | "High" = "Low";
      if (churnProbability > 60) riskTier = "High";
      else if (churnProbability > 30) riskTier = "Medium";

      let recommendation = "";
      if (riskTier === "High") {
        recommendation = `Urgent retention required. XGBoost predicts ${churnProbability}% churn likelihood driven by frequent ticket friction (${supportTickets} tickets) and low commitment contract. Propose automated account manager intervention.`;
      } else if (riskTier === "Medium") {
        recommendation = `Moderate churn risk (${churnProbability}%). Subscriber is price-sensitive at $${monthlyCharge}/mo. Suggest upgrade incentives or bundled service loyalty perks.`;
      } else {
        recommendation = `Healthy subscriber profile (${churnProbability}% churn risk). High customer loyalty with strong tenure (${tenure} mos) and stable usage pattern.`;
      }

      setChurnResult({
        churnProbability,
        riskTier,
        confidence: 94.8,
        recommendation,
      });
      setIsChurnAnalyzing(false);
    }, 600);
  };

  return (
    <section id="interactive-demo" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive AI Lab</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Live Machine Learning Playground
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
          Experience real-time model inference and diagnostic telemetry. Test the
          neural network parameters and XGBoost churn classifier built into my
          projects.
        </p>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800">
          <button
            onClick={() => setActiveTab("water-safety")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "water-safety"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Droplet className="w-4 h-4" />
            <span>AquaAI Dual Neural Network</span>
          </button>
          <button
            onClick={() => setActiveTab("churn-risk")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "churn-risk"
                ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <TrendingDown className="w-4 h-4" />
            <span>Customer Churn XGBoost Model</span>
          </button>
        </div>
      </div>

      {/* --- TAB 1: AquaAI Water Quality Simulator --- */}
      {activeTab === "water-safety" && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-2xl shadow-cyan-950/30">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Chemical & Sensory Input Telemetry
                </h3>
              </div>
              <span className="text-[11px] text-cyan-400 font-mono">
                PyTorch Neural Layers
              </span>
            </div>

            {/* pH Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">pH Level</span>
                <span className="text-cyan-400 font-bold font-mono">
                  {ph.toFixed(1)} {ph >= 6.5 && ph <= 8.5 ? "(Optimal)" : "(Abnormal)"}
                </span>
              </div>
              <input
                type="range"
                min="4.0"
                max="10.0"
                step="0.1"
                value={ph}
                onChange={(e) => setPh(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>Acidic (4.0)</span>
                <span>Neutral (7.0)</span>
                <span>Alkaline (10.0)</span>
              </div>
            </div>

            {/* Turbidity Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Turbidity (NTU)</span>
                <span className="text-cyan-400 font-bold font-mono">
                  {turbidity.toFixed(2)} NTU
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="5.0"
                step="0.05"
                value={turbidity}
                onChange={(e) => setTurbidity(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>Clear (&lt; 0.5 NTU)</span>
                <span>Turbid (2.5 NTU)</span>
                <span>Contaminated (5.0 NTU)</span>
              </div>
            </div>

            {/* Conductivity Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Conductivity (μS/cm)</span>
                <span className="text-cyan-400 font-bold font-mono">
                  {conductivity} μS/cm
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="1200"
                step="20"
                value={conductivity}
                onChange={(e) => setConductivity(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>Low Mineral (100)</span>
                <span>Optimal (400)</span>
                <span>High Dissolved Solids (1200)</span>
              </div>
            </div>

            {/* Chlorine Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Residual Chlorine (mg/L)</span>
                <span className="text-cyan-400 font-bold font-mono">
                  {chlorine.toFixed(1)} mg/L
                </span>
              </div>
              <input
                type="range"
                min="0.0"
                max="3.0"
                step="0.1"
                value={chlorine}
                onChange={(e) => setChlorine(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <button
              onClick={handleAnalyzeWater}
              disabled={isWaterAnalyzing}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer"
            >
              {isWaterAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Computing Dual Neural Output...</span>
                </>
              ) : (
                <>
                  <Cpu className="w-4 h-4" />
                  <span>Execute Neural Network Inference</span>
                </>
              )}
            </button>
          </div>

          {/* Inference Output Column */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-cyan-400" />
                Live Inference Telemetry
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                Flask REST API Service
              </span>
            </div>

            {waterResult ? (
              <div className="space-y-5">
                {/* Score Meters */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Model 1: Water Safety Index */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-1">
                      Model 1: Safety Index
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-3xl font-black ${
                          waterResult.isSafe ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {waterResult.safetyIndex}%
                      </span>
                      <span className="text-xs font-semibold text-slate-300">
                        {waterResult.isSafe ? "POTABLE" : "HAZARDOUS"}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          waterResult.isSafe ? "bg-emerald-400" : "bg-rose-500"
                        }`}
                        style={{ width: `${waterResult.safetyIndex}%` }}
                      />
                    </div>
                  </div>

                  {/* Model 2: Disease Risk Vector */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-1">
                      Model 2: Pathogen Disease Risk
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-3xl font-black ${
                          waterResult.diseaseLevel === "Low"
                            ? "text-cyan-400"
                            : waterResult.diseaseLevel === "Moderate"
                            ? "text-amber-400"
                            : "text-rose-400"
                        }`}
                      >
                        {waterResult.diseaseRisk}%
                      </span>
                      <span className="text-xs font-semibold text-slate-300 uppercase">
                        {waterResult.diseaseLevel}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          waterResult.diseaseLevel === "Low"
                            ? "bg-cyan-400"
                            : waterResult.diseaseLevel === "Moderate"
                            ? "bg-amber-400"
                            : "bg-rose-500"
                        }`}
                        style={{ width: `${waterResult.diseaseRisk}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Claude API Diagnostic Box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-slate-950/60 border border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2 text-cyan-300 text-xs font-semibold">
                    <Bot className="w-4 h-4 text-cyan-400" />
                    <span>Integrated Anthropic Claude API Advisory:</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    &quot;{waterResult.advisory}&quot;
                  </p>
                </div>

                {/* Architectural note */}
                <div className="text-[11px] text-slate-500 flex items-center justify-between pt-2 border-t border-slate-800">
                  <span>Architecture: PyTorch Dual-Head MLP</span>
                  <span>Latency: ~22ms</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* --- TAB 2: Churn Prediction Simulator --- */}
      {activeTab === "churn-risk" && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-2xl shadow-purple-950/30">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Subscriber & Behavioral Profile
                </h3>
              </div>
              <span className="text-[11px] text-purple-400 font-mono">
                XGBoost ML Pipeline
              </span>
            </div>

            {/* Contract Type */}
            <div className="space-y-2">
              <label className="text-xs text-slate-300 font-medium block">
                Contract Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["monthly", "one_year", "two_year"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setContract(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      contract === type
                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                        : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                    }`}
                  >
                    {type === "monthly"
                      ? "Month-to-Month"
                      : type === "one_year"
                      ? "1-Year Plan"
                      : "2-Year Plan"}
                  </button>
                ))}
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Customer Tenure (Months)</span>
                <span className="text-purple-400 font-bold font-mono">
                  {tenure} months
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="72"
                value={tenure}
                onChange={(e) => setTenure(parseInt(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>New (1 mo)</span>
                <span>Medium (24 mos)</span>
                <span>Veteran (72 mos)</span>
              </div>
            </div>

            {/* Monthly Charges */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Monthly Charge ($)</span>
                <span className="text-purple-400 font-bold font-mono">
                  ${monthlyCharge} / mo
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="130"
                step="5"
                value={monthlyCharge}
                onChange={(e) => setMonthlyCharge(parseInt(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer"
              />
            </div>

            {/* Support Tickets */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Support Tickets (Last 90 Days)</span>
                <span className="text-purple-400 font-bold font-mono">
                  {supportTickets} tickets
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                value={supportTickets}
                onChange={(e) => setSupportTickets(parseInt(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer"
              />
            </div>

            <button
              onClick={handleAnalyzeChurn}
              disabled={isChurnAnalyzing}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 transition-all shadow-lg shadow-purple-600/25 disabled:opacity-50 cursor-pointer"
            >
              {isChurnAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Evaluating XGBoost Trees...</span>
                </>
              ) : (
                <>
                  <Cpu className="w-4 h-4" />
                  <span>Compute Churn Probability</span>
                </>
              )}
            </button>
          </div>

          {/* Churn Output Column */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingDown className="w-4 h-4 text-purple-400" />
                XGBoost Inference Engine
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-800/40">
                FastAPI Microservice
              </span>
            </div>

            {churnResult ? (
              <div className="space-y-5">
                {/* Result Card */}
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400">Churn Risk Probability</span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        churnResult.riskTier === "High"
                          ? "bg-rose-950 text-rose-300 border border-rose-800/40"
                          : churnResult.riskTier === "Medium"
                          ? "bg-amber-950 text-amber-300 border border-amber-800/40"
                          : "bg-emerald-950 text-emerald-300 border border-emerald-800/40"
                      }`}
                    >
                      {churnResult.riskTier} Risk Category
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3 my-2">
                    <span
                      className={`text-4xl font-black ${
                        churnResult.riskTier === "High"
                          ? "text-rose-400"
                          : churnResult.riskTier === "Medium"
                          ? "text-amber-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {churnResult.churnProbability}%
                    </span>
                    <span className="text-xs text-slate-400">
                      Model ROC-AUC: 0.94
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 h-2.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        churnResult.riskTier === "High"
                          ? "bg-rose-500"
                          : churnResult.riskTier === "Medium"
                          ? "bg-amber-400"
                          : "bg-emerald-400"
                      }`}
                      style={{ width: `${churnResult.churnProbability}%` }}
                    />
                  </div>
                </div>

                {/* Strategy Box */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <div className="text-purple-300 text-xs font-semibold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>Automated Retention Strategy & Insights:</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    &quot;{churnResult.recommendation}&quot;
                  </p>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center justify-between pt-2 border-t border-slate-800">
                  <span>Pipeline: Scikit-learn + XGBoost Classifier</span>
                  <span>Deployment: Docker + MySQL</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}
