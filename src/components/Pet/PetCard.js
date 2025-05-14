import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pet.name}</h3>
        <p className="text-sm text-gray-600 italic mb-1">{pet.scientificName}</p>
        <p className="text-gray-700 mb-3">{pet.description}</p>
        <div className="bg-blue-50 p-3 rounded">
          <h4 className="font-semibold text-blue-800 mb-1">Cuidados:</h4>
          <p className="text-blue-700">{pet.careTips}</p>
        </div>
      </div>
    </div>
  );
};

export default PetCard;