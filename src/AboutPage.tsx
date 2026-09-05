import { ArrowDownToLine, ArrowLeft, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import portrait from './assets/uchenna-about-portrait.png';

const story = [
  {
    year: 'The beginning',
    title: 'Curiosity became a direction',
    text: 'My journey into technology began with a simple curiosity: how do the websites and applications we use every day actually work? I was drawn to the mix of logic and creativity, the ability to take an idea, solve a real problem, and turn it into something people can use. That curiosity grew into a commitment to learn software development and build digital products that are clear, useful, and reliable.',
  },
  {
    year: '2019 to 2022',
    title: 'Building my foundation',
    text: 'I studied Computer Science at the Institute of Management & Technology in Enugu, Nigeria, earning a Higher National Diploma. My education gave me a strong grounding in programming, software principles, and problem solving. More importantly, it taught me how to keep learning, an essential skill in a field that never stands still.',
  },
  {
    year: '2019 to 2021',
    title: 'My first professional steps',
    text: 'As a Web Development Intern at SkySkillHub, I learned how to turn designs into responsive, functional websites with HTML, CSS, and JavaScript. I worked with modern layout techniques, collaborated through Git and GitHub, and began to understand how thoughtful details can make an interface feel effortless.',
  },
  {
    year: '2021 to 2022',
    title: 'Moving into mobile',
    text: 'I continued at SkySkillHub as a Mobile App Development Intern, building cross platform applications with React Native. I integrated REST APIs, implemented navigation and state management, created reusable components, tested features, fixed bugs, and helped prepare applications for deployment.',
  },
  {
    year: '2023 to 2025',
    title: 'Engineering payment experiences',
    text: 'At Flutterwave, I worked as a Mobile App Developer on applications supporting digital payment experiences. I collaborated with product managers, designers, backend engineers, and other developers to implement features, integrate APIs, and improve application reliability and performance across multiple markets.',
  },
  {
    year: '2025 to Present',
    title: 'Building with purpose',
    text: 'Today, I build personal and client projects across web, mobile, backend systems, and deployment. Based in Berlin, I continue to expand my skills while focusing on the same goal that brought me into tech: creating dependable products that make complex tasks feel simple for the people using them.',
  },
];

export function AboutPage() {
  return (
    <main className="about-page">
      <nav className="nav shell" aria-label="About page navigation">
        <a className="wordmark" href="/">UCHENNA<span>.</span></a>
        <div className="about-nav-actions">
          <a href="/#projects">Projects</a>
          <a className="outline-button" href="/#contact">Let’s talk</a>
        </div>
      </nav>

      <header className="about-hero shell">
        <div className="about-hero-copy">
          <a className="back-link" href="/"><ArrowLeft size={17} /> Back to portfolio</a>
          <p className="eyebrow">MY STORY · FROM ENUGU TO BERLIN</p>
          <h1>I followed my curiosity and found my craft.</h1>
          <p>My path into technology has been shaped by learning, experimentation, teamwork, and a steady desire to build things that are genuinely useful.</p>
          <a className="solid-button" href="/Lebenslauf.pdf" download>Download my CV <ArrowDownToLine size={17} /></a>
        </div>
        <div className="about-portrait-graphic">
          <div className="about-shape about-shape-coral" />
          <div className="about-shape about-shape-sage" />
          <div className="about-photo-frame"><img src={portrait} alt="Uchenna Emmanuel Onyeisi" /></div>
          <span className="about-photo-caption">UCHENNA EMMANUEL ONYEISI<br />FULL STACK + MOBILE DEVELOPER</span>
          <span className="about-orbit">01</span>
        </div>
      </header>

      <section className="story-intro">
        <div className="shell story-intro-inner">
          <p className="eyebrow">THE JOURNEY</p>
          <blockquote>“For me, technology is where careful thinking meets the freedom to create.”</blockquote>
        </div>
      </section>

      <section className="story-timeline shell">
        {story.map((chapter, index) => (
          <article className="story-chapter" key={chapter.year}>
            <div className="chapter-marker"><span>{String(index + 1).padStart(2, '0')}</span><i /></div>
            <p className="chapter-year">{chapter.year}</p>
            <div><h2>{chapter.title}</h2><p>{chapter.text}</p></div>
          </article>
        ))}
      </section>

      <section className="about-principles">
        <div className="shell">
          <p className="eyebrow">HOW I WORK</p>
          <h2>Curious by nature.<br />Dependable by practice.</h2>
          <div className="principle-grid">
            <article><span>01</span><h3>Keep learning</h3><p>I stay open to new ideas, tools, and better ways of solving problems.</p></article>
            <article><span>02</span><h3>Build for people</h3><p>I make technical decisions with the end user’s experience in mind.</p></article>
            <article><span>03</span><h3>Own the details</h3><p>I care about reliability, clean implementation, and finishing work properly.</p></article>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <div className="shell about-footer-inner">
          <div><p className="eyebrow">WHAT’S NEXT?</p><h2>Let’s build something useful together.</h2></div>
          <div className="about-footer-links">
            <a href="mailto:Onyeisiuchenna@gmail.com"><Mail /> Email me</a>
            <span><MapPin /> Berlin, Germany</span>
            <a href="https://github.com/Alexweb1997" target="_blank" rel="noreferrer"><Github /> GitHub</a>
            <a href="https://www.linkedin.com/in/uchenna-onyeisi-4772b0360/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          </div>
          <a className="footer-button" href="mailto:Onyeisiuchenna@gmail.com">Start a conversation <ArrowUpRight /></a>
        </div>
      </footer>
    </main>
  );
}
