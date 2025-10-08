import React, { useMemo } from 'react';
import { useAppContext } from '../contexts/AppContext';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ThemeToggle from './ThemeToggle';

const Header = React.memo(() => {
  const { state } = useAppContext();
  const { user, cart } = state;

  // Otimização com useMemo
  const expensiveCalculation = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += Math.random();
    }
    return result;
  }, []); // Só calcula uma vez quando o componente monta

  return (
    <header
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ flex: '0 0 auto', textAlign: 'left' }}>
        <h1>E-Commerce Store</h1>
        <div>Welcome, {user.name}!</div>
        <div style={{ fontSize: '12px', opacity: 0.7 }}>
          Random: {expensiveCalculation.toFixed(2)}
        </div>
      </div>
      <div
        style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'center' }}
      >
        <SearchBar />
        <CategoryFilter />
      </div>
      <div
        style={{
          flex: '0 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <ThemeToggle />
        </div>
        <br />
        <div style={{ fontSize: '12px', opacity: 0.7 }}>
          Cart: {cart.length} items
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
