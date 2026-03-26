import { useEffect } from "react";
import { Link } from "react-router-dom";
import cs3Hero from "@/assets/cs3-hero.jpg";
import cs3Problem from "@/assets/cs3-problem.jpg";
import cs3Path from "@/assets/cs3-path.jpg";
import cs3Research from "@/assets/cs3-research.jpg";
import cs3Approach from "@/assets/cs3-approach.jpg";
import cs3Structure from "@/assets/cs3-structure.jpg";
import cs3Builder from "@/assets/cs3-builder.jpg";
import cs3Final from "@/assets/cs3-final.jpg";

const CaseStudy3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex items-center justify-between h-14">
          <Link to="/" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Portfolio
          </Link>
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Case Study 03</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="mb-4">
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">Quest Alliance · Web / Mobile · UI/UX Designer</span>
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-foreground mb-8 max-w-[18ch]">
          Designing a Scalable Content Builder for Learning Platforms
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-[60ch] mb-12">
          As the sole UX designer, I worked closely with product and engineering teams to design a scalable content builder that allowed educators to create structured, interactive learning content without technical expertise.
        </p>
        <div className="h-px bg-border mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Product</span>
            <span className="text-foreground font-medium">Content Builder</span>
          </div>
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Platform</span>
            <span className="text-foreground font-medium">Web / Mobile</span>
          </div>
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Role</span>
            <span className="text-foreground font-medium">UI/UX Designer</span>
          </div>
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Contribution</span>
            <span className="text-foreground font-medium">Research, Design, Testing</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <img src={cs3Hero} alt="Content builder overview" className="w-full" />
      </section>

      {/* Background */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">Background</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The learning platform needed a way for educators to create and manage learning content at scale. The existing process was manual and fragmented — content creation required technical support, making it impossible for educators to independently build and iterate on learning modules.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The goal was to design a content builder that was powerful enough for complex learning structures but simple enough for non-technical educators to use independently.
            </p>
          </div>
        </div>
      </section>

      {/* How Things Worked Before */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">How Things Worked Before</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Manual Content Creation", desc: "Educators had to rely on developers to structure and publish learning content, creating bottlenecks." },
            { title: "No Standard Structure", desc: "Content lacked consistent formatting, making it difficult for learners to navigate across different modules." },
            { title: "Limited Interactivity", desc: "The existing tools didn't support interactive elements, limiting engagement within learning content." },
            { title: "Scalability Issues", desc: "Creating content for multiple programs required duplicating effort, with no reusable templates or components." },
          ].map((item) => (
            <div key={item.title} className="border border-border bg-card p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem We Needed to Solve */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">The Problem We Needed to Solve</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          Educators were spending more time coordinating with developers than creating content. The lack of a self-serve tool meant every content update required engineering resources, slowing down the entire learning content pipeline.
        </p>
        <img src={cs3Problem} alt="Problem visualization" className="w-full mb-8" />
        <div className="bg-primary text-primary-foreground p-8 text-center">
          <p className="text-sm leading-relaxed max-w-[50ch] mx-auto">
            "How might we empower educators to create structured, interactive learning content without needing technical support?"
          </p>
        </div>
      </section>

      {/* Finding the Path Forward */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Finding the Path Forward</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          Through stakeholder workshops and educator interviews, we identified the core requirements: a tool that balanced flexibility with guardrails, enabling creative content creation while maintaining structural consistency.
        </p>
        <img src={cs3Path} alt="Path forward analysis" className="w-full" />
      </section>

      {/* Research Findings */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Research Findings</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          Through user interviews with educators and content managers, and analysis of existing content creation workflows, several key patterns emerged that guided the design direction.
        </p>
        <img src={cs3Research} alt="Research findings" className="w-full" />
      </section>

      {/* Our Approach */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { step: "1", title: "Pre-defined content layouts", desc: "Created a library of reusable content templates that standardized the learning experience." },
            { step: "2", title: "Drag-and-drop building", desc: "Designed an intuitive builder interface that allowed educators to compose modules visually." },
            { step: "3", title: "Preview & publish flow", desc: "Built a seamless preview-to-publish workflow so educators could see exactly what learners would see." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <span className="inline-block w-8 h-8 border border-border text-foreground text-sm leading-8 mb-3">{item.step}</span>
              <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <img src={cs3Approach} alt="Approach overview" className="w-full" />
      </section>

      {/* What We Built */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">What We Built</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          A modular content builder that gives educators full control over their learning content — from structure to interactivity — without writing a single line of code.
        </p>
        <img src={cs3Builder} alt="What we built" className="w-full" />
      </section>

      {/* Creating the Structure */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Creating the Structure</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          Designed a hierarchical content structure that organized learning into programs, courses, modules, and lessons — giving educators a clear mental model for how content relates and flows.
        </p>
        <img src={cs3Structure} alt="Content structure design" className="w-full" />
      </section>

      {/* Making Lessons Interactive */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Making Lessons Interactive</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          Introduced interactive content blocks — quizzes, drag-and-drop activities, multimedia embeds — that educators could add to any lesson without writing code. Each block type was designed to be self-contained and configurable.
        </p>
      </section>

      {/* How It All Comes Together */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">How It All Comes Together</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          The final builder interface brings together the content structure, interactive blocks, and preview functionality into a cohesive tool that educators can use independently to create and publish high-quality learning content.
        </p>
        <img src={cs3Final} alt="Final builder interface" className="w-full" />
      </section>

      {/* Results */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-8">Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { stat: "Self-serve", label: "Educators can now create content independently without developer support" },
            { stat: "Scalable", label: "Reusable templates and components enabled content creation at scale" },
            { stat: "Consistent", label: "Standardized learning experience across all programs and modules" },
          ].map((result) => (
            <div key={result.label} className="border border-border bg-card p-6 text-center">
              <span className="font-serif text-2xl text-foreground block mb-2">{result.stat}</span>
              <p className="text-sm text-muted-foreground">{result.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="bg-card border border-border p-8">
          <h2 className="font-serif text-xl text-foreground mb-4">Reflection</h2>
          <p className="text-muted-foreground leading-relaxed">
            This project taught me the value of designing tools that empower non-technical users. The most impactful design decisions weren't about visual polish — they were about creating the right abstractions that made complex content structures feel simple and approachable.
          </p>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto pb-20">
        <div className="h-px bg-border mb-8" />
        <div className="flex items-center justify-between">
          <Link to="/case-study/2" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Previous Case Study
          </Link>
          <Link to="/" className="font-sans text-sm text-foreground hover:tracking-wider transition-all duration-300">
            Back to Portfolio →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy3;
