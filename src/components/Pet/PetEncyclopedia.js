import React, { useState } from 'react';
import PetGrid from './PetGrid';
import PetSearch from './PetSearch';
import PetDetailModal from './PetDetailModal';

const PetEncyclopedia = ({ pets, onSelectPet, userPets, onAddPet }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPet, setSelectedPet] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePetSelect = (pet) => {
    setSelectedPet(pet);
    onSelectPet(pet);
  };

  const handleAddToMyPets = () => {
    if (selectedPet) {
      onAddPet({
        ...selectedPet,
        id: Date.now(),
        name: `Mi ${selectedPet.name}`,
        diaryEntries: []
      });
      setShowAddModal(false);
    }
  };

  return (
    <div>
      <PetSearch onSearch={setSearchTerm} />
      <PetGrid pets={filteredPets} onPetSelect={handlePetSelect} />
      
      {selectedPet && (
        <PetDetailModal 
          pet={selectedPet} 
          onClose={() => setSelectedPet(null)}
          onAdd={() => setShowAddModal(true)}
          isInCollection={userPets.some(p => p.type === selectedPet.name)}
        />
      )}
    </div>
  );
};

export default PetEncyclopedia;