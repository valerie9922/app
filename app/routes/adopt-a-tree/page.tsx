'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// 可认养的树木类型
const treeTypes = [
  {
    id: 'mango',
    name: '芒果树',
    scientificName: 'Mangifera indica',
    price: 150,
    period: '年',
    description: '泰国特有的金枕头芒果树，每年可产出约30-50公斤优质芒果。',
    harvestSeason: '4月-6月',
    lifespan: '35-40年',
    careLevel: '中等',
    image: 'https://images.unsplash.com/photo-1605027538782-43a59f0ec59b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmdvJTIwdHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: 'durian',
    name: '榴莲树',
    scientificName: 'Durio zibethinus',
    price: 200,
    period: '年',
    description: '泰国著名的榴莲树，盛产期每年可产出约15-25个优质榴莲。',
    harvestSeason: '5月-8月',
    lifespan: '80-100年',
    careLevel: '高',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVyaWFuJTIwdHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: 'rambutan',
    name: '红毛丹树',
    scientificName: 'Nephelium lappaceum',
    price: 120,
    period: '年',
    description: '泰国特有的红毛丹树，每年可产出约150-200斤优质红毛丹。',
    harvestSeason: '5月-9月',
    lifespan: '25-30年',
    careLevel: '中等',
    image: 'https://images.unsplash.com/photo-1615383176546-6b0c6d6c5d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFtYnV0YW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
];

// 认养计划
const adoptionPlans = [
  {
    id: 'basic',
    name: '基础认养计划',
    price: 'tree.price',
    period: '年',
    features: [
      '每季度收到树木生长报告',
      '收获季节获得水果礼盒',
      '获得认养证书',
      '果园每月更新树木照片',
      '支持可持续农业'
    ],
    discount: 0,
  },
  {
    id: 'premium',
    name: '高级认养计划',
    price: 'tree.price * 1.5',
    period: '年',
    features: [
      '每月收到树木生长报告',
      '收获季节获得双倍水果礼盒',
      '获得认养证书和个性化铭牌',
      '果园每周更新树木照片',
      '优先获得特别水果品种',
      '每年获得一次泰国果园视频导览'
    ],
    discount: 0,
    recommended: true,
  },
  {
    id: 'family',
    name: '家庭认养计划',
    price: 'tree.price * 2.5',
    period: '年',
    features: [
      '认养多达3棵不同种类的树',
      '每月收到树木生长报告',
      '收获季节获得三倍水果礼盒',
      '获得认养证书和个性化铭牌',
      '果园每周更新树木照片和视频',
      '每季度获得一次泰国果园视频导览',
      '可以命名您的果树'
    ],
    discount: 0,
  },
];

export default function AdoptATreePage() {
  const [selectedTree, setSelectedTree] = useState(treeTypes[0]);
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const getPlanPrice = (planId: string) => {
    const plan = adoptionPlans.find(p => p.id === planId);
    if (!plan) return 0;
    
    switch (planId) {
      case 'basic':
        return selectedTree.price;
      case 'premium':
        return Math.round(selectedTree.price * 1.5);
      case 'family':
        return Math.round(selectedTree.price * 2.5);
      default:
        return selectedTree.price;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-100 to-green-50 dark:from-gray-800 dark:to-green-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  认养一棵 <span className="text-green-600 dark:text-green-400">果树</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  与泰国果园建立独特的联系，支持可持续农业，收获属于您的专属水果。
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#trees" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
                    浏览果树
                  </a>
                  <a href="#how-it-works" className="px-8 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-green-600 dark:text-green-400 font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300 border border-green-200 dark:border-green-900">
                    了解更多
                  </a>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1558464678-2c9c92fac8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJvcGljYWwlMjBvcmNoYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="泰国果园"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 认养流程 */}
        <section id="how-it-works" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">认养果树，收获不止是水果</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                认养一棵泰国果树，不仅能收获美味的水果，还能支持可持续农业和当地农民
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 dark:text-green-400 font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">选择您的果树</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  从多种热带水果树中选择您喜欢的品种，每种果树都有其独特的生长特性和收获时间。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 dark:text-green-400 font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">在线追踪生长</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  通过定期的照片和报告，在线追踪您的果树生长情况，见证从开花到结果的整个过程。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 dark:text-green-400 font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">享受收获</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  在收获季节，我们会将您的果树产出的新鲜水果空运到您家门口，让您尽情享用。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 果树展示 */}
        <section id="trees" className="py-16 bg-green-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">选择您的果树</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                我们精心选择了多种泰国优质果树供您选择
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treeTypes.map((tree) => (
                <div 
                  key={tree.id}
                  className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
                    selectedTree.id === tree.id ? 'ring-2 ring-green-600 dark:ring-green-400 transform scale-105' : 'hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedTree(tree)}
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={tree.image}
                      alt={tree.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tree.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{tree.scientificName}</p>
                      </div>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium px-2.5 py-0.5 rounded-full">
                        €{tree.price}/{tree.period}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">{tree.description}</p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="block text-gray-500 dark:text-gray-400">收获季节</span>
                        <span className="font-medium text-gray-900 dark:text-white">{tree.harvestSeason}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500 dark:text-gray-400">树龄</span>
                        <span className="font-medium text-gray-900 dark:text-white">{tree.lifespan}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 认养计划 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">选择认养计划</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                您已选择: <span className="font-medium text-green-600 dark:text-green-400">{selectedTree.name}</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {adoptionPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden ${
                    plan.recommended 
                      ? 'ring-2 ring-green-600 dark:ring-green-400 transform scale-105 shadow-xl' 
                      : 'shadow-lg'
                  }`}
                >
                  {plan.recommended && (
                    <div className="bg-green-600 dark:bg-green-500 text-white text-center py-2 px-4 text-sm font-medium">
                      推荐
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                    
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">€{getPlanPrice(plan.id)}</span>
                      <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                    </div>
                    
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-green-700 dark:text-green-300'
                      }`}
                    >
                      {selectedPlan === plan.id ? '已选择' : '选择此计划'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
                立即认养
              </button>
            </div>
          </div>
        </section>

        {/* 技术说明 */}
        <section className="py-16 bg-green-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-12 lg:mb-0">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtZXJhJTIwb3V0ZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80"
                    alt="果园监控技术"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">先进的监控技术</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  我们在果园中安装了高清摄像头和传感器，实时监控每棵果树的生长情况。
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">高清摄像头实时拍摄树木生长</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">土壤湿度和养分传感器监测健康状况</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">基于AI的生长预测和果实质量评估</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">通过手机APP随时查看您的果树状态</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">常见问题</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                了解更多关于果树认养的信息
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">认养的果树在哪里？</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">所有果树都位于泰国的专业果园中，由经验丰富的农民照料。我们的果园位于泰国最适合热带水果生长的地区，确保水果的最佳品质。</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">我可以去泰国看我的果树吗？</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">当然可以！我们欢迎认养者来果园参观自己的果树。如果您计划前往泰国，请提前联系我们，我们会为您安排果园导览。高级和家庭认养计划还包含虚拟果园导览。</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">如何收到我的水果？</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">在收获季节，我们会将您的果树产出的水果精心包装，通过快速空运直接送到您的家门口。水果将在采摘后48小时内送达，确保最佳新鲜度。</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">如果我的树没有结果怎么办？</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">虽然我们尽最大努力确保每棵树都能健康结果，但自然因素有时会影响收成。如果您的树在一个季节没有足够的收成，我们会从其他果树补充水果，确保您仍能收到约定数量的水果。</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">认养可以续约吗？</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">是的，认养计划到期后可以选择续约。长期认养同一棵树可以建立更深的联系，并且我们为连续认养超过3年的客户提供特别优惠。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-green-600 dark:bg-green-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">与果树建立独特的联系</h2>
            <p className="text-xl text-green-100 mb-8">
              认养一棵果树，见证生长的奇迹，收获鲜美的水果，同时支持可持续农业。
            </p>
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-green-600 font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
              立即认养果树
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 