'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '../../../store/cart';

// 产品数据
const products = [
  {
    id: '1',
    name: '金枕头芒果',
    price: 12.99,
    description: '泰国金枕头芒果以其香甜多汁，肉质鲜嫩的特点而闻名。果肉呈金黄色，纤维少，口感极佳。',
    images: [
      'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1553279753-4a7a9a0f3b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1553279753-4a7a9a0f3b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
    ],
    origin: '泰国',
    unit: 'kg',
    details: [
      { label: '产地', value: '泰国' },
      { label: '重量', value: '1kg' },
      { label: '保质期', value: '7天' },
      { label: '储存方式', value: '冷藏' },
    ],
    reviews: [
      {
        id: 1,
        user: '张先生',
        rating: 5,
        comment: '芒果非常新鲜，口感很好，下次还会购买！',
        date: '2024-03-15',
      },
      {
        id: 2,
        user: '李女士',
        rating: 4,
        comment: '包装很好，水果很新鲜，就是价格有点贵。',
        date: '2024-03-10',
      },
    ],
  },
  {
    id: '2',
    name: '毛朱丹',
    price: 15.99,
    description: '泰国毛朱丹果肉细腻，甜度高，带有独特的香气，是泰国最受欢迎的水果之一。',
    images: [
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    ],
    origin: '泰国',
    unit: 'kg',
    details: [
      { label: '产地', value: '泰国' },
      { label: '重量', value: '1kg' },
      { label: '保质期', value: '5天' },
      { label: '储存方式', value: '冷藏' },
    ],
    reviews: [
      {
        id: 1,
        user: '王先生',
        rating: 5,
        comment: '非常好吃，甜度刚好，果肉很嫩。',
        date: '2024-03-12',
      },
    ],
  },
  {
    id: '3',
    name: '龙眼',
    price: 9.99,
    description: '泰国龙眼果肉晶莹剔透，甜而不腻，营养丰富，是夏季消暑佳品。',
    images: [
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    ],
    origin: '泰国',
    unit: 'kg',
    details: [
      { label: '产地', value: '泰国' },
      { label: '重量', value: '1kg' },
      { label: '保质期', value: '3天' },
      { label: '储存方式', value: '冷藏' },
    ],
    reviews: [
      {
        id: 1,
        user: '刘女士',
        rating: 4,
        comment: '很新鲜，甜度适中，就是有点小贵。',
        date: '2024-03-08',
      },
    ],
  },
  {
    id: '4',
    name: '山竹',
    price: 18.99,
    description: '泰国山竹果肉洁白如玉，口感细腻，酸甜适中，被誉为"水果皇后"。',
    images: [
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    ],
    origin: '泰国',
    unit: 'kg',
    details: [
      { label: '产地', value: '泰国' },
      { label: '重量', value: '1kg' },
      { label: '保质期', value: '5天' },
      { label: '储存方式', value: '冷藏' },
    ],
    reviews: [
      {
        id: 1,
        user: '陈先生',
        rating: 5,
        comment: '品质很好，果肉饱满，非常满意！',
        date: '2024-03-05',
      },
    ],
  },
  {
    id: '5',
    name: '红毛丹',
    price: 14.99,
    description: '泰国红毛丹果肉鲜嫩多汁，甜度适中，富含维生素C，是健康水果的首选。',
    images: [
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    ],
    origin: '泰国',
    unit: 'kg',
    details: [
      { label: '产地', value: '泰国' },
      { label: '重量', value: '1kg' },
      { label: '保质期', value: '4天' },
      { label: '储存方式', value: '冷藏' },
    ],
    reviews: [
      {
        id: 1,
        user: '赵女士',
        rating: 4,
        comment: '很新鲜，口感不错，就是有点贵。',
        date: '2024-03-01',
      },
    ],
  },
  {
    id: '6',
    name: '榴莲',
    price: 25.99,
    description: '泰国榴莲果肉金黄，香气浓郁，口感绵密，被誉为"水果之王"。',
    images: [
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    ],
    origin: '泰国',
    unit: 'kg',
    details: [
      { label: '产地', value: '泰国' },
      { label: '重量', value: '1kg' },
      { label: '保质期', value: '3天' },
      { label: '储存方式', value: '冷藏' },
    ],
    reviews: [
      {
        id: 1,
        user: '孙先生',
        rating: 5,
        comment: '非常好吃，香气浓郁，果肉饱满！',
        date: '2024-02-28',
      },
    ],
  },
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  // 根据ID获取产品数据
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">产品未找到</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              抱歉，您访问的产品不存在或已被移除。
            </p>
            <button
              onClick={() => router.push('/products')}
              className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
            >
              返回产品列表
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      unit: product.unit,
    });
    alert(`已添加 ${quantity}${product.unit} ${product.name} 到购物车`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 产品图片 */}
            <div className="space-y-4">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-purple-500' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - 图片 ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* 产品信息 */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{product.description}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  €{product.price}/{product.unit}
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  {product.origin}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-gray-700 dark:text-gray-300">数量：</label>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg"
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  加入购物车
                </button>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">产品详情</h2>
                <div className="grid grid-cols-2 gap-4">
                  {product.details.map((detail, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{detail.label}</span>
                      <span className="text-gray-900 dark:text-white">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 用户评价 */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">用户评价</h2>
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{review.user}</h3>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${
                              i < review.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 