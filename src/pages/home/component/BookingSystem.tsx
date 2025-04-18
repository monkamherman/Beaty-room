import React, { useState } from 'react';

const BookingSystem:React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const availableTimes = ['9:00', '10:30', '12:00', '14:00', '15:30', '17:00'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Réserver en ligne</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
          <select 
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Choisir un service</option>
            <option value="coiffure">Coiffure</option>
            <option value="massage">Massage</option>
            <option value="spa">Spa</option>
            <option value="maquillage">Maquillage</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Heure</label>
          <select 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            disabled={!date}
          >
            <option value="">Choisir une heure</option>
            {availableTimes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        
        <button 
          className="w-full bg-pink-600 text-white py-2 rounded-md disabled:opacity-50"
          disabled={!selectedService || !date || !time}
        >
          Confirmer la réservation
        </button>
      </div>
    </div>
  );
};

export default BookingSystem;