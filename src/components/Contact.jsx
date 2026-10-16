import { Mail, Github, Linkedin } from "lucide-react";

function Contact({ email, socials }) {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">My<span className="gradient-text">Contact</span></h2>
          <p className="muted">I'm open to internship and junior roles.</p>

          <div className="contact-links">
            <a href={`mailto:${email}`} className="icon-link icon-link-text"><Mail size={18} />{email}</a>
            <a href={socials.github} className="icon-link icon-link-text"><Github size={18} />Github</a>
            <a href={socials.linkedin} className="icon-link icon-link-text"><Linkedin size={18} />LinkedIn</a>
          </div>

          <a className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
