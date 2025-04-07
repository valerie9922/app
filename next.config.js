/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 部署时忽略ESLint错误
  },
  typescript: {
    ignoreBuildErrors: true, // 忽略TypeScript错误
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  output: 'export', // 使用静态导出模式
  distDir: 'out', // 输出目录
};

module.exports = nextConfig;