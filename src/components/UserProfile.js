import React, { useState, useMemo, useCallback } from 'react';
import { useAppContext } from '../contexts/AppContext';

const UserProfile = React.memo(() => {
  const { state, dispatch } = useAppContext();
  const { user, cart } = state;

  console.log('UserProfile rendered');

  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState(user);

  // useMemo para estatísticas
  const userStats = useMemo(() => {
    let operations = 0;
    for (let i = 0; i < 50000; i++) {
      operations += cart.length * 0.001;
    }

    return {
      totalItems: cart.length,
      totalValue: cart.reduce((sum, item) => sum + item.price, 0),
      operations: operations.toFixed(2),
    };
  }, [cart]); // Só recalcula quando o carrinho muda

  const handleSave = useCallback(() => {
    dispatch({ type: 'SET_USER', payload: tempUser });
    setIsEditing(false);
  }, [dispatch, tempUser]);

  const handleEditToggle = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleCancel = useCallback(() => {
    setTempUser(user);
    setIsEditing(false);
  }, [user]);

  const handleNameChange = useCallback(
    (e) => {
      setTempUser({ ...tempUser, name: e.target.value });
    },
    [tempUser]
  );

  const handleEmailChange = useCallback(
    (e) => {
      setTempUser({ ...tempUser, email: e.target.value });
    },
    [tempUser]
  );

  return (
    <div className="card">
      <h2>User Profile</h2>

      {isEditing ? (
        <div>
          <input
            value={tempUser.name}
            onChange={handleNameChange}
            placeholder="Name"
          />
          <input
            value={tempUser.email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button onClick={handleEditToggle}>Edit</button>
        </div>
      )}

      <div style={{ marginTop: '20px', fontSize: '14px' }}>
        <h3>Stats</h3>
        <p>Items in cart: {userStats.totalItems}</p>
        <p>Cart value: ${userStats.totalValue}</p>
        <p style={{ fontSize: '10px', opacity: 0.5 }}>
          Operations: {userStats.operations}
        </p>
      </div>
    </div>
  );
});

UserProfile.displayName = 'UserProfile';

export default UserProfile;
