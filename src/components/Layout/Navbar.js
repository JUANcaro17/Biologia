import React from 'react';

const Navbar = ({ onLogout, isLoggedIn, onNavigate }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('home')}
              className="text-xl font-bold text-blue-600 hover:text-blue-800"
            >
              PetPedia
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn && (
              <>
                <button
                  onClick={() => onNavigate('encyclopedia')}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Enciclopedia
                </button>
                <button
                  onClick={() => onNavigate('diary')}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Mi Diario
                </button>
                <button
                  onClick={onLogout}
                  className="px-3 py-1 text-sm text-red-600 hover:text-red-800 transition-colors"
                >
                  Cerrar sesión
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;