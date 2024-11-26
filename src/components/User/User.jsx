import React from 'react';

function User() {
  return (
    <div className="min-h-screen bg-red-500 text-black flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full bg-yellow-500 text-white py-4 text-center shadow-md">
        <h1 className="text-4xl font-bold">Welcome to Barça User Page</h1>
        <p className="mt-2">Experience the passion of FC Barcelona</p>
      </header>

      {/* User Profile Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-10 w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/football-player-3d-icon-download-in-png-blend-fbx-gltf-file-formats--soccer-sports-avatar-pack-avatars-icons-5410596.png?f=webp"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-4 border-blue-900"
          />
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-600">Barcelona Fan | Member since 2023</p>
          </div>
        </div>
      </div>

      {/* Stats or Interests Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-11/12 md:w-2/3 lg:w-1/2">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Your Barça Stats</h3>
        <ul className="space-y-3">
          <li className="text-lg">Favorite Player: Lionel Messi</li>
          <li className="text-lg">Match Attended: El Clásico 2022</li>
          <li className="text-lg">Membership Level: Gold</li>
        </ul>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-blue-900 text-white py-4 text-center mt-auto">
        <p>© 2024 FC Barcelona Fan Zone. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default User;
