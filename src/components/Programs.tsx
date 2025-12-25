import './Programs.css';

const Programs = () => {
  const programs = [
    {
      icon: '🏥',
      title: 'Health Education & Awareness',
      description: 'Conducting health camps, awareness drives, and preventive care programs to promote community wellness and disease prevention.',
      highlights: ['Free Health Camps', 'Nutrition Programs', 'Disease Prevention', 'Maternal Health']
    },
    {
      icon: '📚',
      title: 'Education & Skill Development',
      description: 'Empowering individuals through education initiatives, vocational training, and life skills development programs.',
      highlights: ['Adult Literacy', 'Vocational Training', 'Scholarship Programs', 'Digital Literacy']
    },
    {
      icon: '⚖️',
      title: 'Legal Aid & Justice',
      description: 'Providing legal support and advocacy for marginalized communities to ensure access to justice and protection of rights.',
      highlights: ['Free Legal Counseling', 'Rights Awareness', 'Court Support', 'Policy Advocacy']
    },
    {
      icon: '👩‍👧',
      title: 'Women Empowerment',
      description: 'Supporting women through self-help groups, entrepreneurship training, and gender equality initiatives.',
      highlights: ['Self Help Groups', 'Micro-Enterprise', 'Leadership Training', 'Safety Programs']
    },
    {
      icon: '🌾',
      title: 'Rural Development',
      description: 'Implementing sustainable livelihood programs and infrastructure development in rural communities.',
      highlights: ['Livelihood Support', 'Water & Sanitation', 'Agriculture Training', 'Infrastructure']
    },
    {
      icon: '👶',
      title: 'Child Welfare',
      description: 'Protecting children\'s rights and ensuring access to education, nutrition, and safe environments.',
      highlights: ['Child Rights', 'Education Support', 'Nutrition Programs', 'Protection Services']
    }
  ];

  return (
    <section id="programs" className="programs">
      <div className="programs-container">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">
          Comprehensive initiatives designed to create lasting impact in communities
        </p>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{program.icon}</div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <ul className="program-highlights">
                {program.highlights.map((highlight, idx) => (
                  <li key={idx}>✓ {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
