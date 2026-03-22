import { useEffect, useRef, useState } from "react";

const Editorial = () => {
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="px-6 md:px-16 max-w-[1440px] mx-auto py-24 md:py-32"
    >
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-border" />
        <h2
          className={`font-serif italic text-3xl md:text-4xl text-foreground ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Editorial
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <blockquote
        className={`font-serif italic text-xl md:text-2xl lg:text-3xl text-foreground text-center leading-[1.4] max-w-[48ch] mx-auto ${
          visible ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: "200ms" }}
      >
        "I prioritize usability, clarity, and long-term product outcomes over visual spectacle."
      </blockquote>
    </section>
  );
};

export default Editorial;
