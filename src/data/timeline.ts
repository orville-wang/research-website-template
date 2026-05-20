export interface TimelineItem {
  date: string;
  title: string;
  organization: string;
  type: "education" | "experience";
  logoUrl?: string;
}

export const timelineData: TimelineItem[] = [
  {
    date: "2026.01 — Present",
    title: "Ph.D. Student",
    organization: "Hong Kong University of Science and Technology",
    type: "education",
    logoUrl: "/logos/HKUST.png",
  },
  {
    date: "2025.06 — Present",
    title: "Research Assistant",
    organization: "Shanghai Jiao Tong University",
    type: "experience",
    logoUrl: "/logos/sjtu.png",
  },
  {
    date: "2024.09 — 2025.09",
    title: "Graduate Researcher, Vehicle Engineering",
    organization: "Tongji University",
    type: "education",
    logoUrl: "/logos/tongji.png",
  },
  {
    date: "2024.02 — 2024.08",
    title: "Algorithm Research Intern",
    organization: "SenseTime Research",
    type: "experience",
    logoUrl: "/logos/sensetime.png",
  },
  {
    date: "2024.01 — 2024.02",
    title: "Short-term Intern",
    organization: "SAIC Volkswagen",
    type: "experience",
    logoUrl: "/logos/volkswagen.png",
  },
  {
    date: "2019.09 — 2024.07",
    title: "B.Eng. in Vehicle Engineering",
    organization: "Tongji University",
    type: "education",
    logoUrl: "/logos/tongji.png",
  },
];
