'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MembershipPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      <section className="py-20 bg-orange-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">会员专享服务</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              加入泰果汇会员，享受更多专属权益
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">基础会员</h2>
              <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-4">€20/月</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">每周新鲜水果配送</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">9折会员价格</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">免费配送</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                立即加入
              </button>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">高级会员</h2>
              <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-4">€35/月</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">每周两次新鲜水果配送</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">8折会员价格</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">免费配送</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">专属客服</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                立即加入
              </button>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">企业会员</h2>
              <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-4">€50/月</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">每周三次新鲜水果配送</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">7折会员价格</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">免费配送</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">专属客服</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">定制水果礼盒</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                立即加入
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 