'use client';

import React, { memo } from 'react';

const features = [
  {
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
      />
    ),
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $50'
  },
  {
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    ),
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Quality Guaranteed',
    description: '30-day money-back guarantee'
  },
  {
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z'
      />
    ),
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: '24/7 Support',
    description: 'Round-the-clock customer support'
  }
];

const FeaturesSection = memo(function FeaturesSection() {
  return (
    <div className='mt-16 py-12 bg-white rounded-xl shadow-sm'>
      <div className='max-w-4xl mx-auto px-6'>
        <h3 className='text-2xl font-bold text-gray-900 text-center mb-8'>
          Why Choose Us?
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
});

interface FeatureCardProps {
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, bgColor, iconColor, title, description }: FeatureCardProps) {
  return (
    <div className='text-center'>
      <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <svg
          className={`w-8 h-8 ${iconColor}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          {icon}
        </svg>
      </div>
      <h4 className='text-lg font-semibold text-gray-900 mb-2'>
        {title}
      </h4>
      <p className='text-gray-600'>
        {description}
      </p>
    </div>
  );
}

export default FeaturesSection;