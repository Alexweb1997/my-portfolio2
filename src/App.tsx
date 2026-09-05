import { ArrowDownToLine, ArrowUpRight, ChevronLeft, ChevronRight, Github, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import portrait from './assets/uchenna-hero-portrait.png';
import restaurant from './assets/project-restaurant.jpg';
import pesto from './assets/project-pesto.jpg';
import luxe from './assets/project-luxefashion.jpg';
import realEstate from './assets/project-real-estate.jpg';
import codeNext from './assets/project-codenext.webp';
import eduZen from './assets/project-eduzen.jpg';
import nexus from './assets/project-nexus.jpg';
import zippyEats from './assets/IMG_5806.jpg';
import eventPlanner from './assets/IMG_5856.JPG';
import fieldService from './assets/mobile-worker-header-1024x604.jpg.webp';
import todoList from './assets/to-do-list-app-2.jpg';
import quickStaff from './assets/project-quickstaff.png';

const projects = [
  { number: '01', title: 'Restaurant Website', subtitle: 'Restaurant & ordering', image: restaurant, tags: ['HTML', 'CSS', 'JavaScript'], demo: 'https://emberandash.netlify.app' },
  { number: '02', title: 'Pesto Restaurant', subtitle: 'Restaurant experience', image: pesto, tags: ['React', 'Responsive Design'], demo: 'https://pesto-restaurant-project.netlify.app' },
  { number: '03', title: 'LuxeFashion', subtitle: 'E-commerce experience', image: luxe, tags: ['React', 'E-commerce', 'Payments'], demo: 'https://luxefashion-project.netlify.app' },
  { number: '04', title: 'Real Estate Listing', subtitle: 'Property platform', image: realEstate, tags: ['React', 'Maps', 'Listings'], demo: 'https://real-estate-listing-project.netlify.app' },
  { number: '05', title: 'CodeNext Generation', subtitle: 'Technology education', image: codeNext, tags: ['React', 'Consulting', 'Responsive'], demo: 'https://codenext-generation.netlify.app' },
  { number: '06', title: 'EduZen Academy', subtitle: 'Learning platform', image: eduZen, tags: ['React', 'Education', 'Full Stack'], demo: 'https://eduzen-academy.netlify.app' },
  { number: '07', title: 'Nexus Consulting', subtitle: 'Consulting website', image: nexus, tags: ['React', 'Business', 'Web Design'], demo: 'https://nexus-consulting-project.netlify.app' },
  { number: '08', title: 'ZippyEats Mobile App', subtitle: 'Food delivery application', image: zippyEats, tags: ['React Native', 'API Integration', 'Realtime'], demo: 'https://example.com' },
  { number: '09', title: 'Event Planner', subtitle: 'Event management platform', image: eventPlanner, tags: ['React', 'Calendar', 'Full Stack'], demo: 'https://event-planner-project1.netlify.app' },
  { number: '10', title: 'Pet Care Mobile App', subtitle: 'Pet health and care', image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1200&q=85', tags: ['React Native', 'Health Tracking', 'Mobile'], demo: 'https://preview.builtwithrocket.new/pet-care-qkqfu69' },
  { number: '11', title: 'Sonara Player', subtitle: 'Music streaming player', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85', tags: ['React Native', 'Audio Streaming', 'Mobile'], demo: 'https://preview.builtwithrocket.new/sonara-player-uu3pi80' },
  { number: '12', title: 'Gym Management Mobile App', subtitle: 'Fitness management', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85', tags: ['React Native', 'Fitness', 'Scheduling'], demo: 'https://preview.builtwithrocket.new/gym-management-9lpq443' },
  { number: '13', title: 'Field Service Worker', subtitle: 'Field operations mobile app', image: fieldService, tags: ['React Native', 'GPS Tracking', 'Task Management'], demo: 'https://preview.builtwithrocket.new/field-service-worker-8k6rs24' },
  { number: '14', title: 'ToDo List Mobile App', subtitle: 'Personal productivity', image: todoList, tags: ['React Native', 'Productivity', 'Reminders'], demo: 'https://preview.builtwithrocket.new/to-do-list-5ih1a25' },
  { number: '15', title: 'QuickStaff', subtitle: 'Flexible jobs, instantly', image: quickStaff, tags: ['Web App', 'Jobs', 'Staffing'], demo: 'https://quickstaffs.com' },
];

const capabilities = [
  ['Web Applications', 'Fast, accessible, responsive products built with modern frontend tools.'],
  ['Mobile Applications', 'Cross-platform mobile experiences with React Native and Expo.'],
  ['Backend & APIs', 'Reliable Node.js APIs, authentication, and database integrations.'],
  ['Cloud & Deployment', 'Production deployments using Vercel, Fly.io, Supabase, and more.'],
];

const technologies = ['React', 'React Native', 'TypeScript', 'JavaScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Vercel', 'Fly.io', 'Resend', 'Git', 'GitHub', 'VS Code'];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [techStart, setTechStart] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const visibleTechnologies = Array.from({ length: 6 }, (_, index) => technologies[(techStart + index) % technologies.length]);
  const moveTechnologies = (direction: number) => setTechStart((current) => (current + direction + technologies.length) % technologies.length);

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

      <div className="tech-strip" aria-label="Technologies I use">
        <button onClick={() => moveTechnologies(-1)} aria-label="Show previous technologies"><ChevronLeft /></button>
        <div className="tech-window">
          {visibleTechnologies.map((tech, index) => <span key={`${tech}-${index}`}>{tech}</span>)}
        </div>
        <button onClick={() => moveTechnologies(1)} aria-label="Show more technologies"><ChevronRight /></button>
      </div>

      <section className="projects shell section" id="projects">
        <div className="section-title"><div><p className="eyebrow">PROJECTS · 15</p><h2>Things<br />I’ve built.</h2></div></div>
        <div className="project-grid">
          {(showAllProjects ? projects : projects.slice(0, 3)).map((project) => (
            <a className="project-card" href={project.demo} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-copy">
                <span className="project-number">{project.number} —</span><h3>{project.title}</h3><p>{project.subtitle}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <img src={project.image} alt={`${project.title} project cover`} /><ArrowUpRight className="project-arrow" />
            </a>
          ))}
        </div>
        <div className="projects-toggle-wrap">
          <button className="projects-toggle" onClick={() => setShowAllProjects((current) => !current)}>
            {showAllProjects ? 'Show fewer projects' : `See more projects (${projects.length - 3})`}
            {showAllProjects ? <ChevronLeft /> : <ChevronRight />}
          </button>
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
            <article><span>2025—Present</span><div><h3>Independent Developer</h3><p>Building Personal &amp; Client Projects</p></div></article>
            <article><span>2023—2025</span><div><h3>Flutterwave</h3><p>Mobile App Developer</p></div></article>
            <article><span>2021—2022</span><div><h3>SkySkillHub</h3><p>Mobile App Development Intern</p></div></article>
            <article><span>2019—2021</span><div><h3>SkySkillHub</h3><p>Web Development Intern</p></div></article>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-grid">
          <div className="contact-intro">
            <p className="eyebrow">GET IN TOUCH</p><h2>Have an idea?<br />Let’s make it real.</h2>
            <div className="contact-links">
              <a href="mailto:Onyeisiuchenna@gmail.com"><Mail /> Onyeisiuchenna@gmail.com</a><span><MapPin /> Berlin, Germany</span>
              <a href="https://github.com/Alexweb1997" target="_blank" rel="noreferrer"><Github /> GitHub</a>
              <a href="https://www.linkedin.com/in/uchenna-onyeisi-4772b0360/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            </div>
          </div>
          <form className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden-field"><label>Don’t fill this out: <input name="bot-field" /></label></p>
            <div className="form-row">
              <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
            </div>
            <label>Message<textarea name="message" rows={5} placeholder="Tell me about your project..." required /></label>
            <button className="footer-button" type="submit">Send message <ArrowUpRight /></button>
          </form>
        </div>
      </footer>
    </main>
  );
}
