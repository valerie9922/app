'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      <section className="py-20 bg-orange-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">关于我们</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              泰果汇 - 为您带来最优质的泰国水果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">我们的故事</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                泰果汇成立于2025年，致力于将最优质的泰国水果带给欧洲的消费者。我们的创始人团队在泰国拥有多年的水果种植和贸易经验，深知如何挑选和运输最优质的水果。
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                我们与泰国当地的水果种植园建立了长期合作关系，确保每一颗水果都经过严格的质量把控。从采摘到运输，我们确保水果在最佳状态下送达，让您品尝到最新鲜的泰国水果。
              </p>
            </div>

            <div className="relative h-96">
              <Image
                src="/images/fruit/Plantation.png"
                alt="泰国水果种植园"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">品质保证</h3>
              <p className="text-gray-600 dark:text-gray-400">
                严格的质量把控，确保每一颗水果都达到最高标准
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">快速配送</h3>
              <p className="text-gray-600 dark:text-gray-400">
                全程冷链运输，确保水果新鲜送达
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">优质服务</h3>
              <p className="text-gray-600 dark:text-gray-400">
                专业的客服团队，为您提供最贴心的服务
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">联系我们</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">地址</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Fruit Street, Amsterdam, Netherlands
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">联系方式</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  电话: +31 123 456 789<br />
                  邮箱: info@thaifruit.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 