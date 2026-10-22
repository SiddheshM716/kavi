export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "ai-ml" | "web-dev";
  categoryLabel: string;
  period: string;
  image: string;
  description: string;
  highlights: string[];
  technologies: string[];
  demoType?: "water-safety" | "churn-risk";
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Familiar";
    highlight?: boolean;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  description: string;
  skillsGained: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kaviarasu Subramani",
    role: "Machine Learning & Full-Stack Developer",
    location: "Chennai, India",
    email: "kaviarasus1081@gmail.com",
    phone: "7603816485",
    formattedPhone: "+91 76038 16485",
    github: "https://github.com/KAVIARASU08",
    linkedin: "https://www.linkedin.com/in/kaviarasu-subramani-49766332b/",
    resumeUrl: "/resume.pdf",
    bio: "Final-year Computer Science and Engineering student at SRM Institute of Science and Technology with hands-on experience developing end-to-end machine learning pipelines, deep learning predictive models, and high-performance full-stack web applications using Python, React, Next.js, FastAPI, and Flask.",
    objective: "Passionate about bridging machine learning intelligence with modern, responsive digital products that solve high-impact real-world problems.",
  },
  stats: [
    { label: "Core Projects", value: "3+", detail: "AI, ML Pipelines & Full-Stack" },
    { label: "Technical Skills", value: "18+", detail: "Languages, Frameworks & Tools" },
    { label: "B.Tech CSE", value: "2023–27", detail: "SRM Institute of Science & Tech" },
    { label: "Academic CGPA", value: "7.06", detail: "Computer Science Engineering" },
  ],
  education: {
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 – 2027",
    cgpa: "7.06 / 10",
    location: "Chennai, India",
    status: "Final-Year Undergraduate",
    courses: [
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  skillCategories: [
    {
      name: "Machine Learning & Data Science",
      icon: "Cpu",
      skills: [
        { name: "PyTorch", level: "Proficient", highlight: true },
        { name: "XGBoost", level: "Proficient", highlight: true },
        { name: "Scikit-Learn", level: "Advanced", highlight: true },
        { name: "Deep Learning", level: "Proficient", highlight: true },
        { name: "Predictive Modeling", level: "Advanced", highlight: true },
        { name: "Feature Engineering", level: "Advanced" },
        { name: "Model Training & Evaluation", level: "Advanced" },
        { name: "NumPy", level: "Advanced" },
        { name: "Pandas", level: "Advanced" },
        { name: "Anthropic Claude API", level: "Proficient", highlight: true },
      ],
    },
    {
      name: "Web Technologies & Frameworks",
      icon: "Globe",
      skills: [
        { name: "React.js", level: "Advanced", highlight: true },
        { name: "Next.js", level: "Proficient", highlight: true },
        { name: "FastAPI", level: "Advanced", highlight: true },
        { name: "Flask", level: "Advanced", highlight: true },
        { name: "Tailwind CSS", level: "Advanced", highlight: true },
        { name: "HTML5 / CSS3", level: "Advanced" },
        { name: "Vite", level: "Proficient" },
        { name: "React Router & Context API", level: "Advanced" },
      ],
    },
    {
      name: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Python", level: "Advanced", highlight: true },
        { name: "JavaScript", level: "Advanced", highlight: true },
        { name: "TypeScript", level: "Proficient", highlight: true },
        { name: "C++", level: "Proficient" },
        { name: "C", level: "Proficient" },
        { name: "SQL", level: "Advanced" },
      ],
    },
    {
      name: "Tools, Database & DevOps",
      icon: "Terminal",
      skills: [
        { name: "Docker", level: "Proficient", highlight: true },
        { name: "Git & GitHub", level: "Advanced", highlight: true },
        { name: "MySQL", level: "Advanced" },
        { name: "SQLite & Flask-SQLAlchemy", level: "Advanced" },
        { name: "Streamlit", level: "Proficient" },
        { name: "npm / node tooling", level: "Proficient" },
      ],
    },
    {
      name: "Domain Knowledge",
      icon: "BookOpen",
      skills: [
        { name: "Data Structures & Algorithms", level: "Proficient" },
        { name: "DBMS & Relational Design", level: "Advanced" },
        { name: "OOP Principles", level: "Advanced" },
        { name: "Operating Systems", level: "Proficient" },
        { name: "Computer Networks", level: "Proficient" },
        { name: "RESTful API Architecture", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "aqua-ai",
      title: "AquaAI – Water Quality Analysis System",
      subtitle: "Dual neural networks for real-time water safety classification & waterborne disease prediction",
      category: "ai-ml",
      categoryLabel: "Artificial Intelligence & Machine Learning",
      period: "Mar 2025 – Present",
      image: "/projects/aqua-ai.jpg",
      description:
        "Developed a comprehensive water quality analysis platform utilizing deep learning architectures to assess water potability and predict potential waterborne disease risks from chemical and sensory sensor inputs.",
      highlights: [
        "Architected dual deep neural network models: one for potable water safety classification and another specialized for epidemiological disease risk prediction.",
        "Engineered robust RESTful microservices in Flask with Flask-SQLAlchemy and SQLite persistence for real-time metric ingestion.",
        "Integrated the Anthropic Claude API to provide contextual diagnostic explanations, safety recommendations, and remediation advisories based on water sensor trends.",
        "Implemented data transformation pipelines with Pandas, NumPy, and Scikit-Learn for anomaly detection and feature scaling.",
      ],
      technologies: [
        "PyTorch",
        "Deep Learning",
        "Flask",
        "SQLite",
        "Flask-SQLAlchemy",
        "Anthropic Claude API",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "JavaScript",
      ],
      demoType: "water-safety",
      githubUrl: "https://github.com/KAVIARASU08/Aqua-AI---Water-Quality-Analysis-System",
      liveUrl: "#projects",
    },
    {
      id: "churn-prediction",
      title: "Customer Churn Prediction Platform",
      subtitle: "End-to-end XGBoost machine learning pipeline with FastAPI services & interactive Streamlit dashboards",
      category: "ai-ml",
      categoryLabel: "Machine Learning & Data Analytics",
      period: "Jan 2026 – Present",
      image: "/projects/churn-prediction.jpg",
      description:
        "Engineered a production-ready customer churn prediction platform using gradient boosting to proactively identify high-risk customer segments and recommend retention strategies.",
      highlights: [
        "Designed an end-to-end ML pipeline encompassing automated data cleansing, categorical encoding, feature scaling, and synthetic minority oversampling.",
        "Trained and fine-tuned an XGBoost classification model achieving high ROC-AUC and precision in identifying at-risk subscribers.",
        "Built asynchronous REST API inference microservices with FastAPI for millisecond latency response times.",
        "Containerized the entire stack with Docker, featuring interactive Streamlit executive dashboards connected to a transactional MySQL database.",
      ],
      technologies: [
        "Python",
        "XGBoost",
        "FastAPI",
        "Docker",
        "Streamlit",
        "MySQL",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
      ],
      githubUrl: "https://github.com/KAVIARASU08/Customer-Churn-Prediction",
      liveUrl: "#projects",
    },
    {
      id: "smart-city",
      title: "Smart City Engagement Platform",
      subtitle: "Modern citizen grievance redressal & civic complaint tracking portal with real-time administration",
      category: "web-dev",
      categoryLabel: "Web Development & Civic Tech",
      period: "Jan 2026 – Present",
      image: "/projects/smart-city.jpg",
      description:
        "Built a responsive Smart City civic engagement portal enabling residents to register, categorize, and track municipal complaints while providing municipal administrators with status management tools.",
      highlights: [
        "Constructed a high-performance single-page application using React, TypeScript, and Vite with rapid hot-reloading and modular architecture.",
        "Engineered robust client-side routing and global application state management leveraging React Router and React Context API.",
        "Crafted a dedicated administrative portal with status progression workflows (Submitted → In-Progress → Resolved) and filtering.",
        "Designed a sleek, mobile-first responsive interface with Tailwind CSS ensuring accessibility and smooth user experience across devices.",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "Context API",
        "npm",
        "REST APIs",
      ],
      githubUrl: "https://github.com/KAVIARASU08/Smart-City-Engagement-Platflorm",
      liveUrl: "#projects",
    },
  ] as Project[],
  certifications: [
    {
      title: "DBMS Course – Master the Fundamentals and Advanced Concepts",
      issuer: "Scaler",
      date: "May 2025",
      credentialUrl: "https://drive.google.com/file/d/1jh-86VjS8kTDYvlelvhkd2_qxZU64LE1/view",
      description:
        "In-depth mastery of Relational Database Management Systems, SQL querying, indexing, normalization (1NF to BCNF), transaction concurrency (ACID), and query execution optimization.",
      skillsGained: ["Relational Database Design", "Advanced SQL", "Indexing & Optimization", "ACID Transactions", "Concurrency Control"],
    },
    {
      title: "Complete Beginner to Advanced C++",
      issuer: "Udemy",
      date: "Apr 2024",
      credentialUrl: "https://drive.google.com/file/d/1bsgWxUj_2foEOIaiI8dzFhR591NxRrC3/view",
      description:
        "Comprehensive coverage of modern C++, Object-Oriented Programming, memory management, pointers, dynamic memory allocation, STL containers, templates, and algorithmic problem solving.",
      skillsGained: ["Modern C++ (C++17/20)", "Object-Oriented Design", "Standard Template Library (STL)", "Pointers & Memory Management"],
    },
    {
      title: "C Programming For Beginners – Master the C Language",
      issuer: "Udemy",
      date: "Nov 2023",
      credentialUrl: "https://drive.google.com/file/d/13x8Qa5KNJs6camHqKIVP_ljKtZwDX3hY/view",
      description:
        "Foundational mastery of systems programming, low-level memory layout, pointer arithmetic, struct modeling, and structured problem-solving in standard C.",
      skillsGained: ["Procedural Programming", "Pointers & Arrays", "Dynamic Memory (malloc/free)", "Structs & File I/O"],
    },
  ] as Certification[],
};
