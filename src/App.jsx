import React, { useEffect, useState } from 'react';
import './App.css';
import  Axios from 'axios';
import { getAllStarShips } from './services/sw-api';
import StarShipCard from './components/StarShipCard';
import Header from './components/Header';
import StarshipDetails from './components/StarShipDetails';


function App() {
const [starships, setStarships] = useState([]);
const [selectedStarship, setSelectedStarship] = useState(null);

useEffect(() => {
  getAllStarShips ()
  .then(response => {
    setStarships(response.data.results);
})
.catch(error => {
  console.error('Error fetching starships', error);
});
}, []);

const handleCardClick = starship => {
  setSelectedStarship(starship);
};

const handleBack = () => {
  setSelectedStarship(null);
};

if (selectedStarship) {
  return (
    <div className='app'>
      <Header />
      <button onClick={handleBack}>Back</button>
      <StarshipDetails starship={selectedStarship} />
    </div>
  );
}

return (
  <div className='app'>
    <Header />
    <div className='card-container'>
      {starships.map((starship) => (
        <StarShipCard
         key={starship.name} 
         starship={starship}
         onClick={handleCardClick} 
        />
      ))}
    </div>
  </div>
);
}
    
  
export default App;
