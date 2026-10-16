import { Github, Linkedin } from "lucide-react";

function Hero({ data }) {
  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting">Hi, I'm {data.name}</p>
          <h1 className="hero-title gradient-text">{data.role}</h1>
          <p className="hero-text">{data.tagline}</p>

          <a href="#projects" className="btn btn-primary">View My Work</a>

          <div className="social-icons">
            <a href={data.socials.github} className="icon-link"><Github size={20} /></a>
            <a href={data.socials.linkedin} className="icon-link"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={data.profileImage} alt={data.name} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
