'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  onAddToCart: (productId: string) => void;
}

export default function ProductCard({ id, name, price, image, description, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{name}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
            €{price.toFixed(2)}
          </p>
          <button
            onClick={() => onAddToCart(id)}
            className="flex items-center justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            加入购物车
          </button>
        </div>
      </div>
    </div>
  );
} 