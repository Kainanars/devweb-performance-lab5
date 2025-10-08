import React, { useMemo } from 'react';
import { useAppContext } from '../contexts/AppContext';
import ProductCard from './ProductCard';

const ProductList = React.memo(() => {
  const { state } = useAppContext();
  const { products, searchTerm, selectedCategory } = state;

  console.log('ProductList rendered');

  // seMemo para filtrar
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
});

ProductList.displayName = 'ProductList';

export default ProductList;
