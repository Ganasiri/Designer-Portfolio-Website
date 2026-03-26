import { useEffect } from "react";
import { Link } from "react-router-dom";
import cs1Hero from "@/assets/cs1-hero.jpg";
import cs1Dashboard from "@/assets/cs1-dashboard.jpg";
import cs1Insights from "@/assets/cs1-insights.jpg";
import cs1Structure from "@/assets/cs1-structure.jpg";
import cs1Approach from "@/assets/cs1-approach.jpg";
import cs1PatientCard from "@/assets/cs1-patient-card.jpg";
import cs1Monitoring from "@/assets/cs1-monitoring.jpg";
import cs1LiveInterface from "@/assets/cs1-live-interface.jpg";

const CaseStudy1 = () => {
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
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Case Study 01</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="mb-4">
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">Janitri · Web / Mobile · UI/UX Designer</span>
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-foreground mb-8 max-w-[18ch]">
          Maternity Care Monitoring Dashboard
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-[60ch] mb-12">
          Redesigned a maternity care dashboard used by clinicians to monitor patient vitals and identify high-risk cases. The project focused on improving alert visibility, patient monitoring workflows, and structuring complex clinical data to support faster decision-making in high-pressure environments.
        </p>
        <div className="h-px bg-border mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Product / Project</span>
            <span className="text-foreground font-medium">Intrapartum Monitor</span>
          </div>
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Healthcare Delivery</span>
            <span className="text-foreground font-medium">Web / Mobile</span>
          </div>
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">Role / Position</span>
            <span className="text-foreground font-medium">UI/UX Designer</span>
          </div>
          <div>
            <span className="block text-muted-foreground text-xs uppercase tracking-wider mb-1">My Contribution</span>
            <span className="text-foreground font-medium">Research, Design, Testing</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <img src={cs1Hero} alt="Dashboard overview" className="w-full" />
      </section>

      {/* Understanding the Product */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">01</span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-2">Understanding the Product</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              The project required designing a maternity care monitoring system — a dashboard used by clinicians in hospitals to monitor patient vitals, track labor progress, and identify high-risk cases in real time.
            </p>
            <div className="bg-card border border-border p-6 mb-6">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "Engineers and product stakeholders had a working prototype, but the interface lacked clinical clarity. My role was to bring UX order to a medically complex workflow."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Leadership */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">02</span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-2">Design Leadership</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              As the sole UX designer, I was responsible for translating complex clinical requirements into an intuitive, structured interface. I collaborated with product managers and engineers to define the design language and interaction patterns for the entire monitoring system.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding the Problem */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-6">Understanding the Problem</h2>
        <p className="text-muted-foreground text-center max-w-[50ch] mx-auto leading-relaxed mb-12">
          Clinicians were managing critical patient data through fragmented tools. The existing interface made it difficult to quickly assess patient status, leading to delayed responses in time-sensitive situations.
        </p>
        <img src={cs1Dashboard} alt="Problem analysis dashboard" className="w-full mb-8" />
        <div className="bg-card border border-border p-8 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed italic max-w-[50ch] mx-auto">
            "In critical environments where delays are critical, minor visual usability gaps significantly impacted workflow efficiency."
          </p>
        </div>
      </section>

      {/* Key Insights */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Hierarchy is critical", desc: "Clinicians needed a clear visual hierarchy to quickly distinguish between normal and high-risk patients." },
            { title: "Alerts need context", desc: "Standalone alerts without patient context led to confusion and delayed action from medical staff." },
            { title: "Workflow efficiency", desc: "The monitoring workflow needed to support rapid scanning across multiple patients simultaneously." },
          ].map((insight) => (
            <div key={insight.title} className="border border-border bg-card p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">{insight.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{insight.desc}</p>
            </div>
          ))}
        </div>
        <img src={cs1Insights} alt="Key insights visualization" className="w-full mt-8" />
      </section>

      {/* Dashboard Structure */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Dashboard Structure</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          Mapped the full information architecture of the monitoring dashboard, defining how patient data, alerts, vitals, and clinical actions connect across different views and user workflows.
        </p>
        <img src={cs1Structure} alt="Dashboard structure and information architecture" className="w-full" />
      </section>

      {/* Design Approach */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">Design Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Alert Visibility", desc: "Redesigned the alert system with color-coded severity levels and contextual patient information for faster triage." },
            { title: "Information Hierarchy", desc: "Structured complex clinical data into scannable layouts with clear visual weight for critical metrics." },
            { title: "Navigation Flow", desc: "Streamlined the monitoring workflow so clinicians could move between patient views with minimal friction." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <img src={cs1Approach} alt="Design approach overview" className="w-full" />
      </section>

      {/* Patient Card Redesign */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Patient Card Redesign</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          Redesigned the patient card to surface critical vitals at a glance, with color-coded risk indicators and structured data grouping to support faster clinical assessment.
        </p>
        <img src={cs1PatientCard} alt="Patient card redesign" className="w-full" />
      </section>

      {/* Real-Time Monitoring */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Real-Time Patient Monitoring</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          Designed a real-time monitoring view that provides clinicians with a live overview of all patients, enabling quick identification of high-risk cases and immediate action.
        </p>
        <img src={cs1Monitoring} alt="Real-time monitoring interface" className="w-full" />
      </section>

      {/* Live Monitoring Interface */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Live Monitoring Interface</h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
          The final monitoring interface consolidates all patient data into a cohesive, scannable view with contextual alerts and actionable insights.
        </p>
        <img src={cs1LiveInterface} alt="Live monitoring interface" className="w-full" />
      </section>

      {/* Results */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="h-px bg-border mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-8">Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { stat: "Improved Alert Visibility", desc: "Clear visual hierarchy for critical vs. normal patient status" },
            { stat: "Faster Navigation", desc: "Streamlined workflows reducing time-to-action for clinicians" },
            { stat: "Clearer Records", desc: "Structured clinical data supporting better decision-making" },
          ].map((result) => (
            <div key={result.stat} className="border border-border bg-card p-6 text-center">
              <h3 className="font-serif text-lg text-foreground mb-2">{result.stat}</h3>
              <p className="text-sm text-muted-foreground">{result.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary text-primary-foreground p-8 text-center">
          <p className="text-sm leading-relaxed max-w-[50ch] mx-auto">
            The redesigned interface improved visibility of critical alerts and reduced cognitive load, helping clinicians identify urgent cases faster.
          </p>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto pb-20">
        <div className="h-px bg-border mb-8" />
        <div className="flex items-center justify-between">
          <Link to="/" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Portfolio
          </Link>
          <Link to="/case-study/2" className="font-sans text-sm text-foreground hover:tracking-wider transition-all duration-300">
            Next Case Study →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy1;
