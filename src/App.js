import { useReducer, useMemo } from 'react';
import { initialState, appReducer } from './reducers/appReducer';
import { AppContext } from './contexts/AppContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import UserProfile from './components/UserProfile';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>
      <div className={`App ${state.theme}`}>
        <Header />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 2 }}>
            <ProductList />
          </div>
          <div style={{ flex: 1 }}>
            <Cart />
            <UserProfile />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
