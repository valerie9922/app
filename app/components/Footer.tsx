import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaWeixin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">泰果汇</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              从泰国直接空运新鲜热带水果，快速送达欧洲各地。
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                <span className="sr-only">WeChat</span>
                <FaWeixin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">
                  产品
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/products" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      热带水果
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/gift-boxes" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      礼盒装
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/custom" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      定制产品
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">
                  服务
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/membership" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      会员服务
                    </Link>
                  </li>
                  <li>
                    <Link href="/adopt-a-tree" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      认养果树
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      配送方式
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">
                  公司
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      关于我们
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      博客
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      招聘
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">
                  客户支持
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/contact" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      联系我们
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      常见问题
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      隐私政策
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      服务条款
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} 泰果汇 (Thailand Fruit Club). 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 