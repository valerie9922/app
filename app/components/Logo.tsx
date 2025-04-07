'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: number;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 50, showText = true }) => {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src="/images/logo/logo.png"
          alt="泰果汇Logo"
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>
      {showText && (
        <span className="ml-2 text-xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow">
          泰<span className="text-blue-600">果</span>汇
        </span>
      )}
    </Link>
  );
};

export default Logo; 