import React from 'react'

const StarShipCard = ({ starship, onClick }) => {
 
  return (
    <div className="starship-card" onClick={() => onClick(starship)}>
        <h2>{starship.name}</h2>
        <p>Model: {starship.model}</p>
    </div>
  );
};

export default StarShipCard