'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
            
            <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
              订单提交成功！
            </h1>
            
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              感谢您的订购。我们已收到您的订单，订单号为：
              <span className="font-medium text-gray-900 dark:text-white">
                #{Math.floor(100000 + Math.random() * 900000)}
              </span>
            </p>
            
            <div className="mt-8 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  后续步骤
                </h2>
                
                <ul className="mt-4 space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                      <CheckCircleIcon />
                    </span>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">
                      我们将通过邮件发送订单确认信息
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                      <CheckCircleIcon />
                    </span>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">
                      订单处理完成后，您将收到发货通知
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                      <CheckCircleIcon />
                    </span>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">
                      预计送达时间：48小时内
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 space-x-4">
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700"
              >
                继续购物
              </Link>
              <Link
                href="/account/orders"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-full shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                查看订单
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 