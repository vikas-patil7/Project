import React from 'react';
import Header from './Components/Header';
import CarCard from './Components/CarCard';
import './Components/Styles.css';

import bmw3 from './assets/bmw3.jpg';

const cars = [
  {
    id: 1,
    name: "BMW 3 Series",
    image: "bmw3",
    description: "The BMW 3 Series offers dynamic performance with a luxury interior and modern technology.",
    price: "$41,000"
  },
  {
    id: 2,
    name: "BMW X5",
    image: "bmwx5",
    description: "The BMW X5 combines performance with ample space for comfort and adventure.",
    price: "$61,000"
  },
  {
    id: 3,
    name: "BMW M4",
    image: "bmwM4",
    description: "A high-performance sports car with aggressive styling and track-ready capabilities.",
    price: "$72,000"
  },
  {
    id: 4,
    name: "BMW iX",
    image: "bmwix",
    description: "The BMW iX is an all-electric SUV that delivers both sustainability and performance.",
    price: "$84,000"
  }
];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <nav className="navbar">
                <h1 className='car'>Car Showcase</h1>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#models">Models</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            
      <div className="car-list">
        {cars.map(car => (
          <CarCard
            key={car.id}
            name={car.name}
            image={car.image}
            description={car.description}
            price={car.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


