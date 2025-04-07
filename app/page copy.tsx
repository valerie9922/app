'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: {line1: {colored: '泰国', normal: '直采'}, line2: {colored: '新鲜', normal: '空运'}},
      description: '从泰国果园空运新鲜热带水果，48小时送达欧洲各地。',
      image: '/images/fruit/mango.avif',
      link: '/products',
      altText: '泰国直采新鲜空运'
    },
    {
      title: {line1: {colored: '会员', normal: '专属'}, line2: {colored: '优惠', normal: '服务'}},
      description: '加入会员，享受更多优惠和专属服务',
      image: '/images/fruit/membership.png',
      link: '/membership',
      altText: '会员专属优惠服务'
    },
    {
      title: {line1: {colored: '认养', normal: '果树'}, line2: {colored: '体验', normal: '乐趣'}},
      description: '认养一棵属于自己的果树，体验种植的乐趣',
      image: '/images/fruit/mango_tree.png',
      link: '/adopt',
      altText: '认养果树体验乐趣'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Slides */}
      <section className="relative h-[600px] bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between h-full py-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              {typeof slides[currentSlide].title === 'object' ? (
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  <div className="flex items-center">
                    <span className="text-orange-600 dark:text-orange-400">{slides[currentSlide].title.line1.colored}</span>
                    <span className="text-gray-900 dark:text-white">{slides[currentSlide].title.line1.normal}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-600 dark:text-orange-400">{slides[currentSlide].title.line2.colored}</span>
                    <span className="text-gray-900 dark:text-white">{slides[currentSlide].title.line2.normal}</span>
                  </div>
                </h1>
              ) : (
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-orange-600 dark:text-orange-400">
                  {slides[currentSlide].title}
                </h1>
              )}
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed font-light">{slides[currentSlide].description}</p>
              <Link
                href={slides[currentSlide].link}
                className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300 shadow-md hover:shadow-lg"
              >
                了解更多
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].altText}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-orange-600 w-6' : 'bg-gray-400 bg-opacity-60'
              }`}
              aria-label={`切换到幻灯片 ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm font-medium mb-4">精选推荐</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">精选水果</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/products/1"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-64">
                <Image
                  src="/images/fruit/mangoes.jpg"
                  alt="芒果"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  芒果
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  来自泰国的优质芒果，香甜多汁
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    €12.99/kg
                  </p>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/products/2"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-64">
                <Image
                  src="/images/fruit/durian.jpg"
                  alt="榴莲"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  榴莲
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  泰国顶级榴莲，果肉金黄，口感细腻
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    €25.99/kg
                  </p>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/products/3"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-64">
                <Image
                  src="/images/fruit/rambutan.JPG"
                  alt="红毛丹"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  红毛丹
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  新鲜红毛丹，果肉清甜多汁
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    €8.99/kg
                  </p>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/products/4"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-64">
                <Image
                  src="/images/fruit/fruit-Mix.jpg"
                  alt="水果礼盒"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  水果礼盒
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  精选多种泰国水果，送礼佳选
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    €49.99/盒
                  </p>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm font-medium mb-4">我们的优势</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">特色服务</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link
              href="/membership"
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-yellow-500"></div>
              <div className="relative h-64 mb-6">
                <Image
                  src="/images/fruit/membership.png"
                  alt="会员服务"
                  fill
                  className="object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                会员服务
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                加入会员，享受更多优惠和专属服务
              </p>
              <span className="inline-block text-orange-600 dark:text-orange-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                了解详情 →
              </span>
            </Link>

            <Link
              href="/adopt"
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-yellow-500"></div>
              <div className="relative h-64 mb-6">
                <Image
                  src="/images/fruit/mango_tree.png"
                  alt="认养果树"
                  fill
                  className="object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                认养果树
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                认养一棵属于自己的果树，体验种植的乐趣
              </p>
              <span className="inline-block text-orange-600 dark:text-orange-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                了解详情 →
              </span>
            </Link>

            <Link
              href="/about"
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-yellow-500"></div>
              <div className="relative h-64 mb-6">
                <Image
                  src="/images/fruit/Plantation.png"
                  alt="关于我们"
                  fill
                  className="object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                关于我们
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                了解更多关于泰果汇的故事
              </p>
              <span className="inline-block text-orange-600 dark:text-orange-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                了解详情 →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
