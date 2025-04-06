'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CreditCardIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

// 模拟购物车数据，在实际应用中会从状态管理或API获取
const cartItems = [
  {
    id: 1,
    name: '金枕头芒果',
    price: 12.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078',
    unit: 'kg',
  },
  {
    id: 3,
    name: '龙眼',
    price: 14.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e',
    unit: 'kg',
  },
];

// 支付方式选项
const paymentMethods = [
  { id: 'credit_card', name: '信用卡', icon: CreditCardIcon },
  { id: 'ideal', name: 'iDEAL银行转账', icon: BuildingLibraryIcon },
  { id: 'wechat', name: '微信支付', icon: () => (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.8 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.19,8 16.38,8 16.56,8.03C15.59,5.67 12.82,4 9.5,4M6.5,6.5A1,1 0 0,1 7.5,7.5A1,1 0 0,1 6.5,8.5A1,1 0 0,1 5.5,7.5A1,1 0 0,1 6.5,6.5M11.5,6.5A1,1 0 0,1 12.5,7.5A1,1 0 0,1 11.5,8.5A1,1 0 0,1 10.5,7.5A1,1 0 0,1 11.5,6.5M16,9C13.24,9 11,11.24 11,14C11,16.76 13.24,19 16,19C16.84,19 17.63,18.81 18.36,18.46L20,19.5L19.5,17.5C20.44,16.5 21,15.31 21,14C21,11.24 18.76,9 16,9M14,11.5A1,1 0 0,1 15,12.5A1,1 0 0,1 14,13.5A1,1 0 0,1 13,12.5A1,1 0 0,1 14,11.5M18,11.5A1,1 0 0,1 19,12.5A1,1 0 0,1 18,13.5A1,1 0 0,1 17,12.5A1,1 0 0,1 18,11.5Z" />
    </svg>
  ) },
  { id: 'alipay', name: '支付宝', icon: () => (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.71,5.46C7.58,5.46 6.66,5.67 6,6.05V8.41H8.26V7.33H9.93V8.41H11.43V9.95H9.93V10.65H11.43V12.39H6.17V13.83H8.26V18.5H9.93V13.83H12.97V18.34H14.61V10.65H12.97V9.95H14.61V8.41H15.91V7.33H14.61V5.96C16.37,6.33 18.55,8.13 19.39,9.7H21C19.92,7.31 17.03,5.46 14.61,5.46M3,8.64V18.61H21V12.39H22V7.36H20L14.5,3L9,7.36H3V8.64Z" />
    </svg>
  ) },
];

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '荷兰',
  });
  
  const [selectedPayment, setSelectedPayment] = useState('credit_card');
  
  // 计算订单金额
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  const deliveryFee = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + deliveryFee;

  // 表单处理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 在实际应用中，这里会将订单数据发送到后端API
    alert('订单已提交！');
    
    // 模拟成功后重定向
    window.location.href = '/thank-you';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">结账</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              请填写您的配送信息和支付方式
            </p>
          </div>
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            {/* 配送信息表单 */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit}>
                <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg mb-6">
                  <div className="px-4 py-5 sm:p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">配送信息</h2>
                    
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          名
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          姓
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          电子邮箱
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div className="sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          电话
                        </label>
                        <div className="mt-1">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div className="sm:col-span-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          街道地址
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          城市
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          邮政编码
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="postalCode"
                            id="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          国家
                        </label>
                        <div className="mt-1">
                          <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                          >
                            <option value="荷兰">荷兰</option>
                            <option value="比利时">比利时</option>
                            <option value="德国">德国</option>
                            <option value="法国">法国</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 支付方式 */}
                <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg mb-6">
                  <div className="px-4 py-5 sm:p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">支付方式</h2>
                    
                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="flex items-center">
                          <input
                            id={method.id}
                            name="paymentMethod"
                            type="radio"
                            checked={selectedPayment === method.id}
                            onChange={() => setSelectedPayment(method.id)}
                            className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 dark:border-gray-600"
                          />
                          <label htmlFor={method.id} className="ml-3 flex items-center cursor-pointer">
                            <method.icon className="h-6 w-6 text-gray-500 dark:text-gray-400 mr-2" />
                            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              {method.name}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    {selectedPayment === 'credit_card' && (
                      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            卡号
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="cardNumber"
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div className="sm:col-span-4">
                          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            持卡人姓名
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="cardName"
                              id="cardName"
                              className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div className="sm:col-span-1">
                          <label htmlFor="expDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            到期日
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="expDate"
                              id="expDate"
                              placeholder="MM/YY"
                              className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div className="sm:col-span-1">
                          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            CVC
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="cvc"
                              id="cvc"
                              placeholder="123"
                              className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Link href="/cart" className="bg-white dark:bg-gray-700 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    返回购物车
                  </Link>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    完成订单
                  </button>
                </div>
              </form>
            </div>
            
            {/* 订单摘要 */}
            <div className="mt-10 lg:mt-0 lg:col-span-5">
              <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">订单摘要</h2>
                  
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-4 flex">
                          <div className="flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                                <h3>{item.name}</h3>
                                <p className="ml-4">€{(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {item.quantity} x €{item.price}/{item.unit}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                    <div className="flex justify-between text-sm">
                      <dt className="font-medium text-gray-900 dark:text-white">小计</dt>
                      <dd className="text-gray-700 dark:text-gray-300">€{subtotal.toFixed(2)}</dd>
                    </div>
                    
                    <div className="flex justify-between text-sm mt-2">
                      <dt className="font-medium text-gray-900 dark:text-white">配送费</dt>
                      <dd className="text-gray-700 dark:text-gray-300">
                        {deliveryFee === 0 ? '免费' : `€${deliveryFee.toFixed(2)}`}
                      </dd>
                    </div>
                    
                    <div className="flex justify-between text-base font-medium mt-4">
                      <dt className="text-gray-900 dark:text-white">总计</dt>
                      <dd className="text-gray-900 dark:text-white">€{total.toFixed(2)}</dd>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="rounded-md bg-gray-50 dark:bg-gray-700 p-4">
                      <div className="flex">
                        <div className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                          <p>
                            完成订单即表示您同意我们的<a href="#" className="text-purple-600 hover:text-purple-500 dark:text-purple-400">服务条款</a>和<a href="#" className="text-purple-600 hover:text-purple-500 dark:text-purple-400">隐私政策</a>。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 