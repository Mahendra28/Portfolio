import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import heroImage from './assets/portfolio-hero.png';

const profile = {
  name: 'Mahendra',
  role: 'Frontend Developer',
  tagline: 'I build responsive, fast, and interactive web experiences.',
  summary:
    'A React developer focused on clean interfaces, useful details, and smooth user experiences across every device.',
  email: 'mahendra@example.com',
  location: 'India',
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

const stats = [
  { value: '12+', label: 'Projects' },
  { value: '2+', label: 'Years Learning' },
  { value: '99%', label: 'Responsive Focus' },
];

const skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Node.js',
  'Git',
  'REST APIs',
  'UI Design',
  'Responsive Design',
];

const projects = [
  {
    title: 'TaskFlow Dashboard',
    type: 'Web App',
    description:
      'A productivity dashboard with project boards, analytics cards, and a clean task workflow.',
    stack: ['React', 'CSS Grid', 'Local Storage'],
    live: '#',
    code: '#',
  },
  {
    title: 'ShopEase Storefront',
    type: 'E-Commerce',
    description:
      'A responsive product browsing experience with filters, cart interactions, and polished mobile layouts.',
    stack: ['React', 'API', 'Responsive UI'],
    live: '#',
    code: '#',
  },
  {
    title: 'LearnHub Platform',
    type: 'Education',
    description:
      'A course landing and lesson interface designed for readability, progress tracking, and quick navigation.',
    stack: ['React', 'Forms', 'Accessibility'],
    live: '#',
    code: '#',
  },
  {
    title: 'Portfolio Studio',
    type: 'Portfolio',
    description:
      'A personal portfolio system with animated sections, project cards, and a reusable content structure.',
    stack: ['React', 'Vite', 'CSS'],
    live: '#',
    code: '#',
  },
];

const timeline = [
  {
    year: '2026',
    title: 'React Portfolio Website',
    text: 'Created interactive portfolio experiences with responsive layouts and reusable components.',
  },
  {
    year: '2025',
    title: 'Frontend Practice Projects',
    text: 'Built dashboards, landing pages, forms, and API-driven interfaces to sharpen practical skills.',
  },
  {
    year: '2024',
    title: 'Web Development Foundation',
    text: 'Learned HTML, CSS, JavaScript, Git workflows, and modern frontend development basics.',
  },
];

const testimonials = [
  {
    quote: 'Clear communication, fast iteration, and a great eye for responsive details.',
    name: 'Sample Client',
  },
  {
    quote: 'The interface felt polished on desktop and mobile from the first review.',
    name: 'Project Partner',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = useMemo(() => ['All', ...new Set(projects.map((item) => item.type))], []);
  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  const scrollToSection = (label) => {
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className={darkMode ? 'site dark' : 'site'}>
      <header className="navbar">
        <button className="brand" onClick={() => scrollToSection('Home')} aria-label="Go to home">
          <span>M</span>
          {profile.name}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollToSection(item)}>
              {item}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label="Toggle color theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="icon-button menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={16} />
              Available for frontend projects
            </span>
            <h1>
              Hi, I am {profile.name}. <span>{profile.role}</span>
            </h1>
            <p>{profile.summary}</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollToSection('Projects')}>
                View Projects <ArrowRight size={18} />
              </button>
              <a className="secondary-button" href={profile.resumeUrl}>
                Resume <Download size={18} />
              </a>
            </div>
            <div className="stats" aria-label="Portfolio statistics">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer portfolio hero image">
            <img src={heroImage} alt="Modern developer workspace with code dashboard" />
          </div>
        </section>

        <section id="about" className="section split-section">
          <div>
            <span className="section-kicker">About</span>
            <h2>Design-minded development with practical engineering habits.</h2>
          </div>
          <div className="rich-text">
            <p>
              I enjoy turning ideas into interfaces that feel smooth, readable, and useful. This
              template is built so you can quickly replace the text, links, projects, and skills
              with your own details.
            </p>
            <p>
              The layout uses reusable React data arrays, responsive CSS, keyboard-friendly buttons,
              and interactive filters so the portfolio feels complete while staying simple to edit.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span className="section-kicker">Skills</span>
            <h2>Tools I use to build clean web experiences.</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <div className="skill-pill" key={skill}>
                <CheckCircle2 size={18} />
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading with-actions">
            <div>
              <span className="section-kicker">Projects</span>
              <h2>Selected work you can replace with your real projects.</h2>
            </div>
            <div className="filter-group" aria-label="Project filters">
              {filters.map((filter) => (
                <button
                  className={activeFilter === filter ? 'active' : ''}
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">
                  {project.type === 'Web App' ? <Code2 /> : <BriefcaseBusiness />}
                </div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <small key={item}>{item}</small>
                  ))}
                </div>
                <div className="card-actions">
                  <a href={project.live}>Live <ExternalLink size={16} /></a>
                  <a href={project.code}>Code <Github size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section timeline-section">
          <div className="section-heading">
            <span className="section-kicker">Experience</span>
            <h2>A simple timeline for your learning and work history.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article key={item.title}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials" aria-label="Testimonials">
          {testimonials.map((item) => (
            <blockquote key={item.name}>
              <p>{item.quote}</p>
              <cite>{item.name}</cite>
            </blockquote>
          ))}
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <span className="section-kicker">Contact</span>
            <h2>Have a project idea? Let us build something useful.</h2>
            <p>
              Replace these links with your real email, GitHub, LinkedIn, and resume when you are
              ready to publish.
            </p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
              <a href={profile.socials.github}><Github size={18} /> GitHub</a>
              <a href={profile.socials.linkedin}><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="your@email.com" />
            </label>
            <label>
              Message
              <textarea rows="5" placeholder="Tell me about your project" />
            </label>
            <button className="primary-button" type="submit">
              Send Message <Send size={18} />
            </button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 {profile.name}. Built with React and Vite.</p>
        <span>{profile.location}</span>
      </footer>
    </div>
  );
}

export default App;
