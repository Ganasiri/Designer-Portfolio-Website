const Footer = () => {
  return (
    <footer className="px-6 md:px-16 max-w-[1440px] mx-auto py-12 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <a
            href="#resume"
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Resume
          </a>
          <a
            href="https://linkedin.com/in/aryanboonlia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="#about"
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © Aryan Boonlia · Product Designer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
