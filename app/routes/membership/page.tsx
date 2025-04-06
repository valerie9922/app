'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// 会员计划
const membershipPlans = [
  {
    id: 'weekly',
    name: '每周配送',
    price: 20,
    period: '月',
    description: '每周配送新鲜水果到您家门口',
    features: [
      '每周1次配送',
      '每次3-4种不同水果',
      '总计约2-3公斤',
      '免费配送',
      '可暂停或取消'
    ],
    mostPopular: true,
  },
  {
    id: 'biweekly',
    name: '双周配送',
    price: 12,
    period: '月',
    description: '每两周配送一次新鲜水果',
    features: [
      '每两周1次配送',
      '每次3-4种不同水果',
      '总计约2-3公斤',
      '免费配送',
      '可暂停或取消'
    ],
    mostPopular: false,
  },
  {
    id: 'monthly',
    name: '月度配送',
    price: 8,
    period: '月',
    description: '每月配送一次大份量水果',
    features: [
      '每月1次配送',
      '每次4-5种不同水果',
      '总计约3-4公斤',
      '免费配送',
      '可暂停或取消'
    ],
    mostPopular: false,
  }
];

// FAQ数据
const faqs = [
  {
    question: '会员订阅如何运作？',
    answer: '选择您喜欢的会员计划并完成注册后，我们会按照您选择的频率（每周、每两周或每月）将新鲜的泰国水果直接配送到您家门口。您可以随时在账户中管理订阅，包括暂停、取消或更改配送频率。'
  },
  {
    question: '我可以选择配送的水果种类吗？',
    answer: '每次配送的水果种类主要取决于当季最新鲜的水果。但您可以在账户设置中设置喜好和不喜欢的水果，我们会尽量根据您的偏好进行配送。'
  },
  {
    question: '如果我不在家怎么办？',
    answer: '我们会在配送前一天通过邮件或短信通知您。如果您不在家，您可以选择将水果配送到邻居或安全的地方，或者重新安排配送时间。'
  },
  {
    question: '我可以随时取消订阅吗？',
    answer: '是的，您可以随时在账户中心取消订阅，无需长期合同。取消后，您不会被收取下一周期的费用。'
  },
  {
    question: '配送范围是哪里？',
    answer: '目前我们的服务覆盖荷兰全境，计划在未来扩展到更多欧洲国家。'
  }
];

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState('weekly');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-100 to-pink-50 dark:from-gray-800 dark:to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  成为会员，<span className="text-purple-600 dark:text-purple-400">享受新鲜</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  加入泰果汇会员，每周都能收到从泰国空运的新鲜热带水果。无需操心，只需等待美味送上门。
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#pricing" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
                    查看会员计划
                  </a>
                  <Link href="/about" className="px-8 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-400 font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300 border border-purple-200 dark:border-purple-900">
                    了解更多
                  </Link>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1621139265481-1a7686340d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="会员专享水果"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 会员特权 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">会员专享特权</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                作为泰果汇会员，您将享受一系列专属福利
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">优先获取稀有水果</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  会员可以优先获得季节性限量水果，无需担心错过。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">会员专享价格</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  会员在购买额外水果或礼盒时享有专属折扣。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">免费配送</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  所有会员订单均享受免费快速配送服务。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 会员计划 */}
        <section id="pricing" className="py-16 bg-purple-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">选择适合您的会员计划</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                根据您的需求选择最合适的配送频率
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden ${
                    plan.mostPopular 
                      ? 'ring-2 ring-purple-600 dark:ring-purple-400 transform scale-105 shadow-xl' 
                      : 'shadow-lg'
                  }`}
                >
                  {plan.mostPopular && (
                    <div className="bg-purple-600 dark:bg-purple-500 text-white text-center py-2 px-4 text-sm font-medium">
                      最受欢迎
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{plan.description}</p>
                    
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">€{plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                    </div>
                    
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3 text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`mt-8 w-full py-3 px-4 rounded-full font-medium ${
                        selectedPlan === plan.id
                          ? 'bg-purple-600 hover:bg-purple-700 text-white'
                          : 'bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300'
                      }`}
                    >
                      {selectedPlan === plan.id ? '已选择' : '选择此计划'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
                立即订阅
              </button>
            </div>
          </div>
        </section>

        {/* 客户评价 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">会员反馈</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                听听我们的会员们怎么说
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">K</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Karin</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">阿姆斯特丹</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  "每周收到新鲜的泰国水果是我最期待的事情！质量一直很好，比超市的新鲜多了。"
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">M</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Mark</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">鹿特丹</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  "订阅服务非常方便，水果种类多样且味道很棒。特别喜欢他们的芒果，从未尝过如此甜美的芒果！"
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">L</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Lisa</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">乌得勒支</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  "之前在亚洲旅行时爱上了热带水果，现在在荷兰也能享受到同样新鲜的味道，太棒了！"
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-purple-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">常见问题</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                了解更多关于泰果汇会员服务的信息
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                还有其他问题？请随时联系我们
              </p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
                联系客服
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 