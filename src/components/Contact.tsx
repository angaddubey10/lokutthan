import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have questions or want to support our cause? We'd love to hear from you
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📬</div>
              <h3>Email Us</h3>
              <p>hello.lokutthan@gmail.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call / WhatsApp</h3>
              <p>+91-9452-784478</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Our Presence</h3>
              <p>Lucknow, Varanasi, Ballia, Noida - Delhi NCR, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
