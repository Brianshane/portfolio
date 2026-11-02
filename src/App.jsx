import { useEffect, useState } from "react";
import brianProfile from "../profile/brian.jpeg";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = ["HTML", "CSS", "Java", "Spring Boot", "Git & GitHub", "Linux"];

const projects = [
  {
    name: "Timetable Generator",
    description:
      "A timetable system that helps generate university class schedules while reducing timetable conflicts.",
    technology: "Java, Swing",
    link: "https://github.com/Brianshane/4th.git",
  },
  {
    name: "Hostel Management System",
    description: "A system designed to help manage hostels, rooms and tenants.",
    technology: "Java, Spring Boot",
    link: "https://github.com/Brianshane/kejani.git",
  },
  {
    name: "My First Website",
    description: "A simple website created while learning HTML and CSS.",
    technology: "HTML, CSS",
    link: "https://github.com/alcopinex/Website.txt.git",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setShowBackToTop(window.scrollY > 420);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`site-shell${darkMode ? " dark-theme" : ""}`}>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          BK<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>

        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            type="button"
            aria-pressed={darkMode}
            onClick={() => setDarkMode((isDark) => !isDark)}
          >
            <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
            {darkMode ? "Light mode" : "Dark mode"}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science Graduate · Kenya</p>
            <h1>
              Hello, I’m <span>Brian.</span>
              <br />
              I build things for the web.
            </h1>
            <p className="hero-intro">
              I’m a beginner programmer learning web development and building my
              skills one project at a time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-frame">
              <img src={brianProfile} alt="Brian Kirui" />
            </div>
            <span className="portrait-caption">Curious by nature. Builder by choice.</span>
          </div>
          <a className="scroll-cue" href="#about">
            <span aria-hidden="true">↓</span> Scroll to explore
          </a>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">A little about me</p>
            <h2>Curiosity keeps me moving.</h2>
          </div>
          <div className="about-copy">
            <p>
              My name is Brian. I am a Computer Science graduate interested in
              software development and web development.
            </p>
            <p>
              I enjoy learning new programming languages, studying philosophy
              and history, and going on nature walks and hikes.
            </p>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">What I work with</p>
              <h2>Skills I’m growing.</h2>
            </div>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{skill}</span>
                  <span className="skill-arrow" aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Things I’ve made.</h2>
            <p className="section-description">
              A few projects from my journey learning to build useful software.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <span className="project-number">
                    0{index + 1} <span aria-hidden="true">/ 0{projects.length}</span>
                  </span>
                  <span className="project-mark" aria-hidden="true">↗</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">
                  <span>Built with</span> {project.technology}
                </p>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow">Have a project in mind?</p>
              <h2>Let’s make something meaningful.</h2>
              <p className="contact-copy">
                I’m always happy to connect, learn, and talk about building for
                the web.
              </p>
            </div>
            <div className="contact-details">
              <a href="mailto:briankirui108@gmail.com">
                briankirui108@gmail.com <span aria-hidden="true">↗</span>
              </a>
              <a href="tel:+254729052835">+254 729 052 835</a>
              <a
                href="https://www.linkedin.com/in/brian-kirui-967a4023b"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home">
          BK<span>.</span>
        </a>
        <p>Designed and built by Brian Kirui · {new Date().getFullYear()}</p>
        <a className="back-to-top-link" href="#home">
          Back to top ↑
        </a>
      </footer>

      {showBackToTop && (
        <button
          className="back-to-top-button"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
