import React from 'react';
import './FlipCard.css';

const FlipCard = ({ frontImage, backImage }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImage} alt="Front" />
        </div>
        <div className="flip-card-back">
          <img src={backImage} alt="Back" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
