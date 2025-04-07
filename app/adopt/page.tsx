'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AdoptPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      <section className="py-20 bg-orange-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">认养<span className="text-blue-600 dark:text-blue-400">果树</span></h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              认养一棵属于自己的果树，体验种植的乐趣，享受收获的喜悦
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-2xl">
              <div className="relative h-80">
                <Image
                  src="/images/fruit/mango_tree.png"
                  alt="芒果树"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  芒果树认养计划
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  认养一棵位于泰国的芒果树，获得专属于您的果树编号和认养证书。我们将定期向您发送树木生长状态更新和照片，让您远程体验种植的乐趣。
                </p>
                <div className="bg-orange-100 dark:bg-gray-700 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">认养福利</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      每年收到4-6次新鲜芒果空运直达(每次约2-3kg)
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      每月收到果树生长状态更新和照片
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      参观果园时可获得VIP接待，亲自探访您的果树
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      专属认养证书和果树铭牌
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      支持泰国当地农民和可持续农业
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="mb-4 sm:mb-0">
                    <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                      €299
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      /年
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      包含所有福利和水果配送
                    </p>
                  </div>
                  <button className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white px-8 py-3 rounded-lg transition duration-300 font-medium">
                    立即认养
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              认养流程
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto bg-orange-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  选择认养
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  填写认养表格，选择认养期限，完成支付
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto bg-orange-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  分配果树
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  我们为您分配一棵健康的芒果树，并发送认养证书
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto bg-orange-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  开始享受
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  开始接收果树状态更新和收获的水果
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