import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import maternityImg from "@/assets/case-study-maternity.jpg";
import learningImg from "@/assets/case-study-learning.jpg";
import contentImg from "@/assets/case-study-content.jpg";

const caseStudies = [
  {
    title: "Redesigning a maternity care monitoring dashboard",
    company: "Janitri",
    platforms: "Web / Mobile",
    role: "UI/UX Designer",
    description:
      "Redesigned a maternity care dashboard used by clinicians to monitor patient vitals and identify high-risk cases. The project focused on improving alert visibility, patient monitoring workflows, and structuring complex clinical data to support faster decision-making in high-pressure environments.",
    image: maternityImg,
    link: "/case-study/1",
  },
  {
    title: "Improving Engagement in an Employability Learning Platform",
    company: "Quest Alliance",
    platforms: "Web / Mobile",
    role: "Product Designer",
    description:
      "Worked closely with product and engineering teams to improve usability and engagement across the product. The work focused on simplifying onboarding, improving navigation and UI clarity, and introducing in-app guidance and notification systems that encouraged users to return, continue learning, and stay engaged with the platform.",
    image: learningImg,
    link: "/case-study/2",
  },
  {
    title: "Designing a Scalable Content Builder for Learning Platform",
    company: "Quest Alliance",
    platforms: "Web / Mobile",
    role: "UI/UX Designer",
    description:
      "As the sole UX designer, I worked closely with product and engineering teams to improve usability and engagement across the product. The work focused on simplifying onboarding, improving navigation and UI clarity, and introducing in-app guidance and notification systems.",
    image: contentImg,
    link: "/case-study/3",
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`border border-border bg-card transition-all duration-500 group hover:border-foreground ${
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
        <h3 className="font-serif text-xl md:text-2xl leading-[1.2] text-foreground mb-3 text-balance">
          {study.title}
        </h3>
        <div className="flex items-center gap-2 text-xs font-sans font-medium tracking-wider uppercase text-muted-foreground mb-4">
          <span>Company: {study.company}</span>
          <span className="text-border">|</span>
          <span>{study.platforms}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-pretty">
          {study.description}
        </p>
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
  );
};

const CaseStudies = () => {
  return (
    <section id="work" className="px-6 md:px-16 max-w-[1440px] mx-auto pb-24 md:pb-32">
      {/* Section Title */}
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-border" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">Case Studies</h2>
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
