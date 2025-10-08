import React, { useMemo } from 'react';
import { useAppContext } from '../contexts/AppContext';
import CartItem from './CartItem';

const Cart = React.memo(() => {
  const { state } = useAppContext();
  const { cart, user } = state;

  console.log('Cart rendered');

  // useMemo para otimizar o cálculo total
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <div className="card">
      <h2>Shopping Cart</h2>
      <p>User: {user.name}</p>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Total: ${total}
          </div>
        </>
      )}
    </div>
  );
});

Cart.displayName = 'Cart';

export default Cart;
