import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '../contexts/AppContext';

const ProductCard = React.memo(({ product }) => {
  const { state, dispatch } = useAppContext();
  const { cart } = state;

  console.log(`ProductCard ${product.name} rendered`);

  // useMemo para verificar carrinho
  const isInCart = useMemo(() => {
    return cart.some((item) => item.id === product.id);
  }, [cart, product.id]);

  // useMemo pra calculo
  const complexCalculation = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += product.price * 0.001;
    }
    return result;
  }, [product.price]); // Só vai recalcular se o preço mudar

  const handleAddToCart = useCallback(() => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }, [dispatch, product]);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p style={{ fontSize: '10px', opacity: 0.5 }}>
        Calc: {complexCalculation.toFixed(2)}
      </p>
      <button onClick={handleAddToCart} disabled={isInCart}>
        {isInCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
});
ProductCard.displayName = 'ProductCard';

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
