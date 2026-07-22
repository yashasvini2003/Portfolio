import { Award, BrainCircuit, Medal, Sparkles, Trophy, UsersRound } from "lucide-react";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ScrollMarker from "../components/ScrollMarker";

type Credential = {
  preview: string;
  href: string;
  label: string;
  kind: "badge" | "certificate";
};

type RecognitionItem = {
  icon: typeof Award;
  date: string;
  title: string;
  description: string;
  certificateSlots: number;
  credentials: Credential[];
};

const achievementItems: RecognitionItem[] = [
  {
    icon: Medal,
    date: "Fall 2024 & Winter 2025",
    title: "President’s Honour List · Two Terms",
    description:
      "Recognized by Seneca Polytechnic for sustained academic excellence while completing the Honours Bachelor of Technology: Software Development program.",
    certificateSlots: 2,
    credentials: [
      {
        preview: "/credentials/presidents-honour-list-fall-2024.png",
        href: "/credentials/presidents-honour-list-fall-2024.pdf",
        label: "View Fall 2024 President's Honour List certificate",
        kind: "certificate",
      },
      {
        preview: "/credentials/presidents-honour-list-winter-2025.png",
        href: "/credentials/presidents-honour-list-winter-2025.pdf",
        label: "View Winter 2025 President's Honour List certificate",
        kind: "certificate",
      },
    ],
  },
  {
    icon: Trophy,
    date: "April 2, 2026",
    title: "Second Place · OPS Got Talent",
    description:
      "Co-developed SecureSync, a $1.5M three-year AI governance proposal using Microsoft Purview, information classification, DLP controls, risk analysis, and an executive implementation case.",
    certificateSlots: 1,
    credentials: [
      {
        preview: "/credentials/ops-got-talent-second-place-2026.jpeg",
        href: "/credentials/ops-got-talent-second-place-2026.jpeg",
        label: "View OPS Got Talent Second Place certificate",
        kind: "certificate",
      },
    ],
  },
  {
    icon: BrainCircuit,
    date: "May 2026",
    title: "Energy Hackathon Finalist",
    description:
      "Advanced as a finalist with GridWise AI, a community-focused smart-EV charging concept that balances user needs, grid stress, sustainability, and incentives.",
    certificateSlots: 1,
    credentials: [
      {
        preview: "/credentials/energy-hackathon-finalist-2026.png",
        href: "/credentials/energy-hackathon-finalist-2026.png",
        label: "View 2026 Energy Hackathon Finalist badge",
        kind: "badge",
      },
    ],
  },
];

const certificationItems: RecognitionItem[] = [
  {
    icon: Award,
    date: "January 2026",
    title: "OPS LEAN White Belt",
    description:
      "Completed foundational LEAN and continuous-improvement training and applied root-cause thinking and process mapping during an OPS service-intake initiative.",
    certificateSlots: 1,
    credentials: [
      {
        preview: "/credentials/ops-lean-white-belt-2026.png",
        href: "/credentials/ops-lean-white-belt-2026.png",
        label: "View OPS Lean White Belt certificate",
        kind: "certificate",
      },
    ],
  },
  {
    icon: BrainCircuit,
    date: "January 2025",
    title: "Energy Hackathon Participation Badge",
    description:
      "Recognized for participating in the Energy Hackathon and contributing to GridWise AI, a smart EV charging concept focused on sustainability, community needs, and responsible energy use.",
    certificateSlots: 1,
    credentials: [
      {
        preview: "/credentials/energy-hackathon-participant-2025.png",
        href: "/credentials/energy-hackathon-participant-2025.png",
        label: "View 2025 Energy Hackathon Participant badge",
        kind: "badge",
      },
    ],
  },
];

const volunteeringItems: RecognitionItem[] = [
  {
    icon: UsersRound,
    date: "April 2022 - May 2025",
    title: "Peer Mentor · Seneca Polytechnic",
    description:
      "Welcomed and mentored new students, shared practical academic guidance, answered questions, and helped peers feel more confident navigating campus life and their program.",
    certificateSlots: 0,
    credentials: [],
  },
  {
    icon: Sparkles,
    date: "April 2025 - Present",
    title: "Graphics & Marketing Director · HackTheBrain",
    description:
      "Led visual communication and promotional planning for a student-led innovation community, creating engaging campaign materials and supporting outreach for collaborative technology events.",
    certificateSlots: 0,
    credentials: [],
  },
];

const allItems = [...achievementItems, ...certificationItems, ...volunteeringItems];
const categories = ["All", "Achievements", "Certifications", "Volunteering"] as const;
type Category = (typeof categories)[number];

function Achievements() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const items = activeCategory === "All"
    ? allItems
    : activeCategory === "Achievements"
      ? achievementItems
      : activeCategory === "Certifications"
        ? certificationItems
        : volunteeringItems;

  return (
    <section id="achievements" className="content-section achievements-section">
      <ScrollMarker number="06" label="Achievements" />
      <div className="section-shell">
        <SectionHeader
          eyebrow="Achievements & Recognition"
          description="The recognition matters, but the stronger story is the work behind it: learning quickly, collaborating across disciplines, and presenting ideas with clarity."
        />

        <div className="achievement-toolbar" role="tablist" aria-label="Recognition categories">
          {categories.map((category) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="achievements-grid">
          {items.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <article className="glass-card achievement-card" key={achievement.title}>
                <div className="achievement-icon">
                  <Icon size={28} />
                </div>
                <span className="card-label">{achievement.date}</span>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                {achievement.credentials.length > 0 && (
                  <div className="credential-gallery">
                    {achievement.credentials.map((credential) => (
                      <a
                        className={`credential-link ${credential.kind}`}
                        href={credential.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={credential.label}
                        key={credential.href}
                      >
                        <img src={credential.preview} alt="" loading="lazy" />
                        <span>{credential.kind === "badge" ? "View badge" : "View certificate"}</span>
                      </a>
                    ))}
                  </div>
                )}
                {achievement.certificateSlots > achievement.credentials.length && (
                  <div className="certificate-slots">
                    {Array.from({
                      length: achievement.certificateSlots - achievement.credentials.length,
                    }).map((_, index) => (
                      <div className="certificate-slot" key={`${achievement.title}-${index}`}>
                        <Award size={21} />
                        <span>Certificate</span>
                        <small>Ready to add</small>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
