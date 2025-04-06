'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { XMarkIcon, PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '../../store/cart';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const router = useRouter();
  const { items, removeItem, updateQuantity: updateCartQuantity, clearCart, getTotal } = useCartStore();
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  
  // 计算购物车总额
  const subtotal = getTotal();
  const deliveryFee = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + deliveryFee - discountAmount;

  // 更新商品数量
  const updateItemQuantity = (id: number, action: 'increase' | 'decrease') => {
    const item = items.find(i => i.id === id);
    if (!item) return;
    
    const newQuantity = action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    updateCartQuantity(id, newQuantity);
  };

  // 应用优惠券
  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'FRUIT10') {
      setDiscountAmount(subtotal * 0.1); // 10% 折扣
      setIsApplyingCoupon(false);
      setCouponCode('');
    } else {
      alert('无效优惠券');
    }
  };

  const handleCheckout = () => {
    // TODO: 实现结账功能
    router.push('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">购物车是空的</h1>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                快去挑选一些喜欢的水果吧！
              </p>
              <button
                onClick={() => router.push('/products')}
                className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
              >
                去购物
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">购物车</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {items.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex items-center">
                        <div className="relative h-24 w-24 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="ml-6 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                          
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <button
                                onClick={() => updateItemQuantity(item.id, 'decrease')}
                                className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-lg"
                              >
                                -
                              </button>
                              <span className="w-12 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateItemQuantity(item.id, 'increase')}
                                className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-lg"
                              >
                                +
                              </button>
                            </div>
                            
                            <p className="text-lg font-medium text-gray-900 dark:text-white">
                              €{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  订单摘要
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">商品总价</span>
                    <span className="text-gray-900 dark:text-white">€{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">运费</span>
                    <span className="text-gray-900 dark:text-white">
                      {deliveryFee === 0 ? '免费' : `€${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  
                  {discountAmount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">折扣</span>
                      <span className="text-green-600 dark:text-green-400">-€{discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        总计
                      </span>
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        €{total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
                  >
                    去结账
                  </button>
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