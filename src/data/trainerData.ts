import { Award, Users, BookOpen, LucideIcon } from "lucide-react";
import trainerimg from "../assets/pravinSir.png";

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

export const trainerData: TrainerData = {
  name: "Pravin Nagare",
  title: "Senior Cybersecurity Expert & Lead Instructor",
  description:
    "Pravin Nagare is a Cybersecurity Trainer with 10+ years of experience, specializing in Ethical Hacking, SOC, Forensics, and Penetration Testing. He has trained 15,000+ students with a practical, career-focused approach to learning.",
  experience: "10+ Years Exp",
  image: trainerimg,

  achievements: [
    { icon: Users, label: "15,000+ Students Mentored" },
    { icon: BookOpen, label: "Real Industry Projects" },
    { icon: Award, label: "Top Rated Instructor" },
  ],
};
