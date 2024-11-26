import React from 'react';
import { Link } from 'react-router-dom';

export default function Players() {
  const players = [
    {
      name: 'Robert Lewandowski',
      img: 'https://pbs.twimg.com/media/FXylw5KUsAI33af.jpg:large',
    },
    {
      name: 'Lamine Yamal',
      img: 'https://printler.com/media/photo/193169.jpg',
    },
    {
      name: 'Pedri',
      img: 'https://posterspy.com/wp-content/uploads/2023/07/GAVI-PEDRI-1.jpg',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
          Barcelona Players
        </h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {players.map((player, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden text-center transition-transform transform hover:scale-105"
            >
              <img
                src={player.img}
                alt={player.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-blue-900">{player.name}</h2>
                <Link
                  to={`/players/${player.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-2 inline-block text-orange-500 hover:underline"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
