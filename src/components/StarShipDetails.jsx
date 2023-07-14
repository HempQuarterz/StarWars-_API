import React from 'react';

const StarshipDetails = ({ starship }) => {
  return (
    <div class="ship-details">
      <h2> Name: {starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Starship Class: {starship.starship_class}</p>
      <p>HyperDrive Rating: {starship.hyperdrive_rating}</p>
      <p>Manufacturer {starship.manufacturer}</p>
      <p>Crew:{starship.crew}</p>
     
    </div>
  );
};

export default StarshipDetails;
