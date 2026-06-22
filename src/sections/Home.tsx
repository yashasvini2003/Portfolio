import { ArrowRight, ChevronDown, Download, Mail } from "lucide-react";
import { useState } from "react";
import SectionMarker from "../components/ScrollMarker";
import { highlights } from "../data/highlights";

function Home() {
  return (
    <section id="home" className="hero-section">
      <SectionMarker number="01" label="Home" />

      <div className="hero-main">
        <div className="hero-left">
          <span className="eyebrow">Hello, I&apos;m</span>

          <h1 className="hero-title">
            <span className="hero-firstname">Yashasvini</span>
            <br />
            <span className="hero-lastname">Bhanuraj</span>
          </h1>

          <div className="roles">
            <span>Software Developer</span>
            <span className="dot" />
            <span>UI/UX Designer</span>
            <span>Business Analyst</span>
            <span className="dot" />
            <span>Full-Stack Developer</span>
          </div>

          <p className="hero-description">
            I build meaningful digital experiences, solve real-world problems
            and turn ideas into impactful solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects
              <ArrowRight size={17} />
            </a>

            <a
              href="/Yashasvini_Bhanuraj_Resume.pdf"
              className="secondary-button"
              download
            >
              <Download size={17} />
              Download Resume
            </a>

            <a href="#contact" className="secondary-button">
              <Mail size={17} />
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-right">
          <HeroAvatar />
        </div>
      </div>

      <div className="highlight-strip">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div className="highlight-card" key={item.title}>
              <div className="highlight-icon">
                <Icon size={36} />
              </div>

              <div className="highlight-text">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      <a href="#about" className="down-arrow" aria-label="Scroll to About">
        <ChevronDown size={30} />
      </a>
    </section>
  );
}

function HeroAvatar() {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="avatar-stage">
      <div className="avatar-depth-shadow" />
      <div className="avatar-blend-overlay" />

      {imageLoaded ? (
        <img
          src="/hero-avatar.png"
          alt="Anime avatar of Yashasvini Bhanuraj working on a laptop"
          className="hero-avatar"
          onError={() => setImageLoaded(false)}
        />
      ) : (
        <div className="missing-avatar">
          <strong>YB</strong>
          <p>Put hero-avatar.png inside public folder</p>
        </div>
      )}
    </div>
  );
}

export default Home;