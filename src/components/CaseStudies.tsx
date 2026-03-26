import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import maternityImg from "@/assets/case-study-maternity.jpg";
import learningImg from "@/assets/case-study-learning.jpg";
import contentImg from "@/assets/case-study-content.jpg";

const caseStudies = [
  {
    id: 1,
    title: "Redesigning a maternity care monitoring dashboard",
    company: "Janitri",
    platforms: "Web / Mobile",
    role: "Lead UI/UX Designer",
    industry: "Healthcare, MedTech",
    team: "PM, Engineers, Intern",
    description:
      "Redesigned a maternity care dashboard used by clinicians to monitor patient vitals and identify high-risk cases. The project focused on improving alert visibility, patient monitoring workflows, and structuring complex clinical data to support faster decision-making in high-pressure environments.",
    image: maternityImg,
    link: "/case-study/1",
    tags: ["Healthcare", "Dashboard", "B2B"],
    impact: [
      "Improved alert visibility — critical alerts now visible without additional interaction",
      "Faster navigation — reduced steps to access patient records and data",
      "Clearer hierarchy — better information structure for rapid scanning",
    ],
  },
  {
    id: 2,
    title: "Improving Engagement in an Employability Learning Platform",
    company: "Quest Alliance",
    platforms: "Web / Mobile",
    role: "Product Designer",
    industry: "EdTech",
    team: "Product Managers & Engineers",
    description:
      "Worked closely with product and engineering teams to improve usability and engagement across the product. The work focused on simplifying onboarding, improving navigation and UI clarity, and introducing in-app guidance and notification systems that encouraged users to return, continue learning, and stay engaged with the platform.",
    image: learningImg,
    link: "/case-study/2",
    tags: ["EdTech", "Mobile App", "Engagement"],
    impact: [
      "Sequential island progression replaced unstructured lesson flow",
      "One-tap resume learning eliminated manual search friction",
      "In-app help & support reduced abandonment",
    ],
  },
  {
    id: 3,
    title: "Designing a Scalable Content Builder for Learning Platform",
    company: "Quest Alliance",
    platforms: "Web / Mobile",
    role: "UI/UX Designer",
    industry: "EdTech",
    team: "External Consultancy Partner",
    description:
      "As the sole UX designer, I led the design of a content creation workflow that allowed non-technical teams to build and publish learning content independently — eliminating developer dependency entirely. The work covered research, system architecture, content layouts, and the builder interface.",
    image: contentImg,
    link: "/case-study/3",
    tags: ["EdTech", "CMS", "Internal Tool"],
    impact: [
      "100% self-service content — no developer dependency for lesson updates",
      "Faster content iteration across 2 platforms",
      "Scalable content architecture for growing lesson library",
    ],
  },
];

const CaseStudyCard = ({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Link to={study.link} className="block group">
      <div
        ref={ref}
        className={`border border-border bg-card transition-all duration-500 hover:border-foreground ${
          visible ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: `${index * 120}ms` }}
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-sans font-medium tracking-widest uppercase px-2 py-1 border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-serif text-xl md:text-2xl leading-[1.2] text-foreground mb-3 text-balance">
            {study.title}
          </h3>

          <div className="flex flex-wrap items-center gap-2 text-xs font-sans font-medium tracking-wider uppercase text-muted-foreground mb-4">
            <span>Company: {study.company}</span>
            <span className="text-border">|</span>
            <span>{study.platforms}</span>
            <span className="text-border">|</span>
            <span>{study.industry}</span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-pretty">
            {study.description}
          </p>

          {/* Impact */}
          <div className="border-t border-border pt-5 mb-6">
            <p className="text-[10px] font-sans font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Key Outcomes
            </p>
            <ul className="space-y-1.5">
              {study.impact.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-muted-foreground"
                >
                  <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-sans text-muted-foreground">
              Role: {study.role}
            </span>
            <span className="text-sm font-sans text-foreground group-hover:tracking-wider transition-all duration-300">
              View case study →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CaseStudies = () => {
  return (
    <section
      id="work"
      className="px-6 md:px-16 max-w-[1440px] mx-auto pb-24 md:pb-32"
    >
      {/* Section Title */}
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-border" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          Case Studies
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-12 md:gap-16">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.title} study={study} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
export { caseStudies };
