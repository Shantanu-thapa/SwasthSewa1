
import { useEffect, useState } from "react";
import axios from "axios";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./App.css";

const API_URL =
 `${ import.meta.env.VITE_API_URL}`;

function App() {
  const [projects, setProjects] = useState([]);
  const [resume, setResume] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [contactStatus, setContactStatus] = useState("");
  const [loadingProjects, setLoadingProjects] = useState(true);

  // Fetch projects and resume
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const [projectsResponse, resumeResponse] = await Promise.all([
          axios.get(`${API_URL}/projects/myprojects`),
          axios.get(`${API_URL}/resume`),
        ]);

        setProjects(projectsResponse.data.projects || []);
        setResume(resumeResponse.data.resume || null);
      } catch (error) {
        console.error("Failed to load portfolio data:", error);
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchPortfolioData();
  }, []);

  // Track unique portfolio visitor per browser session
  useEffect(() => {
    const alreadyTracked = sessionStorage.getItem(
      "portfolioVisitorTracked"
    );

    if (!alreadyTracked) {
      axios
        .post(`${API_URL}/visitors`)
        .then(() => {
          sessionStorage.setItem(
            "portfolioVisitorTracked",
            "true"
          );
        })
        .catch((error) => {
          console.error("Visitor tracking failed:", error);
        });
    }
  }, []);

  // Resume download
  const handleResumeDownload = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/resume/download`
      );

      const resumeURL = response.data.resumeURL;

      if (resumeURL) {
        window.open(resumeURL, "_blank");
      }
    } catch (error) {
      console.error("Resume download failed:", error);
    }
  };

  // Contact input handler
  const handleContactChange = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  // Contact form submission
  const handleContactSubmit = async (event) => {
    event.preventDefault();

    setContactStatus("Sending...");

    try {
      await axios.post(
        `${API_URL}/visitors/contact`,
        contact
      );

      setContact({
        name: "",
        email: "",
        phone: "",
      });

      setContactStatus(
        "Thank you. I’ll be in touch shortly."
      );
    } catch (error) {
      console.error(
        "Contact submission failed:",
        error
      );

      setContactStatus(
        "Something went wrong. Please try again."
      );
    }
  };

  // Smooth section navigation
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="container nav-inner">

          <button
            className="brand"
            onClick={() => scrollToSection("home")}
          >
            ST.
          </button>

          <nav
            className={`nav-links ${
              menuOpen ? "nav-open" : ""
            }`}
          >
            <button
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("resume")}
            >
              Resume
            </button>

            <button
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>

        <section
          id="home"
          className="hero section"
        >
          <div className="container hero-grid">

            <div className="hero-content">

              <p className="eyebrow">
                SOFTWARE DEVELOPER
              </p>

              <h1>
                Building digital
                <br />
                experiences with
                <br />
                <span>purpose.</span>
              </h1>

              <p className="hero-description">
                I’m Shantanu Thapa, a Computer Science
                undergraduate focused on building practical,
                user-focused software solutions with modern
                web technologies.
              </p>

              <div className="hero-actions">

                <button
                  className="primary-button"
                  onClick={() =>
                    scrollToSection("projects")
                  }
                >
                  View my work
                  <ArrowDown size={17} />
                </button>

                <button
                  className="text-button"
                  onClick={() =>
                    scrollToSection("contact")
                  }
                >
                  Let’s connect
                  <ArrowUpRight size={17} />
                </button>

              </div>

            </div>

            <div className="hero-side">

              <div className="hero-number">
                01
              </div>

              <p>
                Software engineering
                <br />
                Full-stack development
                <br />
                Problem solving
              </p>

            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="section about-section"
        >
          <div className="container">

            <div className="section-label">
              <span>02</span>
              <span>ABOUT</span>
            </div>

            <div className="about-grid">

              <div>
                <h2>
                  Turning ideas into
                  <br />
                  <em>useful software.</em>
                </h2>
              </div>

              <div className="about-text">

                <p>
                  I enjoy understanding real-world requirements and translating them into
                  simple, efficient software experiences.
                </p>
                

                <p>
                 My interests span frontend development, backend systems, database technologies, analytics, 
                 and AI-powered applications, with a focus on building practical, scalable, and user-focused software solutions.
                </p>

                <p>
                 I prioritize clean, maintainable, and scalable logics, while keeping usability, clarity, 
                 and real-world user needs at the center of the development process.
                </p>


              </div>

            </div>

          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section
          id="skills"
          className="section skills-section"
        >
          <div className="container">

            <div className="section-label">
              <span>03</span>
              <span>EXPERTISE</span>
            </div>

            <div className="skills-heading">

              <h2>
                What I work
                <br />
                <em>with.</em>
              </h2>

              <p>
                A growing technical toolkit built around
                software development, data, and problem
                solving.
              </p>

            </div>

            <div className="skills-grid">

              <div className="skill-card">
                <span>01</span>

                <h3>Frontend</h3>

                <p>
                  React.js, JavaScript, HTML5, CSS3, TailwindCSS,
                  responsive interfaces and API integration.
                </p>
              </div>

              <div className="skill-card">
                <span>02</span>

                <h3>Backend</h3>

                <p>
                  Node.js, Express.js, REST APIs,
                  authentication and backend application
                  logic.
                </p>
              </div>

              <div className="skill-card">
                <span>03</span>

                <h3>Database</h3>

                <p>
                  MongoDB, Mongoose and structured data
                  management for full-stack applications.
                </p>
              </div>

              <div className="skill-card">
                <span>04</span>

                <h3>Data & AI</h3>

                <p>
                  SQL, Tableau, Zoho CRM and Zoho Analytics
                  AI-powered application development.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          className="section projects-section"
        >
          <div className="container">

            <div className="section-label">
              <span>04</span>
              <span>SELECTED WORK</span>
            </div>

            <div className="projects-heading">

              <h2>
                Projects that
                <br />
                <em>solve problems.</em>
              </h2>

              <p>
                A selection of applications and systems
                I’ve built while exploring modern software
                development.
              </p>

            </div>

            {loadingProjects ? (
              <div className="loading-state">
                Loading projects...
              </div>
            ) : projects.length === 0 ? (
              <div className="empty-state">
                Projects will appear here soon.
              </div>
            ) : (
              <div className="projects-list">

                {projects.map((project, index) => (

                  <article
                    className="project-card"
                    key={project._id}
                  >

                    <div className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="project-info">

                      <h3>
                        {project.title}
                      </h3>

                      <div className="project-links">

                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                            <FaGithub size={16} />
                          </a>
                        )}

                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live project
                            <ArrowUpRight
                              size={16}
                            />
                          </a>
                        )}

                      </div>

                    </div>

                  </article>

                ))}

              </div>
            )}

          </div>
        </section>

        {/* ================= STATEMENT ================= */}
        <section className="statement-section">

          <div className="container statement-content">

            <p className="eyebrow">
              MY APPROACH
            </p>

            <h2>
              Good software is not just
              <br />
              about <em>writing code.</em>
            </h2>

            <p>
              It is about understanding the problem,
              designing thoughtfully, and creating
              something that people can actually use.
            </p>

          </div>

        </section>

        {/* ================= RESUME ================= */}
        <section
          id="resume"
          className="section resume-section"
        >
          <div className="container resume-grid">

            <div>

              <div className="section-label">
                <span>05</span>
                <span>RESUME</span>
              </div>

              <h2>
                Interested in
                <br />
                <em>my journey?</em>
              </h2>

            </div>

            <div className="resume-content">

              {resume && (
                <p>
                  My latest resume contains my education,
                  technical skills, projects and experiences.
                </p>
              )}

              <button
                className="primary-button"
                onClick={handleResumeDownload}
              >
                <Download size={17} />
                Download resume
              </button>

              {!resume && (
                <small>
                  Resume currently unavailable.
                </small>
              )}

            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="section contact-section"
        >
          <div className="container">

            <div className="section-label">
              <span>06</span>
              <span>CONTACT</span>
            </div>

            <div className="contact-grid">

              <div className="contact-intro">

                <h2>
                  Have an idea?
                  <br />
                  <em>Let’s talk.</em>
                </h2>

                <p>
                  If you’re a recruiter, collaborator,
                  or simply interested in my work, feel
                  free to get in touch.
                </p>

                <div className="social-links">

                  <a
                    href="https://github.com/Shantanu-thapa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href = "https://www.linkedin.com/in/shantanu-thapa-443b70380/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={18} />
                    LinkedIn
                  </a>

                  <a
                    href="mailto:shantanuthapa021@gmail.com"
                  >
                    <Mail size={18} />
                    Email
                  </a>

                </div>

              </div>

              <form
                className="contact-form"
                onSubmit={handleContactSubmit}
              >

                <div className="form-group">

                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={contact.name}
                    onChange={handleContactChange}
                    placeholder="name"
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={contact.email}
                    onChange={handleContactChange}
                    placeholder="email"
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="phone number">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={contact.phone}
                    onChange={handleContactChange}
                    placeholder="phone number"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="primary-button form-submit"
                >
                  Send message
                  <ArrowUpRight size={17} />
                </button>

                {contactStatus && (
                  <p className="contact-status">
                    {contactStatus}
                  </p>
                )}

              </form>

            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="container footer-inner">

          <p>
            © {new Date().getFullYear()} Shantanu Thapa
          </p>

          <button
            onClick={() =>
              scrollToSection("home")
            }
            className="back-top"
          >
            Back to top
            <ArrowUp size={16} />
          </button>

        </div>

      </footer>

    </div>
  );
}

export default App;

