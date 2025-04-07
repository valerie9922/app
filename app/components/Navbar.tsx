'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' },
  { code: 'nl', name: 'Nederlands' },
//   { code: 'th', name: '泰语' },
];

const navItems = [
  { name: '首页', href: '/' },
  { name: '产品', href: '/products' },
  { name: '认养果树', href: '/adopt' },
  { name: '会员服务', href: '/membership' },
  { name: '关于我们', href: '/about' },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('zh');
  const pathname = usePathname();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const changeLang = (langCode: string) => {
    setCurrentLang(langCode);
    // 这里会集成next-intl的语言切换功能
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Logo size={40} />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-orange-500 text-gray-900 dark:text-white'
                        : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative inline-block text-left mr-4">
              <select 
                value={currentLang}
                onChange={(e) => changeLang(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-1 px-2 text-sm"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-gray-500 rounded-full hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>

            <Link href="/cart" className="p-2 ml-4 text-gray-500 hover:text-orange-600 dark:hover:text-orange-400">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>

            <Link href="/account" className="p-2 ml-4 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-500 rounded-md hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive
                      ? 'text-orange-600 dark:text-orange-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-1">
                <select 
                  value={currentLang}
                  onChange={(e) => changeLang(e.target.value)}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-1 px-2 text-sm w-full"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 ml-4 text-gray-500 rounded-full hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>
              <Link href="/cart" className="p-2 ml-4 text-gray-500 hover:text-orange-600 dark:hover:text-orange-400">
                <ShoppingCartIcon className="h-6 w-6" />
              </Link>
              <Link href="/account" className="p-2 ml-4 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                <UserIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;