import myImg from '../assets/portfolio Image.png'
import cheffestImage from "../assets/ProjectsImg/cheffest.png";
import ecommerceImage from "../assets/ProjectsImg/e-commerce.png";
import evenzaImage from "../assets/ProjectsImg/evenza.png";
import geroldImage from "../assets/ProjectsImg/gerold.png";
import pumpInstaImage from "../assets/ProjectsImg/pump-insta.png";
import tourysImage from "../assets/ProjectsImg/tourys.png";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ChevronDown,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  Radio,
} from "lucide-react";

import { SpaceScene } from "@/components/space-scene";
import { ParallaxSpaceBackground } from "@/components/parallax-space-background";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";

const navItems = [
  ["HOME", "#home"],
  ["ABOUT", "#about"],
  ["SKILLS", "#skills"],
  ["PROJECTS", "#projects"],
  ["EXPERIENCE", "#journey"],
  ["RESUME", "#archive"],
  ["CONTACT", "#contact"],
] as const;

const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "Firebase"];

const journey = ["EXPERIENCE-", "EDUCATION-Learning Web Development at Creative IT Uttara Campus, Studying B.Sc. in Computer Science & Engineering at World University of Bangladesh", "MILESTONE-Successfully built and deployed multiple responsive web projects, strengthening my skills in React.js, JavaScript, Tailwind CSS, and modern front-end development."];

type Project = {
  title: string;
  description: string;
  technologies: string;
  visual: string;
  github?: string;
  live?: string;
  caseStudy?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "E-Commerce",
    visual: ecommerceImage,
    description: "A modern and responsive e-commerce website designed to provide a smooth and user-friendly shopping experience. It features a clean interface, product browsing, detailed product views, and an intuitive shopping workflow, with a focus on responsive design and usability.",
    technologies: "React.js | Javascript | Tailwind CSS | React-Router | Redux/ Context API | Axios/ Fetch API | Vite | Vercel deployment",
    github: "https://github.com/dewanxt/e-CommerceWebsite",
    live: "https://e-commerce-website-five-alpha-49.vercel.app/",
    caseStudy: "",
    featured: false,
  },
  {
    title: "Gerold",
    visual: geroldImage,
    description: "A responsive portfolio website designed with a modern UI to present personal projects and professional skills in a clear and engaging way.",
    technologies: "React.js | Javascript | Tailwind CSS | React-Router | Redux/ Context API | Axios/ Fetch API | Vite | Vercel deployment",
    github: "https://github.com/dewanxt/Gerold",
    live: "https://gerold-delta.vercel.app/",
    caseStudy: "",
    featured: false,
  },
  {
    title: "Evenza",
    visual: evenzaImage,
    description: "A modern and responsive event website designed to showcase events, speakers, schedules, and event-related information through a clean and engaging interface.",
    technologies: "React.js | Javascript | Tailwind CSS | React-Router | Redux/ Context API | Axios/ Fetch API | Vite | Vercel deployment",
    github: "https://github.com/dewanxt/Evenza",
    live: "https://evenza-neon.vercel.app/",
    caseStudy: "",
    featured: false,
  },
  {
    title: "Cheffest",
    visual: cheffestImage,
    description: "A modern and responsive food/recipe website designed with a clean interface to showcase recipes and provide an engaging browsing experience.",
    technologies: "React.js | Javascript | Tailwind CSS | React-Router | React-Icons | Redux | Vite | Vercel deployment",
    github: "https://github.com/dewanxt/Cheffest",
    live: "https://cheffiest.vercel.app/",
    caseStudy: "",
    featured: false,
  },
  {
    title: "Tourys",
    visual: tourysImage,
    description: "A modern and responsive travel website showcasing popular destinations, travel experiences, local culture, and tour packages through an engaging and visually appealing interface.",
    technologies: "HTML5 | CSS3 | Tailwind CSS | Vercel deployment",
    github: "https://github.com/dewanxt/Tourys",
    live: "https://tourys-lake.vercel.app/",
    caseStudy: "",
    featured: false,
  },
  {
    title: "Pump-Insta",
    visual: pumpInstaImage,
    description: "A responsive Instagram-inspired social media interface designed with a clean layout and familiar social networking elements.",
    technologies: "HTML5 | CSS3 | Tailwind CSS | Vercel deployment",
    github: "https://github.com/dewanxt/pumpInsta",
    live: "https://pump-insta-ochre.vercel.app/",
    caseStudy: "",
    featured: false,
  },
];

const skillCategories = [
  { name: "FRONT-END DEVELOPMENT", technologies: "HTML5 / CSS3 / JavaScript / React.js / Bootstrap / Tailwind CSS" },
  { name: "BACK-END DEVELOPMENT", technologies: "ADD TECHNOLOGIES" },
  { name: "UI / UX", technologies: "ADD TECHNOLOGIES" },
  { name: "DATABASES", technologies: "Firebase" },
  { name: "TOOLS & DEVOPS", technologies: "ADD TECHNOLOGIES" },
  { name: "OTHER TECHNOLOGIES", technologies: "ADD TECHNOLOGIES" },
];

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <header className="section-heading">
      <p className="technical-label">{label}</p>
      <h2>{title}</h2>
    </header>
  );
}

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const sections = navItems.map(([, href]) => document.querySelector(href)).filter(Boolean) as Element[];
      const current = sections.reduce((closest, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - window.innerHeight * 0.35);
        return distance < closest.distance ? { id: section.id, distance } : closest;
      }, { id: "home", distance: Number.POSITIVE_INFINITY });
      setActiveSection(current.id);
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maximum > 0 ? Math.min(window.scrollY / maximum, 1) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="site-header">
      <span className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <a href="#home" className="wordmark" aria-label="Dewan, return home">
        DEWAN<span>.</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} aria-current={activeSection === href.slice(1) ? "location" : undefined}>
            {label}
          </a>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="mobile-menu" aria-label="Open navigation">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="mobile-panel">
          <SheetTitle className="technical-label">NAVIGATION</SheetTitle>
          <SheetDescription className="sr-only">Portfolio sections</SheetDescription>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href], index) => (
              <SheetClose asChild key={href}>
                <a href={href}>
                  <span>0{index + 1}</span> {label}
                </a>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function ProfileImage() {
  return (
    <div className="portrait-field" aria-label="Profile portrait placeholder">
      <div className="portrait-orbit portrait-orbit-one" />
      <div className="portrait-orbit portrait-orbit-two" />
      <div className="portrait-frame">
        <div className="portrait-light" />
        <div className="portrait-placeholder">
          <img src={myImg} alt="" />
        </div>
        <span className="portrait-coordinate">COORDINATES / NOT SET</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <SpaceScene />
      <div className="hero-copy">
        <p className="technical-label hero-status"><span /> SIGNAL DETECTED / FRONT-END SYSTEMS</p>
        <h1>MD. SABBiR<br />HOSSAIN DEWAN</h1>
        <div className="hero-rule" />
        <p className="hero-role">FRONT-END DEVELOPER</p>
        <p className="hero-intro"><strong>Building digital experiences across the universe of the web.</strong> I create modern, responsive, and engaging interfaces with a focus on usability, visual quality, and meaningful interaction.</p>
        <div className="hero-actions">
          <Button asChild variant="signal" size="lg">
            <a href="#about">EXPLORE MY UNIVERSE <ArrowDown /></a>
          </Button>
          <Button asChild variant="signalOutline" size="lg">
            <a href="#contact">SEND A TRANSMISSION <Radio /></a>
          </Button>
        </div>
      </div>
      <ProfileImage />
      <div className="hero-index technical-label" aria-hidden="true">001 / INFINITE</div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="content-section about-section">
      <SectionHeading label="01 — ORIGIN" title="THE HUMAN BEHIND THE CODE" />
      <div className="about-grid">
        <p className="about-lead">I build at the intersection of <em>design, technology,</em> and human experience.</p>
        <div className="about-copy">
          <p>I’m Md. Sabbir Hossain Dewan, a Front-End Developer focused on building modern, responsive, and engaging web experiences. I work primarily with HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, and Firebase, turning ideas and concepts into clean, functional interfaces.</p>
          <p>I enjoy exploring the intersection of design, technology, and user experience—creating websites that are not only visually compelling but also intuitive, responsive, and built with attention to detail.</p>
          <p>Currently, I’m continuing to expand my skills, experiment with new technologies, and build projects that challenge me to think beyond conventional interfaces.</p>
        </div>
      </div>
      <div className="profile-data" aria-label="Professional profile details">
        <div><span>NAME</span><strong>MD. SABBiR HOSSAIN DEWAN</strong></div>
        <div><span>SPECIALIZATION</span><strong>FRONT-END DEVELOPMENT</strong></div>
        <div><span>LOCATION</span><strong>Dhaka, Bangladesh</strong></div>
        <div><span>AVAILABILITY</span><strong>+8801976498255</strong></div>
      </div>
      <blockquote>TURNING IDEAS INTO DIGITAL EXPERIENCES THAT FEEL PURPOSEFUL, SEAMLESS, AND MEMORABLE.</blockquote>
    </section>
  );
}

function SkillsConstellation() {
  return (
    <section id="skills" className="content-section skills-section">
      <SectionHeading label="02 — TECHNOLOGY" title="MY TECHNOLOGY CONSTELLATION" />
      <p className="section-note">A living map of the technologies in my orbit.</p>
      <div className="constellation" role="list" aria-label="Technology skills">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
          <path d="M100 160 L260 80 L410 215 L585 105 L760 205 L900 105 M410 215 L495 395 L760 205 L845 390" />
        </svg>
        {skills.map((skill, index) => (
          <div key={skill} className={`skill-node skill-${index + 1}`} role="listitem">
            <span className="node-point" />
            <span>{skill}</span>
          </div>
        ))}
        <span className="constellation-caption technical-label">CONSTELLATION / EDITABLE TECHNOLOGY MAP</span>
      </div>
      <div className="skill-categories">
        {skillCategories.map((category, index) => (
          <article key={category.name}>
            <span className="technical-label">NODE {String(index + 1).padStart(2, "0")}</span>
            <h3>{category.name}</h3>
            <p>{category.technologies}</p>
            <div className="skill-placeholder-row">
              <span>DESCRIPTION — EDITABLE</span>
              <span>RELATED MISSIONS — PENDING</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GravitationalVisual() {
  return (
    <div className="gravity-transition" aria-hidden="true">
      <div className="gravity-copy technical-label">GRAVITATIONAL EVENT / 03</div>
      <div className="black-hole"><span /><span /></div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index).padStart(2, "0");
  return (
    <article className="project-card">
      {/*
      <div className="project-visual">
        <img src={project.visual} alt={`${project.title} project preview`} />
        <div className="project-grid" />
        <strong>{number}</strong>
      </div>
      */}
      <div className="project-data">
        <p className="technical-label">MISSION {number}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-meta">
          <span>{project.technologies}</span>
          {project.featured && <span>FEATURED</span>}
          {project.github && <a className="project-link" href={project.github} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight /></a>}
          {project.live && <a className="project-link" href={project.live} target="_blank" rel="noreferrer">LIVE <ArrowUpRight /></a>}
          {project.caseStudy && <a className="project-link" href={project.caseStudy} target="_blank" rel="noreferrer">CASE STUDY <ArrowUpRight /></a>}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="content-section projects-section">
      <SectionHeading label="03 — MISSIONS" title="SELECTED MISSIONS" />
      <div className="projects-intro">
        <p>Future work will be catalogued here as a sequence of discovered missions.</p>
        <span className="technical-label">ARCHIVE STATUS / AWAITING DATA</span>
      </div>
      <div className="project-list">{projects.map((project, index) => <ProjectCard key={`${project.title}-${index}`} project={project} index={index + 1} />)}</div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="content-section journey-section">
      <SectionHeading label="04 — ORBIT" title="PROFESSIONAL JOURNEY" />
      <div className="timeline">
        {journey.map((item, index) => (
          <details key={item} className="timeline-entry">
            <div className="orbit-marker"><span /></div>
            <summary>
              <span className="technical-label">ORBIT 0{index + 1}</span>
              <strong>{item}</strong>
              <ChevronDown aria-hidden="true" />
            </summary>
            <div className="timeline-details">
              <span>COMPANY — PENDING</span><span>POSITION — PENDING</span>
              <span>DATES — PENDING</span><span>LOCATION — PENDING</span>
              <span>RESPONSIBILITIES — PENDING</span><span>ACHIEVEMENTS — PENDING</span>
              <span>TECHNOLOGIES — PENDING</span>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function ResumeArchive() {
  return (
    <section id="archive" className="content-section archive-section">
      <SectionHeading label="05 — ARCHIVE" title="MISSION ARCHIVE" />
      <div className="archive-record">
        <div>
          <span className="technical-label">DOCUMENT / 001</span>
          <h3>RESUME — COMING SOON</h3>
          <p>A dedicated archive location is reserved for the future resume file.</p>
          <div className="archive-actions">
            <Button variant="signal" size="lg" disabled><Download /> DOWNLOAD RESUME</Button>
            <Button variant="signalOutline" size="lg" disabled><FileText /> VIEW RESUME</Button>
          </div>
        </div>
        <div className="archive-lock" aria-hidden="true"><span />SEALED</div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="content-section contact-section">
      <SectionHeading label="06 — TRANSMISSION" title="SEND A TRANSMISSION" />
      <div className="contact-grid">
        <div className="contact-copy">
          <p>Have an idea, project, or opportunity? Establish a connection.</p>
          <span className="availability-status technical-label"><i /> AVAILABILITY / CONTACT FOR STATUS</span>
          <a href="mailto:sabbirdewann@gmail.com">sabbirdewann@gmail.com <ArrowUpRight /></a>
          <div className="social-links">
            <a href="https://github.com/dewanxt" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/in/dewanxt/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="mailto:sabbirdewann@gmail.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={sent ? "transmission-form signal-sent" : "transmission-form"}>
          <label htmlFor="name">NAME</label>
          <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
          <label htmlFor="email">EMAIL</label>
          <Input id="email" name="email" type="email" required autoComplete="email" placeholder="Your email address" />
          <label htmlFor="subject">SUBJECT</label>
          <Input id="subject" name="subject" required placeholder="Transmission subject" />
          <label htmlFor="message">MESSAGE</label>
          <Textarea id="message" name="message" required rows={5} placeholder="Your transmission" />
          <Button type="submit" variant="signal" size="lg">TRANSMIT MESSAGE <Radio /></Button>
          <div className="signal-feedback" role="status" aria-live="polite">
            {sent && <><span /><span /><span /> SIGNAL RECEIVED — LOCAL CONFIRMATION</>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <a href="#home" className="wordmark">DEWAN<span>.</span></a>
      <div className="footer-statement">
        <p>BUILT WITH CURIOSITY, PRECISION, AND A LOVE FOR THE UNKNOWN.</p>
        <span>© 2026 MD. SABBiR HOSSAIN DEWAN</span>
      </div>
      <a href="#home" className="back-to-top" aria-label="Back to top"><ArrowUp /></a>
    </footer>
  );
}

export function Portfolio() {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#about">Skip to content</a>
      <ParallaxSpaceBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsConstellation />
        <GravitationalVisual />
        <Projects />
        <Journey />
        <ResumeArchive />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}