// export interface Course {
//   id: string;
//   name: string;
//   category: string;
//   duration: string;
//   description: string;
//   details: string[];
//   isComplimentary?: boolean;
// }

// export const courses: Course[] = [

// // // -------------------- CYBERSECURITY MODULES --------------------

// {
//   id: "cybersecurity-fundamentals",
//   name: "Cybersecurity Fundamentals",
//   category: "Cybersecurity",
//   duration: "4 Weeks",
//   description:
//     "Learn networking, OS, threat modeling, and core concepts required for advanced cybersecurity training.",
//   details: [
//     "Networking Basics: OSI, TCP/IP, Subnetting",
//     "Linux Commands & File System",
//     "Windows Internals & PowerShell",
//     "Security Concepts: CIA Triad, Threats, Vulnerabilities",
//     "Introduction to Firewalls, IDS, IPS",
//     "Cryptography Fundamentals: Hashing, Encryption",
//     "OWASP Top 10 Overview",
//     "Vulnerability Scanning Basics",
//     "Virtual Lab Setup using VMware/Kali",
//     "Packet Analysis using Wireshark",
//     "Web Security Fundamentals",
//     "Authentication & Authorization",
//     "Mini Security Assessment Task"
//   ]
// },

// {
//   id: "penetration-testing-advanced",
//   name: "Advanced Penetration Testing",
//   category: "Cybersecurity",
//   duration: "4 Weeks",
//   description:
//     "Perform advanced ethical hacking, exploit development, web/API pentesting, privilege escalation, and red team techniques.",
//   details: [
//     "Information Gathering & Recon",
//     "Web App Pentesting: XSS, SQLi, CSRF, SSRF",
//     "API Security Testing",
//     "BurpSuite Advanced Usage",
//     "Network Pentesting: Nmap, Hydra, Gobuster",
//     "Windows & Linux Privilege Escalation",
//     "Active Directory Attacks",
//     "Metasploit Framework Deep Dive",
//     "Buffer Overflow Basics",
//     "Exploitation & Post Exploitation",
//     "Password Attacks & Cracking",
//     "Wireless Security Attacks",
//     "Capture The Flag (CTF) Projects"
//   ]
// },

// {
//   id: "soc-cloud-redteam",
//   name: "SOC, Cloud Security & Red Teaming",
//   category: "Cybersecurity",
//   duration: "5 Weeks",
//   description:
//     "Advanced SOC operations, cloud security, incident response, SIEM, and professional red/blue team methodologies.",
//   details: [
//     "SIEM Tools: Splunk, QRadar, Sentinel",
//     "Log Analysis & Threat Hunting",
//     "Incident Response Lifecycle",
//     "MITRE ATT&CK Framework",
//     "Endpoint Security (EDR, Sysmon)",
//     "Blue Team Defense Techniques",
//     "Cloud Security: AWS, Azure, GCP",
//     "IAM, CloudTrail, Security Groups",
//     "Container Security: Docker & Kubernetes",
//     "Red Team Operations: Phishing, Lateral Movement",
//     "Malware Analysis Basics",
//     "Vulnerability Management: Nessus, OpenVAS",
//     "Capstone Project: SOC Simulation"
//   ]
// },

// ];


export interface Course {
  id: string;
  name: string;
  category: string;
  duration: string;
  description: string;
  details: string[];
  isComplimentary?: boolean;
}

export const courses: Course[] = [

  // -------------------- CYBERSECURITY MODULES --------------------

  {
    id: "cybersecurity-fundamentals",
    name: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    duration: "4 Weeks",
    description:
      "Learn networking, OS, threat modeling, and core concepts required for advanced cybersecurity training.",
    details: [
      "Networking Basics: OSI, TCP/IP, Subnetting",
      "Linux Commands & File System",
      "Windows Internals & PowerShell",
      "Security Concepts: CIA Triad, Threats, Vulnerabilities",
      "Introduction to Firewalls, IDS, IPS",
      "Cryptography Fundamentals: Hashing, Encryption",
      "OWASP Top 10 Overview",
      "Vulnerability Scanning Basics",
      "Virtual Lab Setup using VMware/Kali",
      "Packet Analysis using Wireshark",
      "Web Security Fundamentals",
      "Authentication & Authorization",
      "Mini Security Assessment Task"
    ]
  },

  {
    id: "penetration-testing-advanced",
    name: "Advanced Penetration Testing",
    category: "Cybersecurity",
    duration: "4 Weeks",
    description:
      "Perform advanced ethical hacking, exploit development, web/API pentesting, privilege escalation, and red team techniques.",
    details: [
      "Information Gathering & Recon",
      "Web App Pentesting: XSS, SQLi, CSRF, SSRF",
      "API Security Testing",
      "BurpSuite Advanced Usage",
      "Network Pentesting: Nmap, Hydra, Gobuster",
      "Windows & Linux Privilege Escalation",
      "Active Directory Attacks",
      "Metasploit Framework Deep Dive",
      "Buffer Overflow Basics",
      "Exploitation & Post Exploitation",
      "Password Attacks & Cracking",
      "Wireless Security Attacks",
      "Capture The Flag (CTF) Projects"
    ]
  },

  {
    id: "soc-cloud-redteam",
    name: "SOC, Cloud Security & Red Teaming",
    category: "Cybersecurity",
    duration: "5 Weeks",
    description:
      "Advanced SOC operations, cloud security, incident response, SIEM, and professional red/blue team methodologies.",
    details: [
      "SIEM Tools: Splunk, QRadar, Sentinel",
      "Log Analysis & Threat Hunting",
      "Incident Response Lifecycle",
      "MITRE ATT&CK Framework",
      "Endpoint Security (EDR, Sysmon)",
      "Blue Team Defense Techniques",
      "Cloud Security: AWS, Azure, GCP",
      "IAM, CloudTrail, Security Groups",
      "Container Security: Docker & Kubernetes",
      "Red Team Operations: Phishing, Lateral Movement",
      "Malware Analysis Basics",
      "Vulnerability Management: Nessus, OpenVAS",
      "Capstone Project: SOC Simulation"
    ]
  },

  // -------------------- NEW MODULE 1 --------------------

  {
    id: "network-security-expert",
    name: "Network Security & Infrastructure Protection",
    category: "Cybersecurity",
    duration: "3 Weeks",
    description:
      "Master securing enterprise networks including routers, firewalls, VPN, IDS/IPS, and zero-trust strategies.",
    details: [
      "Network Security Architecture",
      "Firewall Configuration (pfSense, Cisco ASA)",
      "Virtual Private Networks (IPSec, SSL VPN)",
      "IDS/IPS Monitoring",
      "Secure Network Design (DMZ, NAC)",
      "Packet Sniffing & Traffic Analysis",
      "Secure WiFi Architecture & Attacks",
      "Zero Trust Network Access (ZTNA)",
      "DDoS Attack Defense Techniques",
      "Hands-on: Secure Network Lab Setup"
    ]
  },

  // -------------------- NEW MODULE 2 --------------------

  {
    id: "malware-forensics-digital",
    name: "Malware Analysis & Digital Forensics",
    category: "Cybersecurity",
    duration: "4 Weeks",
    description:
      "Analyze malware, perform forensic investigations, recover evidence, and understand attacker TTPs.",
    details: [
      "Types of Malware (Ransomware, Trojans, Rootkits)",
      "Static Malware Analysis",
      "Dynamic Malware Analysis (Sandboxing)",
      "Memory Forensics using Volatility",
      "Disk Forensics: FTK Imager, Autopsy",
      "Log Forensics & Evidence Collection",
      "Timeline Creation & File Carving",
      "Windows Registry Forensics",
      "Incident Documentation Standards",
      "Hands-on: Real Malware Case Studies"
    ]
  },

  // -------------------- NEW MODULE 3 --------------------

  {
    id: "cloud-compliance-governance",
    name: "Cybersecurity Governance, Compliance & Risk Management",
    category: "Cybersecurity",
    duration: "3 Weeks",
    description:
      "Understand auditing, security frameworks, compliance standards, cyber laws, and enterprise risk management.",
    details: [
      "Cybersecurity Policies & Governance",
      "Risk Assessment & Risk Mitigation",
      "Compliance Standards: ISO 27001, SOC 2, HIPAA",
      "GDPR, PCI DSS Guidelines",
      "Auditing Techniques & Gap Assessment",
      "Business Continuity & Disaster Recovery",
      "Secure SDLC & DevSecOps Basics",
      "Security Documentation & Reporting",
      "Legal & Ethical Aspects of Cybersecurity",
      "Final Audit Project"
    ]
  }

];
