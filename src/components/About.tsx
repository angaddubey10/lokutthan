import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Lok Utthan Foundation</h2>
          <p className="about-description">
            Lok Utthan Foundation is a non-governmental organization committed to uplifting 
            marginalized communities through sustainable development initiatives. Founded on 
            the principles of equity, dignity, and empowerment, we work tirelessly to bridge 
            the gap in access to quality education, social justice, and healthcare.
          </p>
          <p className="about-description">
            Our holistic approach combines grassroots mobilization with evidence-based interventions 
            to create lasting impact. We believe that every individual deserves the opportunity to 
            live a healthy, educated, and dignified life.
          </p>
        </div>

        <div className="mission-vision">
          <div className="mv-card">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To empower underserved communities through transformative education, 
              legal advocacy, and comprehensive health programs that promote dignity, 
              equality, and social justice.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              A society where every individual has equitable access to quality education, 
              justice, and healthcare, enabling them to reach their full potential and 
              contribute to community development.
            </p>
          </div>
        </div>

        <div className="values">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-icon">💙</span>
              <h4>Compassion</h4>
              <p>Serving with empathy and understanding</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🤝</span>
              <h4>Integrity</h4>
              <p>Maintaining transparency and accountability</p>
            </div>
            <div className="value-item">
              <span className="value-icon">⚖️</span>
              <h4>Justice</h4>
              <p>Advocating for rights and equality</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🌱</span>
              <h4>Sustainability</h4>
              <p>Building long-term community resilience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
