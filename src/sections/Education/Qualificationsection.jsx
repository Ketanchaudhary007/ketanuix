import React from 'react';
import './QualificationSection.css'; // Import the CSS file

const QualificationSection = () => {
  const qualifications = [
    {
      title: 'B.E. - Information Technology',
      institution: 'Panjab University , Chandigarh',
      year: '2021 - 2025',
      CGPA: '8.12 / 10',
    },
    {
      title: '12th | CBSE',
      institution: 'DR M K KAPUR ARYA MODEL SCHOOL, Panipat',
      year: '2019 - 2020',
      Percentage: '94 / 100',
    },
  ];

  return (
    <section className="qualification__section" id="qualification">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle"></span>

      <div className="qualification__container">
        {qualifications.map((item, index) => (
          <div className="qualification__data" key={index}>
            <div>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">
                {item.institution} | {item.year}
              </span>
              <div className="qualification__details">
                {item.CGPA && <span className="qualification__cgpa">CGPA: {item.CGPA}</span>}
                {item.Percentage && <span className="qualification__percentage">Percentage: {item.Percentage}</span>}
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              {index < qualifications.length - 1 && (
                <span className="qualification__line"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualificationSection;
