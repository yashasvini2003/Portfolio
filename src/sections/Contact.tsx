import { type FormEvent, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import ScrollMarker from "../components/ScrollMarker";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "yashasvinibhanuraj29@gmail.com",
    href: "mailto:yashasvinibhanuraj29@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (742) 588-1319",
    href: "tel:+17425881319",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "Yashasvini Bhanuraj",
    href: "https://www.linkedin.com/in/yashasvini-bhanuraj-0a7a13202/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@yashasvini2003",
    href: "https://github.com/yashasvini2003",
  },
];

function Contact() {
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("_subject", "New message from Yashasvini's portfolio");
    data.set("_template", "table");
    data.set("_url", window.location.href);

    setFormState("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/yashasvinibhanuraj29@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        },
      );

      if (!response.ok) throw new Error("Unable to send message");

      form.reset();
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="content-section contact-section">
      <ScrollMarker number="07" label="Contact" />
      <div className="section-shell">
        <SectionHeader
          eyebrow="Let’s Connect"
          description="I am interested in early-career business analysis, project analysis, data and reporting, software development, and technology delivery opportunities across Canada."
        />

        <div className="contact-grid">
          <div className="contact-details">
            <article className="glass-card contact-intro">
              <span className="card-label">Available September 2026</span>
              <h3>Let’s build something meaningful.</h3>
              <p>
                The best way to reach me is by email or LinkedIn. I am happy to
                discuss full-time opportunities, collaborative projects, and
                work that brings business and technology teams together.
              </p>
              <div className="location-line">
                <MapPin size={18} /> Toronto, Ontario, Canada
              </div>
            </article>

            <div className="contact-links">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    className="contact-link"
                    href={link.href}
                    key={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span>
                      <Icon size={20} />
                    </span>
                    <div>
                      <small>{link.label}</small>
                      <strong>{link.value}</strong>
                    </div>
                    <ArrowUpRight size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <form className="glass-card contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" type="text" required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={7} required />
            </div>
            <button
              className="primary-button form-button"
              type="submit"
              disabled={formState === "sending"}
            >
              <Send size={17} />
              {formState === "sending" ? "Sending..." : "Send"}
            </button>
            {formState === "sent" && (
              <p className="form-status" role="status">
                Thank you. Your message has been sent.
              </p>
            )}
            {formState === "error" && (
              <p className="form-status form-status-error" role="alert">
                The message could not be sent. Please email me directly instead.
              </p>
            )}
          </form>
        </div>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Yashasvini Bhanuraj</span>
          <span>Designed and built with React, TypeScript, and curiosity.</span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
