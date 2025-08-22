'use client';

import { useProducts } from '../app/hooks/useProducts';
import HeroSection from '../app/componentsPage/HeroSection';
import SearchBar from '../app/componentsPage/SearchBar';
import ProductsGrid from '../app/componentsPage/ProductsGrid';
import FeaturesSection from '../app/componentsPage/FeaturesSection';

export default function Home() {
  const { products, loading, error, searchTerm, setSearchTerm } = useProducts();

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto px-4 py-8'>
        <HeroSection />
        
        <div className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
            Featured Products
          </h2>
          
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          
          <ProductsGrid 
            products={products}
            loading={loading}
            error={error}
          />
        </div>

        <FeaturesSection />
      </div>
    </div>
  );
}