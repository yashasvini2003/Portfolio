import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navLinks } from "../data/navigation";

type Theme = "dark" | "light";

type NavbarProps = {
  theme: Theme;
  toggleTheme: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  closeMobileMenu: () => void;
};

function Navbar({
  theme,
  toggleTheme,
  mobileMenuOpen,
  setMobileMenuOpen,
  closeMobileMenu,
}: NavbarProps) {
  const [homeActive, setHomeActive] = useState(true);

  useEffect(() => {
    const home = document.getElementById("home");
    if (!home) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHomeActive(entry.intersectionRatio >= 0.45),
      { threshold: [0, 0.45] },
    );

    observer.observe(home);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar${homeActive ? " home-navbar" : ""}`}>
      <a href="#home" className="brand" onClick={closeMobileMenu}>
        <span className="brand-logo">YB</span>
      </a>

      <nav className="desktop-nav">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a
          href="https://github.com/yashasvini2003"
          target="_blank"
          rel="noreferrer"
          className="icon-button"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/yashasvini-bhanuraj-0a7a13202/"
          target="_blank"
          rel="noreferrer"
          className="icon-button"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={20} />
        </a>

        <button
          type="button"
          className={`theme-toggle ${
            theme === "dark" ? "dark-mode" : "light-mode"
          }`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <Sun size={15} className="sun-icon" />
          <Moon size={15} className="moon-icon" />
          <span className="toggle-dot" />
        </button>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open mobile menu"
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
