'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: { line1: { colored: '泰国', normal: '直采', highlight: true }, line2: { colored: '新鲜', normal: '空运', highlight: true } },
      description: '从泰国果园空运新鲜热带水果，48小时内送达欧洲各地。体验不一样的热带风味！',
      image: '/images/fruit/mango.avif',
      link: '/products',
      altText: '泰国直采新鲜空运'
    },
    {
      title: { line1: { colored: '会员', normal: '专属' }, line2: { colored: '优惠', normal: '服务' } },
      description: '加入会员汇正会员，每周都能享受新鲜的泰国热带水果直达上门。',
      image: '/images/fruit/membership.png',
      link: '/membership',
      altText: '会员专属优惠服务'
    },
    {
      title: { line1: { colored: '认养', normal: '果树' }, line2: { colored: '体验', normal: '乐趣' } },
      description: '与泰国果园建立独特联系，收获专属于您的水果',
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
    <main className="min-h-screen bg-orange-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section with Slides - 仿照样图风格 */}
      <section className="pt-20 pb-12 bg-orange-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center mt-8">
            {/* 左侧文本 */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <div className="text-orange-600 dark:text-orange-400">泰国<span className="text-blue-600 dark:text-blue-400">直采</span></div>
                <div className="text-orange-600 dark:text-orange-400 mt-1">新鲜<span className="text-blue-600 dark:text-blue-400">空运</span></div>
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                从泰国果园空运新鲜热带水果，48小时内送达欧洲各地。体验不一样的热带风味！
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/products"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full text-lg font-medium transition duration-300"
                >
                  立即选购
                </Link>
                <Link
                  href="/membership"
                  className="bg-white hover:bg-gray-100 border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-full text-lg font-medium transition duration-300"
                >
                  加入会员
                </Link>
              </div>
            </div>
            
            {/* 右侧图片轮播 */}
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl" style={{height: "400px"}}>
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
      </section>

      {/* 特色水果区域 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">特色<span className="text-blue-600 dark:text-blue-400">水果</span></h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">直接从泰国空运的热带热带水果</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image
                  src="/images/fruit/mangoes.jpg"
                  alt="泰国金枕头芒果"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  泰国金枕头芒果
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  香甜多汁，口感柔软，口感比较粉，口味独特的芒果品种。
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    €12.99/kg
                  </p>
                  <Link href="/products/1" className="text-orange-600 dark:text-orange-400">
                    了解更多 →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image
                  src="/images/fruit/rambutan.JPG"
                  alt="泰国红毛丹"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  泰国红毛丹
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  外表毛刺，果肉透明，口感酥脆，甜中带清爽。
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    €15.99/kg
                  </p>
                  <Link href="/products/2" className="text-orange-600 dark:text-orange-400">
                    了解更多 →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image
                  src="/images/fruit/fruit-Mix.jpg"
                  alt="定制水果礼盒"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  定制水果礼盒
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  根据您的喜好定制水果组合，适合赠送亲友或自己享用。
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    €14.99/盒
                  </p>
                  <Link href="/products/5" className="text-orange-600 dark:text-orange-400">
                    了解更多 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/products" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300"
            >
              查看全部水果
            </Link>
          </div>
        </div>
      </section>

      {/* 会员服务区域 */}
      <section className="py-16 bg-orange-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl" style={{height: "400px"}}>
                <Image
                  src="/images/fruit/membership.png"
                  alt="会员专享服务"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">会员<span className="text-blue-600 dark:text-blue-400">专享</span>服务</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                加入会员汇正会员，每周都能享受新鲜的泰国热带水果直达上门。
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-3">
                    <CheckIcon className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">每周新鲜水果，定期配送</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-3">
                    <CheckIcon className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">专属会员价格和特别优惠</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-3">
                    <CheckIcon className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">可定制的水果组合</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-3">
                    <CheckIcon className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">免费配送服务</span>
                </li>
              </ul>
              
              <Link
                href="/membership"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300"
              >
                立即加入会员 - €20/月
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 认养果树区域 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">认养一棵<span className="text-blue-600 dark:text-blue-400">果树</span></h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">与泰国果园建立独特联系，收获专属于您的水果</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-3 mt-1">
                    <CheckIcon className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">年度认养费用和季节收获</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">支付一年的认养费用，享受全年的收获成果</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-3 mt-1">
                    <CheckIcon className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">定期更新树木生长状态</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">通过照片和视频了解您的果树生长情况</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-3 mt-1">
                    <CheckIcon className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">参与果树种植养护和收获活动</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">如果您去泰国旅游，可以参观您认养的果树</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-3 mt-1">
                    <CheckIcon className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">支持可持续农业和当地农民</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">您的认养活动直接帮助泰国当地果农</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link
                  href="/adopt"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300"
                >
                  了解更多
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl" style={{height: "500px"}}>
                <Image
                  src="/images/fruit/mango_tree.png"
                  alt="认养果树"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 从果园到餐桌区域 */}
      <section className="py-16 bg-orange-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">从<span className="text-blue-600 dark:text-blue-400">果园</span>到餐桌</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">我们的快速空运将热带水果新鲜送达</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-orange-100 dark:bg-orange-900 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">当日采摘</h3>
              <p className="text-gray-600 dark:text-gray-400">
                水果在泰国果园当天采摘，保证最新鲜的状态。
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-orange-100 dark:bg-orange-900 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">空运直达</h3>
              <p className="text-gray-600 dark:text-gray-400">
                通过航空运输，最快24小时内抵达欧洲。
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-orange-100 dark:bg-orange-900 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">快速配送</h3>
              <p className="text-gray-600 dark:text-gray-400">
                在荷兰分拣中心处理，立即上门1-3天内可送达。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-900 dark:via-orange-800 dark:to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            准备好体验泰国热带水果了吗？
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            加入会员汇，享受最新鲜的泰国水果直达上门。
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/products"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full text-lg font-medium transition duration-300"
            >
              浏览水果
            </Link>
            <Link
              href="/membership"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition duration-300"
            >
              加入会员
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
