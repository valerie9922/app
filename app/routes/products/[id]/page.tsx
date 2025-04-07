import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { ShoppingCartIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

// 产品数据
const products = [
  {
    id: '1',
    name: '芒果',
    price: 12.99,
    description: '泰国金枕头芒果以其香甜多汁，肉质鲜嫩的特点而闻名。果肉呈金黄色，纤维少，口感极佳。',
    images: [
      '/images/fruit/mangoes.jpg',
      '/images/fruit/mangoes.jpg',
      '/images/fruit/mangoes.jpg',
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
    name: '红毛丹',
    price: 15.99,
    description: '泰国红毛丹果肉细腻，甜度高，带有独特的香气，是泰国最受欢迎的水果之一。',
    images: [
      '/images/fruit/rambutan.JPG',
      '/images/fruit/rambutan.JPG',
      '/images/fruit/rambutan.JPG',
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
      '/images/fruit/longan.jpg',
      '/images/fruit/longan.jpg',
      '/images/fruit/longan.jpg',
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
      '/images/fruit/mangosteen.JPG',
      '/images/fruit/mangosteen.JPG',
      '/images/fruit/mangosteen.JPG',
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
    name: '水果礼盒',
    price: 14.99,
    description: '泰国水果礼盒包含多种新鲜热带水果，是送礼和家庭享用的理想选择。',
    images: [
      '/images/fruit/fruit-Mix.jpg',
      '/images/fruit/fruit-Mix.jpg',
      '/images/fruit/fruit-Mix.jpg',
    ],
    origin: '泰国',
    unit: '盒',
    details: [
      { label: '产地', value: '泰国' },
      { label: '重量', value: '2kg' },
      { label: '保质期', value: '4天' },
      { label: '储存方式', value: '冷藏' },
    ],
    reviews: [
      {
        id: 1,
        user: '赵女士',
        rating: 4,
        comment: '很新鲜，口感不错，包装精美。',
        date: '2024-03-01',
      },
    ],
  },
];

// 为静态导出生成路径参数
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// 动态生成页面元数据
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = products.find(p => p.id === params.id);
  return {
    title: product ? `${product.name} | 泰果汇` : '商品 | 泰果汇',
    description: product?.description || '泰国直采新鲜热带水果'
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // 根据ID获取产品数据
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">产品未找到</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              抱歉，您访问的产品不存在或已被移除。
            </p>
            <Link
              href="/products"
              className="mt-8 inline-block px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg"
            >
              返回产品列表
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-orange-600 hover:text-orange-800">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              返回产品列表
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* 产品图片 */}
              <div>
                <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex space-x-4">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative h-20 w-20 rounded-md overflow-hidden border-2 ${
                        index === 0 ? 'border-orange-500' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - 图片 ${index + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 产品信息 */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < 4 ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    {product.reviews.length} 条评价
                  </span>
                </div>
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                  €{product.price}/{product.unit}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {product.description}
                </p>
                
                <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    产品详情
                  </h3>
                  <dl className="grid grid-cols-2 gap-3">
                    {product.details.map((detail) => (
                      <div key={detail.label} className="flex flex-col">
                        <dt className="text-sm text-gray-500 dark:text-gray-400">
                          {detail.label}
                        </dt>
                        <dd className="text-gray-700 dark:text-gray-300">
                          {detail.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    数量
                  </label>
                  <div className="flex items-center">
                    <button
                      className="rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 p-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      defaultValue="1"
                      className="w-16 text-center border-y border-gray-300 dark:border-gray-600 p-2 focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white dark:bg-gray-800"
                    />
                    <button
                      className="rounded-r-md border border-l-0 border-gray-300 dark:border-gray-600 p-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <Link
                  href="/cart"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg flex items-center justify-center"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  加入购物车
                </Link>
              </div>
            </div>
            
            {/* 评价部分 */}
            <div className="p-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                客户评价
              </h2>
              
              {product.reviews.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-white mr-2">
                          {review.user}
                        </span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  暂无评价
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 