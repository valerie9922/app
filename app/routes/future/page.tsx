'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  CurrencyEuroIcon, 
  GlobeAltIcon, 
  LanguageIcon, 
  DevicePhoneMobileIcon, 
  ShoppingCartIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: '社交登录',
    description: '支持微信、Google、Facebook 等社交账号一键登录，让登录更便捷',
    icon: UserGroupIcon,
    status: '计划中',
    phase: '第二阶段',
  },
  {
    name: '多语言支持',
    description: '支持中文、英文、荷兰语、法语等多种语言，服务更多用户',
    icon: LanguageIcon,
    status: '计划中',
    phase: '第二阶段',
  },
  {
    name: '移动应用',
    description: 'iOS 和 Android 原生应用，随时随地购物，享受更流畅的体验',
    icon: DevicePhoneMobileIcon,
    status: '计划中',
    phase: '第三阶段',
  },
  {
    name: '全球配送',
    description: '支持欧洲各国配送，实时物流追踪，让您随时掌握订单动态',
    icon: GlobeAltIcon,
    status: '计划中',
    phase: '第三阶段',
  },
  {
    name: '会员系统',
    description: '会员等级、积分奖励、专属优惠，让您的每一笔消费都更有价值',
    icon: UserGroupIcon,
    status: '计划中',
    phase: '第二阶段',
  },
  {
    name: '在线支付',
    description: '支持信用卡、iDEAL、微信支付、支付宝等多种支付方式，支付更便捷',
    icon: CurrencyEuroIcon,
    status: '计划中',
    phase: '第二阶段',
  },
  {
    name: '实时库存',
    description: '实时显示库存状态，避免超卖，确保您能买到心仪的商品',
    icon: ShoppingCartIcon,
    status: '计划中',
    phase: '第三阶段',
  },
  {
    name: '智能推荐',
    description: '基于用户喜好和购买历史的个性化推荐，发现更多您可能喜欢的商品',
    icon: CheckCircleIcon,
    status: '计划中',
    phase: '第三阶段',
  },
];

const phases = [
  {
    name: '第一阶段',
    description: '基础功能实现',
    features: ['用户认证', '产品展示', '购物车', '订单管理'],
    timeline: '2024 Q2',
  },
  {
    name: '第二阶段',
    description: '增强功能开发',
    features: ['社交登录', '多语言支持', '会员系统', '支付集成'],
    timeline: '2024 Q3',
  },
  {
    name: '第三阶段',
    description: '高级功能实现',
    features: ['移动应用', '全球配送', '实时库存', '智能推荐'],
    timeline: '2024 Q4',
  },
];

export default function FutureFeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              未来功能规划
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              我们正在不断改进和完善平台功能，为用户提供更好的购物体验
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{feature.status}</span>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {feature.phase}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">开发路线图</h2>
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-between">
                  {phases.map((phase, index) => (
                    <div key={phase.name} className="text-center">
                      <span className="relative px-4 bg-white dark:bg-gray-900 text-sm font-medium text-purple-600 dark:text-purple-400">
                        {phase.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {phases.map((phase) => (
                  <div key={phase.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{phase.name}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{phase.description}</p>
                    <p className="mt-2 text-sm font-medium text-purple-600 dark:text-purple-400">{phase.timeline}</p>
                    <ul className="mt-4 space-y-2">
                      {phase.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 