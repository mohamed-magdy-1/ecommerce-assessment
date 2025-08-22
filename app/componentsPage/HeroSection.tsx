'use client';

import React from 'react';

interface HeroSectionProps {
  title?: string;
  description?: string;
}

export default function HeroSection({ 
  title = "Welcome to Our Store",
  description = "Discover our curated collection of premium products, carefully selected for style and quality."
}: HeroSectionProps) {
  return (
    <div className='text-center mb-12'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
        {title}
      </h1>
      <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
        {description}
      </p>
    </div>
  );
}