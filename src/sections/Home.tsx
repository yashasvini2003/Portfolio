"use client";

import {
  ArrowRight,
  ChevronDown,
  Download,
  Mail,
} from "lucide-react";
import SectionMarker from "../components/ScrollMarker";
import VideoIntro from "../components/VideoIntro";

function Home() {
  return (
    <section id="home" className="hero-section hero-cinematic">
      <SectionMarker number="01" label="Home" />
      <VideoIntro />

      <div className="hero-main">
        <div className="hero-left hero-copy-reveal">
          <h1 className="hero-title">
            <span className="hero-firstname">Yashasvini</span>
            <br />
            <span className="hero-lastname">Bhanuraj</span>
          </h1>

          <div className="roles">
            <span>Software Developer</span>
            <span className="dot" />
            <span>Business Analyst</span>
            <span className="dot" />
            <span>UI/UX Designer</span>
            <span className="dot" />
            <span>Project Analyst</span>
          </div>

          <p className="hero-description">
            Upcoming August 2026 Software Development graduate with hands-on
            experience translating business needs, data, and user insights into
            clear, practical digital solutions.
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
      </div>

      <a href="#about" className="down-arrow" aria-label="Scroll to About">
        <ChevronDown size={25} />
      </a>
    </section>
  );
}

export default Home;
