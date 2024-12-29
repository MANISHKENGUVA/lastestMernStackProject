import React from 'react';
import { supabase } from '../lib/supabase';
import { useCartStore } from '../stores/cartStore';
import type { Dish } from '../types';
import { toast } from 'react-hot-toast';
import { Plus } from 'lucide-react';

export default function Menu() {
  const [dishes, setDishes] = React.useState<Dish[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const addItem = useCartStore((state) => state.addItem);

  React.useEffect(() => {
    const fetchDishes = async () => {
      const { data, error } = await supabase
        .from('dishes')
        .select('*')
        .order('name');
      
      if (error) {
        toast.error('Failed to load menu');
        return;
      }
      
      setDishes(data);
    };

    fetchDishes();
  }, []);

  const categories = ['all', ...new Set(dishes.map((dish) => dish.category))];
  const filteredDishes = selectedCategory === 'all'
    ? dishes
    : dishes.filter((dish) => dish.category === selectedCategory);

  const handleAddToCart = (dish: Dish) => {
    addItem(dish, 1);
    toast.success(`${dish.name} added to cart`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Our Menu</h1>
      
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full capitalize text-sm font-medium transition-all
              ${selectedCategory === category
                ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={dish.image_url}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{dish.name}</h3>
                <span className="text-lg font-bold text-indigo-600">
                  ${dish.price.toFixed(2)}
                </span>
              </div>
              <p className="text-gray-600 mb-6 line-clamp-2">{dish.description}</p>
              <button
                onClick={() => handleAddToCart(dish)}
                className="w-full bg-indigo-600 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700
                         flex items-center justify-center space-x-2 font-medium"
              >
                <Plus className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}