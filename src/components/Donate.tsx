import './Donate.css';

const Donate = () => {
  return (
    <section id="donate" className="donate">
      <div className="donate-container">
        <h2 className="section-title">Support Our Mission</h2>
        <p className="section-subtitle">
          Your contribution helps us create lasting impact in underserved communities
        </p>

        <div className="donate-content">
          <div className="donate-info">
            <h3>Every Contribution Transforms Lives</h3>
            <p className="emotional-text">
              Behind every statistic is <strong>a child who dreams of education, a mother seeking healthcare, 
              and a community yearning for justice.</strong> Your generosity becomes <strong>the bridge between 
              despair and hope.</strong> Together, we can <strong>transform communities, one life at a time.</strong>
            </p>
          </div>

          <div className="payment-methods">
            <div className="payment-card qr-card">
              <h3>Quick Payment</h3>
              <div className="qr-code-container">
                <div className="qr-placeholder">
                  <p>QR Code</p>
                  <p style={{fontSize: '12px', marginTop: '5px'}}>Scan to pay via UPI</p>
                </div>
              </div>
              <div className="upi-id">
                <strong>UPI ID:</strong> lokutthan@upi
              </div>
            </div>

            <div className="payment-card bank-card">
              <h3>Bank Transfer</h3>
              <div className="bank-details">
                <div className="detail-row">
                  <span className="label">Account Name:</span>
                  <span className="value">Lok Utthan Foundation</span>
                </div>
                <div className="detail-row">
                  <span className="label">Account Number:</span>
                  <span className="value">XXXX XXXX XXXX</span>
                </div>
                <div className="detail-row">
                  <span className="label">IFSC Code:</span>
                  <span className="value">ABCD0123456</span>
                </div>
                <div className="detail-row">
                  <span className="label">Bank Name:</span>
                  <span className="value">Sample Bank</span>
                </div>
                <div className="detail-row">
                  <span className="label">Branch:</span>
                  <span className="value">New Delhi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="donate-note">
            <p>
              <strong>Note:</strong> Please share your transaction details at{' '}
              <a href="mailto:hello.lokutthan@gmail.com">hello.lokutthan@gmail.com</a>{' '}
              to receive your tax receipt and updates on how your contribution is making a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
