import React, { useState } from 'react';

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const PetDiary = ({ pets, onAddEntry }) => {
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [newEntry, setNewEntry] = useState({
    date: formatDate(new Date()),
    notes: '',
    weight: '',
    vaccines: []
  });

  const selectedPet = pets.find(pet => pet.id === selectedPetId);

  const handleAddEntry = () => {
    if (selectedPetId && newEntry.notes) {
      onAddEntry(selectedPetId, {
        ...newEntry,
        vaccines: newEntry.vaccines.split(',').map(v => v.trim())
      });
      setNewEntry({
        date: formatDate(new Date()),
        notes: '',
        weight: '',
        vaccines: []
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Diario de Mascotas</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Seleccionar Mascota</label>
        <select 
          value={selectedPetId || ''}
          onChange={(e) => setSelectedPetId(Number(e.target.value))}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Selecciona --</option>
          {pets.map(pet => (
            <option key={pet.id} value={pet.id}>{pet.name}</option>
          ))}
        </select>
      </div>

      {selectedPet && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Registrar nueva entrada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Fecha</label>
              <input
                type="date"
                value={newEntry.date}
                onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Peso (kg)</label>
              <input
                type="number"
                value={newEntry.weight}
                onChange={(e) => setNewEntry({...newEntry, weight: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block mb-1">Vacunas (separadas por comas)</label>
            <input
              type="text"
              value={newEntry.vaccines}
              onChange={(e) => setNewEntry({...newEntry, vaccines: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mt-4">
            <label className="block mb-1">Notas</label>
            <textarea
              value={newEntry.notes}
              onChange={(e) => setNewEntry({...newEntry, notes: e.target.value})}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>
          
          <button
            onClick={handleAddEntry}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Agregar Entrada
          </button>
        </div>
      )}

      {selectedPet && selectedPet.diaryEntries.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Historial de {selectedPet.name}</h3>
          <div className="space-y-4">
            {selectedPet.diaryEntries.map((entry, index) => (
              <div key={index} className="border rounded p-4">
                <div className="font-bold">{entry.date}</div>
                <div>Peso: {entry.weight} kg</div>
                <div>Vacunas: {entry.vaccines.join(', ')}</div>
                <div className="mt-2">{entry.notes}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PetDiary;

// DONE