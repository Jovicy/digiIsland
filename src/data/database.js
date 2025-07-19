// Card Data
import { img } from "framer-motion/client";
import {
  FaNetworkWired,
  FaLock,
  FaChartLine,
  FaExclamation,
  FaDesktop,
  FaLightbulb,
  FaCode,
  FaRobot,
  FaCube,
  FaShield,
  FaUserShield,
  FaGraduationCap,
} from "react-icons/fa6";

import PartnerImg1 from "../assets/cbn.webp";
import PartnerImg2 from "../assets/boi.png";
import PartnerImg3 from "../assets/boa-logo.png";
import PartnerImg4 from "../assets/ndic.png";
import PartnerImg5 from "../assets/nfiu.gif";
import PartnerImg6 from "../assets/nibbss.webp";

export const cardData = [
  {
    id: 1,
    icon: FaNetworkWired,
    title: "SUPTECH Platform",
    description:
      "Obtain real-time access to data analysis, automated reporting, and intelligent supervision tools for more effective oversight.",
    details: `
The SUPTECH Platform enables regulatory bodies to monitor and respond to financial activities in real-time. It provides:
- Advanced dashboards for oversight
- Automated compliance reporting
- AI-powered risk detection
- Seamless data integration from financial institutions

With our intelligent supervision tools, regulators gain improved visibility, proactive risk management, and operational efficiency across sectors.
    `,
  },
  {
    id: 2,
    icon: FaLock,
    title: "REGTECH Platform",
    description:
      "Streamline compliance, improve reporting accuracy and experience seamless integration with existing systems.",
    details: `
The REGTECH Platform simplifies regulatory compliance with:
- Automated rule-based reporting
- Real-time data validation
- Seamless integration with existing infrastructure
- Reduced human error and enhanced data accuracy

It’s designed to help institutions meet regulatory obligations efficiently and confidently.
    `,
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "AI Analytics & Reporting",
    description:
      "Leverage AI to detect trends, highlight anomalies, and deliver actionable insights for regulatory decision-making.",
    details: `
Our AI Analytics & Reporting tools provide:
- Predictive modeling to anticipate risks
- Pattern detection across large data sets
- Real-time anomaly alerts
- Custom dashboards for visual insights

These solutions transform raw data into actionable intelligence for policy and oversight decisions.
    `,
  },
  {
    id: 4,
    icon: FaExclamation,
    title: "Risk Monitoring",
    description:
      "Continuously assess, manage financial and operational risks with predictive analytics and real-time tracking.",
    details: `
Risk Monitoring includes:
- Dynamic risk scoring engines
- Early warning systems
- Integrated dashboards for real-time tracking
- AI-driven risk prediction models

This enables proactive supervision and timely intervention before issues escalate.
    `,
  },
  {
    id: 5,
    icon: FaDesktop,
    title: "Compliance Dashboard",
    description:
      "Track compliance status, generate reports automatically and visualize key regulatory metrics with a centralized interface.",
    details: `
Our Compliance Dashboard offers:
- A centralized control panel for all compliance metrics
- Auto-generated reporting to reduce manual workload
- Integration with multiple data sources
- Easy-to-understand visualization of regulatory KPIs

It empowers teams to manage and improve compliance processes with clarity and speed.
    `,
  },
  {
    id: 6,
    icon: FaLightbulb,
    title: "Regulatory Innovation & Advisory",
    description:
      "Strategic guidance for digitizing regulation, modernizing frameworks, and engaging stakeholders in co-creation.",
    details: `
This service offers:
- Framework modernization consulting
- Stakeholder engagement strategy
- Policy digitization and prototyping
- Cross-sector advisory for tech-enabled regulation

It fosters an innovation-driven regulatory environment with inclusive collaboration.
    `,
  },
  {
    id: 7,
    icon: FaCode,
    title: "Custom Development & Transformation",
    description:
      "Custom RegTech platforms, API integration, and agile cloud-native solutions for regulatory innovation.",
    details: `
We deliver tailored solutions including:
- Bespoke RegTech platform development
- API gateways for regulatory data sharing
- Agile deployments on cloud-native architecture
- UX-optimized interfaces for internal and public users

Perfect for regulators or institutions seeking to lead in digital transformation.
    `,
  },
  {
    id: 8,
    icon: FaRobot,
    title: "AI-Powered Compliance Intelligence",
    description:
      "AI tools for anomaly detection, predictive risk analysis, and automated regulatory interpretation.",
    details: `
Our AI-powered tools include:
- Natural Language Processing for regulatory text interpretation
- Predictive analytics for emerging risk signals
- Autonomous compliance checks
- Pattern and anomaly detection at scale

This leads to smarter, faster, and more scalable compliance operations.
    `,
  },
  {
    id: 9,
    icon: FaCube,
    title: "Web3 & Blockchain Innovation",
    description:
      "Blockchain-based compliance, smart contracts, and verifiable credentials for transparency and automation.",
    details: `
This solution leverages:
- Smart contracts for automated regulatory enforcement
- Blockchain for audit-proof recordkeeping
- Decentralized identity and verifiable credentials
- Secure data provenance and tracking

Ideal for regulators exploring trust, transparency, and decentralization in compliance.
    `,
  },
  {
    id: 10,
    icon: FaShield,
    title: "Regulatory Technology (RegTech) Services",
    description:
      "Automated reporting, e-KYC, AML, and real-time policy compliance for multi-jurisdictional needs.",
    details: `
Our RegTech services cover:
- e-KYC and customer verification systems
- AML screening and transaction monitoring
- Cross-border regulatory compliance solutions
- Policy change management automation

These tools reduce risk exposure and regulatory burdens for financial entities.
    `,
  },
  {
    id: 11,
    icon: FaUserShield,
    title: "Supervisory Technology (SupTech) Services",
    description:
      "Data analytics, risk dashboards, and workflow automation for smarter, proactive regulatory supervision.",
    details: `
SupTech Services include:
- AI-enhanced regulatory dashboards
- Workflow automation for case tracking
- Risk classification and prioritization systems
- Secure data exchange mechanisms

This enables supervisory bodies to operate with greater agility and insight.
    `,
  },
  {
    id: 12,
    icon: FaGraduationCap,
    title: "Capacity Building & Knowledge Transfer",
    description:
      "Training, workshops, and global collaboration to strengthen digital regulatory capabilities.",
    details: `
We offer:
- Hands-on training in RegTech and SupTech tools
- Global best practice sharing through workshops
- Capacity building programs for regulators
- Knowledge hubs and resource libraries

Helping institutions build and retain expertise for long-term digital success.
    `,
  },
];

export const PartnerImg = [
  {
    id: 1,
    image: PartnerImg1,
  },
  {
    id: 2,
    image: PartnerImg2,
  },
  {
    id: 3,
    image: PartnerImg3,
  },
  {
    id: 4,
    image: PartnerImg4,
  },
  {
    id: 5,
    image: PartnerImg5,
  },
  {
    id: 6,
    image: PartnerImg6,
  },
  {
    id: 6,
    image: PartnerImg6,
  },
];

export const testimonialsCont = [
  {
    id: 1,
    userName: "Tunde Adewale",
    userTitle: "Compliance Analyst, FinEdge",
    userTestimony:
      "Digital Island's real-time compliance tools are exactly what our team needed. The dashboards and automated reporting saved us hours during audit season.",
  },
  {
    id: 2,
    userName: "Fatima Yusuf",
    userTitle: "Head of Risk, NovaReg",
    userTestimony:
      "With Digital Island, we've streamlined our entire risk assessment process. Their tools are precise, user-friendly, and have significantly reduced manual errors.",
  },
  {
    id: 3,
    userName: "Emeka Onwudiwe",
    userTitle: "Policy Advisor, RegLogic",
    userTestimony:
      "The insights from Digital Island's analytics dashboard are invaluable. We’ve used them to refine policy strategies and stay proactive in a fast-changing landscape.",
  },
  {
    id: 4,
    userName: "Grace Omotola",
    userTitle: "Operations Lead, TrustSphere",
    userTestimony:
      "Our compliance reporting turnaround has improved drastically since adopting Digital Island. It’s a must-have for modern regulatory environments.",
  },
  {
    id: 5,
    userName: "Ibrahim Hassan",
    userTitle: "Senior Auditor, SafeBank",
    userTestimony:
      "Audit season used to be a nightmare. Now with Digital Island’s automation features, we complete audits in half the time and with fewer discrepancies.",
  },
  {
    id: 6,
    userName: "Lilian Eze",
    userTitle: "Legal & Compliance Officer, FinHub Africa",
    userTestimony:
      "Digital Island bridges the gap between innovation and compliance. Their support for Web3 and AI integration is years ahead of the curve.",
  },
];
