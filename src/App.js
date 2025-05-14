import React, { useState, useEffect } from 'react';
import AuthForm from './components/Auth/AuthForm';
import PetEncyclopedia from './components/Pet/PetEncyclopedia';
import PetDiary from './components/Pet/PetDiary';
import Navbar from './components/Layout/Navbar';
import petsData from './mock/pets';
import usersData from './mock/users';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [activeView, setActiveView] = useState('encyclopedia');
  const [pets, setPets] = useState(petsData);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleNavigate = (view) => {
    setActiveView(view);
  };

  const handleLogin = ({ username, password }) => {
    const user = usersData.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      setIsGuest(false);
    }
  };

  const handleGuestLogin = () => {
    setCurrentUser({ username: 'Invitado', pets: [] });
    setIsGuest(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsGuest(false);
    setActiveView('encyclopedia');
  };

  const handleAddPet = (pet) => {
    if (!isGuest) {
      const updatedUser = {
        ...currentUser,
        pets: [...currentUser.pets, pet]
      };
      setCurrentUser(updatedUser);
    }
  };

  const handleAddDiaryEntry = (petId, entry) => {
    if (!isGuest) {
      const updatedPets = currentUser.pets.map(pet => {
        if (pet.id === petId) {
          return {
            ...pet,
            diaryEntries: [...pet.diaryEntries, entry]
          };
        }
        return pet;
      });
      setCurrentUser({
        ...currentUser,
        pets: updatedPets
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentUser ? (
        <>
          <Navbar 
            onLogout={handleLogout} 
            isLoggedIn={!isGuest} 
            onNavigate={handleNavigate}
          />
          <div className="container mx-auto px-4 py-8">
            {activeView === 'encyclopedia' ? (
              <PetEncyclopedia 
                pets={pets} 
                onSelectPet={setSelectedPet}
                userPets={currentUser.pets}
                onAddPet={handleAddPet}
              />
            ) : (
              <PetDiary 
                pets={currentUser.pets} 
                onAddEntry={handleAddDiaryEntry}
              />
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <AuthForm onLogin={handleLogin} onGuestLogin={handleGuestLogin} />
        </div>
      )}
    </div>
  );
};

export default App;

// DONE