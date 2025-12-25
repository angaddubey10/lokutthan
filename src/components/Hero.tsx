import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Empowering Communities Through Education, Justice & Health</h1>
        <p className="hero-subtitle">
          Lok Utthan Foundation is dedicated to creating lasting change in underserved communities 
          through transformative education, advocacy for social justice, and comprehensive health initiatives.
        </p>
        <div className="hero-buttons">
          <a href="#programs" className="btn btn-primary">Our Programs</a>
          <a href="#donate" className="btn btn-secondary">Support Our Cause</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-card">
          <h3>📚</h3>
          <p>Empowering Through Education</p>
        </div>
        <div className="stat-card">
          <h3>⚖️</h3>
          <p>Advocating for Rights</p>
        </div>
        <div className="stat-card">
          <h3>🏥</h3>
          <p>Building Healthier Communities</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
