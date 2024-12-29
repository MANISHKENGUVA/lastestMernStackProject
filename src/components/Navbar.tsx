import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, History, Menu as MenuIcon, UtensilsCrossed } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { useCartStore } from '../stores/cartStore';

export default function Navbar() {
  const { user, signOut } = useAuthStore();
  const items = useCartStore((state) => state.items);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
            <UtensilsCrossed className="w-8 h-8" />
            <span className="text-2xl font-bold">Gourmet Haven</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link 
              to="/menu" 
              className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <MenuIcon className="w-5 h-5 mr-1" />
              <span className="font-medium">Menu</span>
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/cart" 
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors relative"
                >
                  <ShoppingCart className="w-5 h-5 mr-1" />
                  <span className="font-medium">Cart</span>
                  {items.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {items.length}
                    </span>
                  )}
                </Link>
                
                <Link 
                  to="/orders" 
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <History className="w-5 h-5 mr-1" />
                  <span className="font-medium">Orders</span>
                </Link>
                
                <button
                  onClick={() => signOut()}
                  className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <User className="w-5 h-5 mr-1" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <User className="w-5 h-5 mr-1" />
                <span className="font-medium">Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}