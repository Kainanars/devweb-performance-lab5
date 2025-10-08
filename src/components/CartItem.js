import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '../contexts/AppContext';

const CartItem = React.memo(({ item }) => {
  const { dispatch } = useAppContext();

  console.log(`CartItem ${item.name} rendered`);

  const handleRemove = useCallback(() => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } });
  }, [dispatch, item.id]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ddd',
        margin: '5px 0',
      }}
    >
      <div>
        <strong>{item.name}</strong>
        <div>${item.price}</div>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
});
CartItem.displayName = 'CartItem';

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default CartItem;
