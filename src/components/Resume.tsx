import { useEffect, useRef, useState } from "react";

const experience = [
  {
    role: "Product Designer",
    company: "Quest Alliance",
    period: "Oct 2024 — November 2025",
    summary: "Designing digital learning platforms used by educators and learners across large-scale programs.",
    bullets: [
      "Led end-to-end product design lifecycle from research to delivery",
      "Redesigned learning modules and gamification systems, increasing engagement by 25%",
      "Improved usability of internal educator and admin platforms",
      "Built scalable UI patterns and interaction models for complex workflows",
      "Collaborated closely with product managers, developers, and design partners",
    ],
  },
  {
    role: "UX Designer",
    company: "Janitri Innovation Pvt. Ltd.",
    period: "Dec 2022 — Jul 2024",
    summary: "Worked on digital healthcare platforms serving both hospitals and patients.",
    bullets: [
      "Designed UX for B2B and B2C healthcare platforms",
      "Conducted user research, stakeholder interviews, and usability testing",
      "Translated product requirements into wireframes, prototypes, and production UI",
      "Collaborated with engineering teams to deliver usable and scalable product experiences",
      "Contributed to building a cohesive UX ecosystem across multiple healthcare products",
    ],
  },
  {
    role: "UX Design Intern",
    company: "Honeysys Pvt. Ltd.",
    period: "May 2022 — Oct 2022",
    bullets: [
      "Redesigned the company website improving information architecture and navigation",
      "Designed and prototyped Honebi web application",
      "Created marketing creatives and product assets",
    ],
  },
];

const skills = [
  "User Research", "Usability Testing", "Interaction Design",
  "Information Architecture", "Wireframing", "Prototyping",
  "Design Systems", "UX Strategy", "Product Thinking",
];

const tools = ["Figma", "FigJam", "Miro", "Adobe XD", "Notion"];

const education = [
  { degree: "Bachelor of Computer Applications", school: "Christ University", period: "2019 — 2022" },
  { degree: "International Baccalaureate", school: "Sangam School of Excellence", period: "2017 — 2019" },
];

const Resume = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="resume" className="px-6 md:px-16 max-w-[1440px] mx-auto pb-24 md:pb-32">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-border" />
        <h2 className={`font-serif text-3xl md:text-4xl text-foreground ${visible ? "animate-fade-up" : "opacity-0"}`}>
          Resume
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className={`${visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
        {/* Profile */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-foreground mb-4">Product Design Profile</h3>
          <div className="h-px bg-border mb-6" />
          <p className="text-muted-foreground leading-relaxed max-w-[65ch] text-pretty mb-4">
            Product Designer with 3+ years of experience building scalable digital products across healthcare and education sectors. Experienced in user research, interaction design, and product strategy, with a strong focus on solving complex problems through intuitive design.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-[65ch] text-pretty">
            Delivered measurable impact including increasing product engagement by 25% through UX redesign and improved user flows. Skilled at leading the end-to-end design process from discovery and research to prototyping and shipping production-ready interfaces.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-foreground mb-4">Experience</h3>
          <div className="h-px bg-border mb-8" />
          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.role + exp.company}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <div>
                    <span className="font-sans font-semibold text-foreground">{exp.role}</span>
                    <span className="block text-sm text-foreground">{exp.company}</span>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                </div>
                {exp.summary && (
                  <p className="text-sm text-muted-foreground italic mb-3">{exp.summary}</p>
                )}
                <ul className="space-y-1.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-4">Product Design Skills</h3>
            <div className="h-px bg-border mb-6" />
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-4 py-2 text-sm font-sans bg-foreground text-primary-foreground">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-4">Tools</h3>
            <div className="h-px bg-border mb-6" />
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="px-4 py-2 text-sm font-sans border border-border">{t}</span>
              ))}
            </div>

            <h3 className="font-serif text-2xl text-foreground mb-4 mt-10">Education</h3>
            <div className="h-px bg-border mb-6" />
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.degree}>
                  <span className="font-sans font-semibold text-sm text-foreground block">{e.degree}</span>
                  <span className="text-sm text-muted-foreground">{e.school}</span>
                  <span className="text-sm text-muted-foreground block">{e.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
