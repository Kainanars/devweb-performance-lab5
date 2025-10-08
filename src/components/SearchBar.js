import React, { useCallback } from 'react';
import { useAppContext } from '../contexts/AppContext';

const SearchBar = React.memo(() => {
  const { state, dispatch } = useAppContext();
  const { searchTerm } = state;

  console.log('SearchBar rendered');

  const handleSearchChange = useCallback(
    (e) => {
      dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
    },
    [dispatch]
  );

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleSearchChange}
      style={{ minWidth: '500px' }}
    />
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
