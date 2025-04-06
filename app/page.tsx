import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="text-purple-600 dark:text-purple-400">泰国</span>直采 <br/>
              <span className="text-purple-600 dark:text-purple-400">新鲜</span>空运
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              从泰国果园空运新鲜热带水果，48小时内送达欧洲各地。
              体验不一样的热带风味！
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
                立即选购
              </Link>
              <Link href="/membership" className="px-8 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-400 font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300 border border-purple-200 dark:border-purple-900">
                加入会员
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-80 md:h-96 lg:h-[500px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="新鲜热带水果"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* 特色产品 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">特色水果</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">直接从泰国空运的当季热带水果</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 芒果 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
                  alt="泰国芒果"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">泰国金枕头芒果</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">香甜多汁，肉质鲜嫩，口感极佳的优质芒果品种。</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">€12.99/kg</span>
                  <Link href="/products/mango" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                    了解更多 &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* 毛朱丹 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtYnV0YW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="毛朱丹"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">泰国毛朱丹</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">外表奇特，果肉晶莹剔透，口感爽脆，甜中带酸。</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">€15.99/kg</span>
                  <Link href="/products/rambutan" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                    了解更多 &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* 龙眼 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1622544807306-3e4756e0ce4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
                  alt="龙眼"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">泰国龙眼</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">肉质细腻，清甜多汁，营养丰富的热带水果。</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">€14.99/kg</span>
                  <Link href="/products/longan" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                    了解更多 &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/products" className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
              查看全部水果
            </Link>
          </div>
        </div>
      </section>

      {/* 会员服务 */}
      <section className="py-20 bg-purple-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="relative h-80 md:h-96 lg:h-[500px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1580913428706-c311e67898b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="会员服务"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">会员专享服务</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                加入泰果汇会员，每周都能享受新鲜的泰国热带水果直送上门。
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">每周新鲜水果，定期配送</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">专属会员价格和特别优惠</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">可定制的水果组合</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">免费配送服务</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/membership" className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
                  立即加入会员 - €20/月
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 认养果树 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">认养一棵果树</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">与泰国果园建立独特联系，收获专属于您的水果</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                通过认养计划，您将获得：
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">来自您认养的果树的季节性收获</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">实时监控果树的生长状态</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">参与果树的命名和在线社区活动</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">支持可持续农业和当地农民</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/adopt-a-tree" className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
                  了解更多
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 lg:h-[500px] w-full order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="认养果树"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 物流说明 */}
      <section className="py-20 bg-purple-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">从果园到餐桌</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">我们的快速空运物流确保水果新鲜送达</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">当日采摘</h3>
              <p className="text-gray-600 dark:text-gray-400">
                水果在泰国果园当天采摘，保证最新鲜的状态。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">空运直达</h3>
              <p className="text-gray-600 dark:text-gray-400">
                通过航空运输，最快24小时内抵达欧洲。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">快速配送</h3>
              <p className="text-gray-600 dark:text-gray-400">
                在荷兰的配送中心处理后，送货上门最快当天即可到达。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600 dark:bg-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">准备好体验泰国热带水果了吗？</h2>
          <p className="text-xl text-purple-100 mb-8">
            加入泰果汇，享受最新鲜的泰国水果直送上门。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-3 bg-white hover:bg-gray-100 text-purple-600 font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300">
              浏览水果
            </Link>
            <Link href="/membership" className="px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300 border border-purple-500">
              加入会员
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
