import { ArrowDownToLine, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import portrait from './assets/uchenna-hero-portrait.png';
import restaurant from './assets/project-restaurant.jpg';
import pesto from './assets/project-pesto.jpg';
import luxe from './assets/project-luxefashion.jpg';
import realEstate from './assets/project-real-estate.jpg';
import codeNext from './assets/project-codenext.webp';
import eduZen from './assets/project-eduzen.jpg';
import nexus from './assets/project-nexus.jpg';

const projects = [
  { number: '01', title: 'Restaurant Website', subtitle: 'Restaurant & ordering', image: restaurant, tags: ['HTML', 'CSS', 'JavaScript'], demo: 'https://emberandash.netlify.app' },
  { number: '02', title: 'Pesto Restaurant', subtitle: 'Restaurant experience', image: pesto, tags: ['React', 'Responsive Design'], demo: 'https://pesto-restaurant-project.netlify.app' },
  { number: '03', title: 'LuxeFashion', subtitle: 'E-commerce experience', image: luxe, tags: ['React', 'E-commerce', 'Payments'], demo: 'https://luxefashion-project.netlify.app' },
  { number: '04', title: 'Real Estate Listing', subtitle: 'Property platform', image: realEstate, tags: ['React', 'Maps', 'Listings'], demo: 'https://real-estate-listing-project.netlify.app' },
  { number: '05', title: 'CodeNext Generation', subtitle: 'Technology education', image: codeNext, tags: ['React', 'Consulting', 'Responsive'], demo: 'https://codenext-generation.netlify.app' },
  { number: '06', title: 'EduZen Academy', subtitle: 'Learning platform', image: eduZen, tags: ['React', 'Education', 'Full Stack'], demo: 'https://eduzen-academy.netlify.app' },
  { number: '07', title: 'Nexus Consulting', subtitle: 'Consulting website', image: nexus, tags: ['React', 'Business', 'Web Design'], demo: 'https://nexus-consulting-project.netlify.app' },
];

const capabilities = [
  ['Web Applications', 'Fast, accessible, responsive products built with modern frontend tools.'],
  ['Mobile Applications', 'Cross-platform mobile experiences with React Native and Expo.'],
  ['Backend & APIs', 'Reliable Node.js APIs, authentication, and database integrations.'],
  ['Cloud & Deployment', 'Production deployments using Vercel, Fly.io, Supabase, and more.'],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu}>UCHENNA<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#projects" onClick={closeMenu}>Projects</a><a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="outline-button" href="#contact" onClick={closeMenu}>Let’s talk</a>
        </div>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">FULL-STACK + MOBILE DEVELOPER · BERLIN</p>
          <h1>Building thoughtful digital experiences for web &amp; mobile.</h1>
          <p className="hero-description">I’m Uchenna Emmanuel Onyeisi. I turn ideas into reliable, user-focused products—from interface to backend.</p>
          <div className="hero-actions">
            <a className="solid-button" href="#projects">See my work</a>
            <a className="outline-button" href="/Lebenslauf.pdf" download>Download CV <ArrowDownToLine size={17} /></a>
          </div>
          <p className="availability"><span /> Open to opportunities <ArrowUpRight size={18} /></p>
        </div>
        <div className="portrait-wrap">
          <div className="shape shape-coral" /><div className="shape shape-sage" />
          <img src={portrait} alt="Uchenna Emmanuel Onyeisi" />
          <p className="portrait-note">BASED IN BERLIN / WORKING WORLDWIDE</p><i className="yellow-mark" />
        </div>
      </section>

      <div className="tech-strip" aria-label="Technologies">
        {['React', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase'].map((tech) => <span key={tech}>{tech}</span>)}
      </div>

      <section className="projects shell section" id="projects">
        <div className="section-title"><div><p className="eyebrow">SELECTED WORK</p><h2>A few things<br />I’ve built.</h2></div></div>
        <div className="project-grid">
          {projects.map((project) => (
            <a className="project-card" href={project.demo} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-copy">
                <span className="project-number">{project.number} —</span><h3>{project.title}</h3><p>{project.subtitle}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <img src={project.image} alt={`${project.title} project cover`} /><ArrowUpRight className="project-arrow" />
            </a>
          ))}
        </div>
      </section>

      <section className="about section shell" id="about">
        <div>
          <p className="eyebrow">ABOUT ME</p>
          <h2>Good products feel simple—even when the work behind them <em>isn’t.</em></h2>
          <p>I’m a Full Stack and Mobile Developer based in Berlin. I enjoy solving real problems, writing clean code, and crafting experiences people love to use.</p>
        </div>
        <div className="capabilities">
          {capabilities.map(([title, description], index) => (
            <div className="capability" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></div>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="shell experience-inner">
          <div><p className="eyebrow">EXPERIENCE</p><h2>Where I’ve<br />worked.</h2></div>
          <div className="timeline">
            <article><span>2023—2025</span><div><h3>Flutterwave</h3><p>Mobile App Developer</p></div></article>
            <article><span>2021—2022</span><div><h3>SkySkillHub</h3><p>Mobile App Development Intern</p></div></article>
            <article><span>2019—2021</span><div><h3>SkySkillHub</h3><p>Web Development Intern</p></div></article>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-grid">
          <div><p className="eyebrow">GET IN TOUCH</p><h2>Have an idea?<br />Let’s make it real.</h2></div>
          <div className="contact-links">
            <a href="mailto:Onyeisiuchenna@gmail.com"><Mail /> Onyeisiuchenna@gmail.com</a><span><MapPin /> Berlin, Germany</span>
            <a href="https://github.com/Alexweb1997" target="_blank" rel="noreferrer"><Github /> GitHub</a>
            <a href="https://www.linkedin.com/in/uchenna-onyeisi-4772b0360/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          </div>
          <a className="footer-button" href="mailto:Onyeisiuchenna@gmail.com">Start a conversation <ArrowUpRight /></a>
        </div>
      </footer>
    </main>
  );
}
