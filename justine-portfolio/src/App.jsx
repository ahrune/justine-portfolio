
import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          J<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <a href="#home" onClick={closeMenu}>Home</a>
  <a href="#about" onClick={closeMenu}>About</a>
  <a href="#skills" onClick={closeMenu}>Skills</a>
  <a href="#projects" onClick={closeMenu}>Projects</a>
  <a href="#contact" onClick={closeMenu}>Contact</a>
</div>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      <main className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            STUDENT WEB DEVELOPER
          </div>

          <p className="greeting">Hello, I'm</p>

          <h1>Justine<span>.</span></h1>

          <h2>
            Building my journey in
            <span> Web Development.</span>
          </h2>

          <p className="description">
            I'm a student passionate about creating websites
            and exploring the world of web development.
            Currently learning, improving, and building
            projects one step at a time.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#about" className="secondary-button">
              More About Me
            </a>
          </div>

          <div className="social-text">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>

          <div className="profile-card">
            <div className="card-top">
              <span>MY PROFILE</span>
              <span className="card-dots">● ● ●</span>
            </div>

            <div className="profile-avatar">J.</div>

            <h3>Justine</h3>
            <p>Student Web Developer</p>

            <div className="card-divider"></div>

            <div className="card-info">
              <span>Currently learning</span>
              <strong>React.js</strong>
            </div>

            <div className="card-info">
              <span>Focus</span>
              <strong>Frontend Development</strong>
            </div>

            <div className="card-footer">
              <span className="status-dot"></span>
              Always learning something new.
            </div>
          </div>

          <div className="floating-tag tag-one">
            &lt;/&gt; HTML & CSS
          </div>

          <div className="floating-tag tag-two">
            ✦ React Developer
          </div>
        </div>
      </main>

      <section className="about-section" id="about">
  <span className="section-label">01 / ABOUT ME</span>

  <h2>A little about <span>myself.</span></h2>

  <div className="about-content">
    <div className="about-text">
      <h3>My journey into <span>coding.</span></h3>

      <p>
        Hi! I'm Justine, a second-year BSIT student who is
        still exploring the world of programming and web
        development.
      </p>

      <p>
        I wasn't particularly interested in programming at
        first. That changed during my first year when I
        discovered inspiring developers and creators online.
        Their work motivated me to start learning web
        development and explore what I could create with code.
      </p>

      <p>
        What I enjoy most about coding is its complexity and
        creative freedom. Although there are limitations,
        I believe code gives us the ability to turn almost
        any idea into something real.
      </p>

      <p>
        My goal is to become a Frontend Developer. I'm excited
        to continue learning, improving my skills, taking on
        new challenges, and growing throughout my journey
        as a developer.
      </p>
    </div>

    <div className="about-details">
      <div className="about-detail-card">
        <span className="detail-number">01</span>
        <div>
          <h3>Education</h3>
          <p>2nd Year BSIT Student</p>
        </div>
      </div>

      <div className="about-detail-card">
        <span className="detail-number">02</span>
        <div>
          <h3>Interest</h3>
          <p>Web Development & Programming</p>
        </div>
      </div>

      <div className="about-detail-card">
        <span className="detail-number">03</span>
        <div>
          <h3>Current Focus</h3>
          <p>Frontend Development</p>
        </div>
      </div>

      <div className="about-detail-card">
        <span className="detail-number">04</span>
        <div>
          <h3>Future Goal</h3>
          <p>Become a Frontend Developer</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="about-section" id="projects">
        <span className="section-label">02 / MY WORK</span>
        <h2>Projects coming <span>soon.</span></h2>
        <p>
          This is where I'll showcase my development
          projects and the things I've created.
        </p>
      </section>
      <section className="skills-section" id="skills">
  <span className="section-label">02 / MY SKILLS</span>
  <h2>Technologies I'm <span>learning.</span></h2>
  <p>
    These are the technologies I'm currently exploring
    and improving my skills in.
  </p>

  <div className="skills-container">
    <div className="skill-card">
      <h3>HTML</h3>
      <span>Structure</span>
    </div>

    <div className="skill-card">
      <h3>CSS</h3>
      <span>Styling</span>
    </div>

    <div className="skill-card">
      <h3>JavaScript</h3>
      <span>Programming</span>
    </div>

    <div className="skill-card">
      <h3>React.js</h3>
      <span>Framework</span>
    </div>
  </div>
</section>
      <section className="about-section contact-section" id="contact">
  <span className="section-label">04 / GET IN TOUCH</span>

  <h2>
    Let's work <span>together.</span>
  </h2>

  <p>
    Have a question, an idea, or just want to connect?
    Feel free to reach out through any of my social accounts.
  </p>

  <div className="social-links">
    <a
      href="https://www.instagram.com/coolquietguy/"
      target="_blank"
      rel="noreferrer"
      className="social-card"
    >
      <span>Instagram</span>
      <strong>@coolquietguy</strong>
    </a>

    <a
      href="https://github.com/ahrune"
      target="_blank"
      rel="noreferrer"
      className="social-card"
    >
      <span>GitHub</span>
      <strong>@ahrune</strong>
    </a>

    <div className="social-card">
      <span>Discord</span>
      <strong>@sicqs</strong>
    </div>

    <a
      href="https://www.facebook.com/JustineArzadon23"
      target="_blank"
      rel="noreferrer"
      className="social-card"
    >
      <span>Facebook</span>
      <strong>Justine Arzadon</strong>
    </a>
  </div>
</section>

      <footer>
        © 2026 Justine. Built with React.js.
      </footer>
    </div>
  )
}

export default App
