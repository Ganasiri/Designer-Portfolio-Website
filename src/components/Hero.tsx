import aryanPhoto from "@/assets/aryan-photo.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-16 max-w-[1440px] mx-auto">
      {/* Display Name */}
      <h1
        className="font-serif text-[clamp(3.5rem,10vw,8rem)] leading-[1.0] tracking-[0.08em] uppercase text-foreground animate-fade-up"
      >
        Aryan Boonlia
      </h1>

      {/* Rule */}
      <div className="h-px bg-border my-8 animate-rule-expand origin-left" style={{ animationDelay: "200ms" }} />

      {/* Hero Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Photo */}
        <div className="md:col-span-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <img
            src={aryanPhoto}
            alt="Aryan Boonlia"
            className="w-full max-w-[320px] aspect-[4/5] object-cover object-top grayscale-[30%] contrast-[1.05]"
          />
        </div>

        {/* Text */}
        <div className="md:col-span-8 flex flex-col justify-center animate-fade-up" style={{ animationDelay: "400ms" }}>
          <h2 className="font-serif italic text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] text-foreground text-balance mb-6">
            Designing Product Through Clarity, Not Spectacle
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-[52ch] text-pretty mb-8">
            Owning live products, shipping continuous UX improvements, and guiding teams through real design decisions.
          </p>
          <div className="flex items-baseline gap-2 text-sm text-muted-foreground">
            <span>By Aryan Boonlia</span>
            <span className="text-border">·</span>
            <span>Product Designer</span>
            <span className="text-border">·</span>
            <span className="text-foreground font-medium">3+ years</span>
          </div>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="h-px bg-border my-12 md:my-16" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "600ms" }}>
        {[
          {
            title: "Solo Product Ownership",
            desc: "End-to-end responsibility for live products, from discovery to iteration.",
          },
          {
            title: "Client-Side UX Representation",
            desc: "Owning UX decisions while collaborating with external consultancies for achieving the best outcome.",
          },
          {
            title: "Enhancement-Led UX",
            desc: "Improving usability, workflows, and UX debt over long product lifecycles.",
          },
        ].map((pillar) => (
          <div key={pillar.title} className="text-center">
            <h3 className="font-serif text-lg md:text-xl text-foreground mb-3">{pillar.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[30ch] mx-auto">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
