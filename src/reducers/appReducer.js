// Produtos
const mockProducts = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
  { id: 2, name: 'Phone', price: 699, category: 'Electronics' },
  { id: 3, name: 'Book', price: 29, category: 'Education' },
  { id: 4, name: 'Headphones', price: 199, category: 'Electronics' },
  { id: 5, name: 'Tablet', price: 399, category: 'Electronics' },
];

// Usuário
const mockUser = {
  id: 1,
  name: 'Kainan Rodrigues',
  email: 'kainan.ars@gmail.com',
  preferences: ['Electronics'],
};

const initialState = {
  products: mockProducts,
  cart: [],
  user: mockUser,
  theme: 'light',
  searchTerm: '',
  selectedCategory: 'All',
  categories: ['All', 'Electronics', 'Education', 'Clothing'],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_TO_CART': {
      // Vai evitar itens duplicados no carrinho
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, appReducer };
