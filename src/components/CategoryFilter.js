import React, { useCallback } from 'react';
import { useAppContext } from '../contexts/AppContext';

const CategoryFilter = React.memo(() => {
  const { state, dispatch } = useAppContext();
  const { selectedCategory, categories } = state;

  console.log('CategoryFilter rendered');

  const handleCategoryChange = useCallback(
    (e) => {
      dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value });
    },
    [dispatch]
  );

  return (
    <select value={selectedCategory} onChange={handleCategoryChange}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
});

CategoryFilter.displayName = 'CategoryFilter';

export default CategoryFilter;
