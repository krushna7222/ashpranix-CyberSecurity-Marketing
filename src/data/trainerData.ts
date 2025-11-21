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
    "Pravin Nagare is a highly respected cybersecurity trainer and industry expert with over a decade of experience in Ethical Hacking, Cyber Forensics, SOC, and Penetration Testing. He has trained more than 15,000+ students, helping them build strong careers in top Indian and international companies.Pravin’s practical, real-world teaching style makes complex cybersecurity concepts easy to understand for beginners and working professionals alike. He has also conducted corporate workshops for professionals from leading enterprises, empowering teams to strengthen their organization’s security posture.His mission is to create India’s strongest generation of cybersecurity professionals through hands-on labs, real attack simulations, and career-oriented mentorship.",
  experience: "10+ Years Exp",
  image: trainerimg,

  achievements: [
    { icon: Users, label: "15,000+ Students Mentored" },
    { icon: BookOpen, label: "Real Industry Projects" },
    { icon: Award, label: "Top Rated Instructor" },
  ],
};
