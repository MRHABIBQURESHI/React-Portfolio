import React from 'react';
import habibqureshi from '/habibqureshi.pdf'

const CTA: React.FC = () => {
  return (
    <div className="cta">
      <a href={habibqureshi} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;

