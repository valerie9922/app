'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function FuturePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">未来计划</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">水果订阅服务</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              我们计划推出水果订阅服务，让您可以定期收到新鲜的水果。您可以选择每周或每月的配送频率，以及您喜欢的水果种类。
            </p>
            <div className="relative h-64">
              <Image
                src="/images/fruit/fruit-Mix.jpg"
                alt="水果订阅"
                fill
                priority
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">水果加工产品</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              我们计划推出水果加工产品，如果干、果酱、果汁等。这些产品将使用我们精选的水果制作，保持水果的天然风味和营养。
            </p>
            <div className="relative h-64">
              <Image
                src="/images/fruit/mangoes.jpg"
                alt="水果加工"
                fill
                priority
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">水果种植体验</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              我们计划推出水果种植体验活动，让您可以亲自参与水果的种植过程，了解水果的生长过程，体验种植的乐趣。
            </p>
            <div className="relative h-64">
              <Image
                src="/images/fruit/mango_tree.png"
                alt="水果种植"
                fill
                priority
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">水果知识分享</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              我们计划推出水果知识分享平台，分享水果的营养价值、食用方法、保存技巧等知识，帮助您更好地了解和享用水果。
            </p>
            <div className="relative h-64">
              <Image
                src="/images/fruit/Plantation.png"
                alt="水果知识"
                fill
                priority
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}