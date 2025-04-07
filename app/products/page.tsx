'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '../store/cart';

// 产品数据
const products = [
  {
    id: '1',
    name: '芒果',
    price: 12.99,
    description: '泰国芒果以其香甜多汁，肉质鲜嫩的特点而闻名。果肉呈金黄色，纤维少，口感极佳。',
    image: '/images/fruit/mangoes.jpg',
    category: '芒果',
    origin: '泰国',
    unit: 'kg',
  },
  {
    id: '2',
    name: '定制水果礼盒',
    price: 15.99,
    description: '精心搭配的泰国水果礼盒，包含多种当季新鲜水果，是送礼佳选。',
    image: '/images/fruit/fruit-Mix.jpg',
    category: '热带水果',
    origin: '泰国',
    unit: '盒',
  },
  {
    id: '3',
    name: '龙眼',
    price: 9.99,
    description: '泰国龙眼果肉晶莹剔透，甜而不腻，营养丰富，是夏季消暑佳品。',
    image: '/images/fruit/longan.jpg',
    category: '热带水果',
    origin: '泰国',
    unit: 'kg',
  },
  {
    id: '4',
    name: '山竹',
    price: 18.99,
    description: '泰国山竹果肉洁白如玉，口感细腻，酸甜适中，被誉为"水果皇后"。',
    image: '/images/fruit/mangosteen.JPG',
    category: '热带水果',
    origin: '泰国',
    unit: 'kg',
  },
  {
    id: '5',
    name: '红毛丹',
    price: 14.99,
    description: '泰国红毛丹果肉鲜嫩多汁，甜度适中，富含维生素C，是健康水果的首选。',
    image: '/images/fruit/rambutan.JPG',
    category: '热带水果',
    origin: '泰国',
    unit: 'kg',
  },
];

// 获取所有分类
const categories = Array.from(new Set(products.map(product => product.category)));

export default function ProductsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  // 过滤产品
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      unit: product.unit,
    });
    alert(`已添加 ${product.name} 到购物车`);
  };

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">泰国热带水果</h1>
          
          {/* 搜索和筛选 */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="搜索水果..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg"
              >
                {showFilters ? '隐藏筛选' : '显示筛选'}
              </button>
            </div>

            {showFilters && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg ${
                    !selectedCategory
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  全部
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedCategory === category
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 产品列表 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                        €{product.price}/{product.unit}
                      </span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm font-medium px-2.5 py-0.5 rounded-full">
                        {product.origin}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full flex items-center justify-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg"
                  >
                    <ShoppingCartIcon className="h-5 w-5 mr-2" />
                    加入购物车
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">没有找到匹配的产品</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 