import React from 'react';

const PetDetailModal = ({ pet, onClose }) => {
  if (!pet) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{pet.name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Imagen de {pet.name}</span>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Información básica</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Nombre científico:</span> {pet.scientificName}</p>
                  <p><span className="font-medium">Esperanza de vida:</span> {pet.lifespan}</p>
                  <p><span className="font-medium">Dieta:</span> {pet.diet}</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Descripción</h3>
                <p className="text-gray-600">{pet.description}</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Cuidados recomendados</h3>
                <p className="text-blue-700">{pet.careTips}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailModal;