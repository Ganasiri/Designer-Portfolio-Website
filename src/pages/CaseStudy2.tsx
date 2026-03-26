import { useEffect } from "react";
import { Link } from "react-router-dom";
import cs2Hero from "@/assets/cs2-hero.jpg";
import cs2Journey from "@/assets/cs2-journey.jpg";
import cs2Discovery from "@/assets/cs2-discovery.jpg";
import cs2Solution1 from "@/assets/cs2-solution1.jpg";
import cs2Solution2 from "@/assets/cs2-solution2.jpg";
import cs2Solution3 from "@/assets/cs2-solution3.jpg";
import cs2Solution4 from "@/assets/cs2-solution4.jpg";
import cs2Solution5 from "@/assets/cs2-solution5.jpg";

const CaseStudy2 = () => {
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
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Case Study 02</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="mb-4">
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">Quest Alliance · Web / Mobile · Product Designer</span>
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-foreground mb-8 max-w-[18ch]">
          Improving Engagement in an Employability Learning Platform
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-[60ch] mb-12">
          Worked closely with product and engineering teams to improve usability and engagement across the product. The work focused on simplifying onboarding, improving navigation and UI clarity, and introducing in-app guidance and notification systems that encouraged users to return, continue learning, and stay engaged with the platform.
        </p>
        <div className="h-px bg-border mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Product</span>
            <span className="text-foreground font-medium">Learning Platform</span>
          </div>
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Platform</span>
            <span className="text-foreground font-medium">Web / Mobile</span>
          </div>
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Role</span>
            <span className="text-foreground font-medium">Product Designer</span>
          </div>
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Duration</span>
            <span className="text-foreground font-medium">Oct 2024 — Nov 2025</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <img src={cs2Hero} alt="Learning platform overview" className="w-full" />
      </section>

      {/* Project Brief */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="bg-card border border-border p-8">
          <h2 className="font-serif text-xl text-foreground mb-4">Project Brief</h2>
          <p className="text-muted-foreground leading-relaxed">
            The platform aimed to build employability skills for young learners through self-paced learning modules. Despite having quality content, engagement metrics showed users were dropping off early. The challenge was to redesign the experience to improve retention, encourage learning habits, and create a system that supported users throughout their journey.
          </p>
        </div>
      </section>

      {/* Background */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">Background</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The platform's engagement and retention were suffering — users would sign up but not return consistently. Content completion rates were low, and the learning journey felt disconnected. There was a need to rethink how users discovered, consumed, and stayed motivated with the learning content.
            </p>
          </div>
        </div>
      </section>

      {/* Core Challenges */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Core Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Low Engagement Loops", desc: "Users weren't developing habits around learning — sessions were infrequent and disconnected." },
            { title: "Unclear Learning Paths", desc: "Users struggled to understand what to learn next or how individual modules connected to goals." },
            { title: "Weak Onboarding", desc: "First-time users weren't guided effectively, leading to early drop-offs." },
            { title: "No Re-engagement", desc: "The platform lacked mechanisms to bring users back after periods of inactivity." },
          ].map((challenge) => (
            <div key={challenge.title} className="border border-border bg-card p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">{challenge.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{challenge.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Current User Journey */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Current User Journey</h2>
        <img src={cs2Journey} alt="Current user journey map" className="w-full" />
      </section>

      {/* Approach */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-8">Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { step: "1", title: "Define engagement loops", desc: "Mapped out the key moments where users needed motivation to continue learning." },
            { step: "2", title: "Contextual prompts", desc: "Introduced in-app guidance systems that connected learning activities to tangible goals." },
            { step: "3", title: "Habits & re-engagement", desc: "Designed notification and streak systems to encourage consistent return behavior." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <span className="inline-block w-8 h-8 border border-border text-foreground text-sm leading-8 mb-3">{item.step}</span>
              <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discovery Process */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Discovery Process</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          Conducted user interviews, analyzed behavioral data, and mapped existing workflows to identify friction points and opportunities for improving engagement throughout the learning experience.
        </p>
        <img src={cs2Discovery} alt="Discovery process overview" className="w-full" />
      </section>

      {/* Design Solution */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">Design Solution</h2>

        {/* Solution 1 */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2 block">01</span>
              <h3 className="font-serif text-2xl text-foreground mb-4">Structuring the Learning Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reorganized the content structure to create clear learning paths. Users could now see their progress, understand what comes next, and feel a sense of accomplishment as they advanced through modules.
              </p>
            </div>
            <div className="md:col-span-7">
              <img src={cs2Solution1} alt="Structured learning journey" className="w-full" />
            </div>
          </div>
        </div>

        {/* Solution 2 */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 md:order-1">
              <img src={cs2Solution2} alt="Goal-based notifications" className="w-full" />
            </div>
            <div className="md:col-span-5 md:order-2">
              <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2 block">02</span>
              <h3 className="font-serif text-2xl text-foreground mb-4">Connecting Learning with User Motivation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Introduced notification systems that connected learning activities to real-world goals. Smart reminders and contextual prompts helped users understand the value of continuing their learning journey.
              </p>
            </div>
          </div>
        </div>

        {/* Solution 3 */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2 block">03</span>
              <h3 className="font-serif text-2xl text-foreground mb-4">Improving Continuity in Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designed features that made it easy for users to pick up where they left off. Session resumption, progress indicators, and contextual bookmarks reduced friction in returning to learning.
              </p>
            </div>
            <div className="md:col-span-7">
              <img src={cs2Solution3} alt="Learning continuity features" className="w-full" />
            </div>
          </div>
        </div>

        {/* Solution 4 */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 md:order-1">
              <img src={cs2Solution4} alt="Engagement and re-engagement" className="w-full" />
            </div>
            <div className="md:col-span-5 md:order-2">
              <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2 block">04</span>
              <h3 className="font-serif text-2xl text-foreground mb-4">Strengthening Engagement & Re-engagement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built gamification elements and streak-based systems to create positive feedback loops. Push notifications and in-app prompts encouraged users to return and maintain their learning habits.
              </p>
            </div>
          </div>
        </div>

        {/* Solution 5 */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-2 block">05</span>
              <h3 className="font-serif text-2xl text-foreground mb-4">Supporting Users When They Get Stuck</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designed in-app support and guidance features that proactively identified when users were struggling and offered contextual help, reducing frustration and preventing drop-offs at key friction points.
              </p>
            </div>
            <div className="md:col-span-7">
              <img src={cs2Solution5} alt="User support features" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Outcome & Impact */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-8">Outcome & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stat: "25%", label: "Increase in product engagement through UX redesign" },
            { stat: "Improved", label: "User retention & learning completion rates" },
            { stat: "Stronger", label: "Engagement & re-engagement through habit systems" },
          ].map((item) => (
            <div key={item.label} className="border border-border bg-card p-6 text-center">
              <span className="font-serif text-3xl text-foreground block mb-2">{item.stat}</span>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="bg-card border border-border p-8">
          <h2 className="font-serif text-xl text-foreground mb-4">Reflection</h2>
          <p className="text-muted-foreground leading-relaxed">
            This project reinforced the importance of understanding user motivation beyond surface-level usability. Designing for engagement requires thinking about the full lifecycle of a user — from first visit to sustained habit. The solutions needed to be subtle enough not to feel intrusive, while being effective enough to change behavior patterns.
          </p>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto pb-20">
        <div className="h-px bg-border mb-8" />
        <div className="flex items-center justify-between">
          <Link to="/case-study/1" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Previous Case Study
          </Link>
          <Link to="/case-study/3" className="font-sans text-sm text-foreground hover:tracking-wider transition-all duration-300">
            Next Case Study →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy2;
