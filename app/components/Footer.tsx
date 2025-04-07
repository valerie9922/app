'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              我们致力于将最<span className="text-blue-600 dark:text-blue-400">新鲜</span>的泰国水果带到欧洲，让您体验不一样的热带风味。
            </p>
            <div className="flex mt-6 space-x-4">
              <a 
                href="#" 
                className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300"
                aria-label="访问我们的Facebook主页"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                aria-label="访问我们的Twitter主页"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300"
                aria-label="访问我们的Instagram主页"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              快速<span className="text-blue-600 dark:text-blue-400">链接</span>
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-base text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-base text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400">
                  产品
                </Link>
              </li>
              <li>
                <Link href="/adopt" className="text-base text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400">
                  认养果树
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  会员服务
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              公司
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-base text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400">
                  招聘
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              订阅<span className="text-blue-600 dark:text-blue-400">我们</span>的通讯
            </h3>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              获取最新的水果上新、促销和会员特惠信息。
            </p>
            <form className="mt-4">
              <div className="flex">
                <label htmlFor="email-address" className="sr-only">电子邮件地址</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-md py-2 px-4 text-base text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  placeholder="输入您的邮箱"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 border border-transparent rounded-r-md py-2 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  订阅
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} 泰<span className="text-blue-600 dark:text-blue-400">果</span>汇. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 