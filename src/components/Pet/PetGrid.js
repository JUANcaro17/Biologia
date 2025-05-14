import React from 'react';
import PetCard from './PetCard';

const PetGrid = ({ pets, onPetSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <div 
          key={pet.id} 
          className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          onClick={() => onPetSelect(pet)}
        >
          <PetCard pet={pet} />
        </div>
      ))}
    </div>
  );
};

export default PetGrid;