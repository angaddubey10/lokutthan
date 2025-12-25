import './Impact.css';

const Impact = () => {
  return (
    <section id="impact" className="impact">
      <div className="impact-container">
        <h2 className="section-title">Our Impact</h2>
        <p className="section-subtitle">
          Measuring success through the lives we've touched and communities we've transformed
        </p>

        <div className="impact-stats">
          <div className="impact-stat">
            <div className="stat-number">2,000+</div>
            <div className="stat-label">Students</div>
            <p className="stat-desc">Children and adults supported with education</p>
          </div>

          <div className="impact-stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Legal Cases</div>
            <p className="stat-desc">Free legal aid provided to families</p>
          </div>

          <div className="impact-stat">
            <div className="stat-number">100+</div>
            <div className="stat-label">Health Camps</div>
            <p className="stat-desc">Free medical camps organized</p>
          </div>

          <div className="impact-stat">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Beneficiaries</div>
            <p className="stat-desc">Individuals directly impacted by our programs</p>
          </div>

          <div className="impact-stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Villages</div>
            <p className="stat-desc">Rural communities served across regions</p>
          </div>

          <div className="impact-stat">
            <div className="stat-number">150+</div>
            <div className="stat-label">Women SHGs</div>
            <p className="stat-desc">Self-help groups established</p>
          </div>
        </div>

        <div className="testimonials">
          <h3 className="testimonials-title">Stories of Change</h3>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "I learned tailoring through their skill development program. Now I run my 
                own business and support my family. This organization truly empowers through education."
              </p>
              <div className="testimonial-author">
                <strong>Sunita Devi</strong>
                <span>Program Beneficiary</span>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "The free legal aid helped us fight for our land rights. Without their support, 
                we would have lost everything. They are a beacon of hope for the poor."
              </p>
              <div className="testimonial-author">
                <strong>Mohan Singh</strong>
                <span>Farmer</span>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "The health camp organized by Lok Utthan Foundation saved my mother's life. 
                The free screening detected her condition early, and they helped us get 
                treatment. We are forever grateful."
              </p>
              <div className="testimonial-author">
                <strong>Rajesh Kumar</strong>
                <span>Village Resident</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
