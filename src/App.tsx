import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PlaceholderSection from "./components/PlaceholderSection";
import Home from "./sections/Home";
import "./index.css";

type Theme = "dark" | "light";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
      />

      <main>
        <Home />

        <PlaceholderSection
          id="about"
          number="02"
          title="About Me"
          description="This section will include your story, education, GPA, President’s Honour List, values, and relevant course highlights."
        />

        <PlaceholderSection
          id="experience"
          number="03"
          title="Experience"
          description="This section will include your co-op roles, peer mentorship, and volunteer experience."
        />

        <PlaceholderSection
          id="projects"
          number="04"
          title="Projects"
          description="This section will showcase Schedulify, GridWise AI, Fragments, MetMuseum, and your other GitHub projects."
        />

        <PlaceholderSection
          id="skills"
          number="05"
          title="Skills"
          description="This section will include your technical skills and professional strengths."
        />

        <PlaceholderSection
          id="achievements"
          number="06"
          title="Achievements"
          description="This section will include certificates, awards, hackathons, recognition, and appreciation letters."
        />

        <PlaceholderSection
          id="contact"
          number="07"
          title="Contact"
          description="This section will include LinkedIn, GitHub, email, location, and a send message form."
        />
      </main>
    </div>
  );
}

export default App;