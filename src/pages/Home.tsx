import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UtensilsCrossed, ChefHat, Clock, Star } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-16 px-4">
        <UtensilsCrossed className="w-20 h-20 mx-auto mb-8 text-indigo-600" />
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Welcome to Gourmet Haven</h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience culinary excellence with our carefully curated menu of
          delectable dishes prepared by expert chefs using the finest ingredients.
        </p>
        <button
          onClick={() => navigate('/menu')}
          className="bg-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-semibold 
                   hover:bg-indigo-700 transform hover:scale-105 transition-all shadow-lg"
        >
          Explore Our Menu
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <ChefHat className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
          <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
          <p className="text-gray-600">
            Our master chefs bring years of experience and passion to every dish.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <Star className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-gray-600">
            We use only the finest ingredients to ensure exceptional taste and quality.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <Clock className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
          <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
          <p className="text-gray-600">
            Quick delivery and exceptional service for your convenience.
          </p>
        </div>
      </div>

      <div className="mt-12 mb-20">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Restaurant ambiance"
          className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
}