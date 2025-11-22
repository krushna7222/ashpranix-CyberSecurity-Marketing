import { Award, Users, BookOpen, LucideIcon } from "lucide-react";
import trainer1 from "/trainer/pravinSir.png";
import trainer2 from "/trainer/niteshSir.jpg";
import trainer3 from "/trainer/seddeshSir.jpg";

export interface TrainerAchievement {
  icon: LucideIcon;
  label: string;
}

export interface TrainerData {
  name: string;
  title: string;
  description: string;
  experience: string;
  image: string;
  achievements: TrainerAchievement[];
}

export const trainerData: TrainerData[] = [
  {
  name: "Pravin Nagare",
  title: "Senior Cybersecurity Expert & Lead Instructor",
  description:
    "Pravin Nagare is a Cybersecurity Trainer with 10+ years of experience, specializing in Ethical Hacking, SOC, Forensics, and Penetration Testing. He has trained 25,000+ students with a practical, career-focused approach to learning.",
  experience: "12+ Years Exp",
  image: trainer1,

  achievements: [
    { icon: Users, label: "25,000+ Students Mentored" },
    { icon: BookOpen, label: "Real Industry Projects" },
    { icon: Award, label: "Top Rated Instructor" },
  ],
},
{
    name: "Nitesh Gupta",
    title: "OSCP-certified and an active Bug Bounty Hunter.",
    description:
      "Reported critical vulnerabilities to Google, Microsoft, Lenskart, and several other global platforms.",
    experience: "5+ Years Exp",
    image: trainer2,
    achievements: [
      { icon: Users, label: "8,000+ Students Mentored" },
      { icon: BookOpen, label: "SOC & Red Team Projects" },
      { icon: Award, label: "Certified Ethical Hacker" },
    ],
  },

  {
    name: " Sidhesh Sonje",
    title: "OSCP-certified professional and seasoned Bug Bounty Hunter.",
    description:
      "Manager – Application Security at Jio, with strong expertise in offensive security. Reported impactful security bugs on OYO, Facebook, Instagram, and multiple major companies.",
    experience: "5+ Years Exp",
    image: trainer3,
    achievements: [
      { icon: Users, label: "7,500+ Students Mentored" },
      { icon: BookOpen, label: "AI/ML Real Projects" },
      { icon: Award, label: "Top AI Instructor" },
    ],
  },
];