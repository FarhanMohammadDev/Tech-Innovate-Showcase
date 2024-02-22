import { Feature, featureBlock } from "@/types/interfaces";

export const features: Feature[] = [
  {
    imageUrl: "/features/bar-chart.png",
    title: "Reporting dashboard",
    content:
      "Generate insightful reports and analytics with our reporting dashboard feature, empowering data-driven decision-making for engineering teams.",
  },
  {
    imageUrl: "/features/calendar.png",
    title: "Meeting scheduling",
    content:
      "Effortlessly schedule meetings, coordinate availability, and send automated reminders with the meeting scheduling feature, ensuring seamless collaboration.",
  },
  {
    imageUrl: "/features/protect.png",
    title: "100% secured",
    content:
      "Enhance data protection with robust security features, ensuring confidentiality, integrity, and compliance for your engineering team's CRM dashboard.",
  },
];

export const featuresBlock: featureBlock[] = [
  {
    imageUrl: "/features/messaing.svg",
    title: "Artificial Intelligence Solutions:",
    content:
      "Harnessing the power of artificial intelligence, we develop cutting-edge AI solutions that drive innovation and efficiency in your business processes. From machine learning algorithms to natural language processing systems, our AI solutions empower organizations to automate tasks, gain insights from data, and make informed decisions.",
  },
  {
    imageUrl: "/features/task-management.svg",
    title: "Cybersecurity Services:",
    content:
      "Protecting your digital assets is paramount in today's interconnected world. Our cybersecurity services encompass a comprehensive range of solutions aimed at safeguarding your systems, networks, and data from cyber threats. From penetration testing and vulnerability assessments to security training and incident response, we help organizations strengthen their cybersecurity posture and mitigate risks effectively.",
    isReversed: true,
  },
];
