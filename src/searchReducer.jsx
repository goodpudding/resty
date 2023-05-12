export const searchReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_SEARCH':
        return [...state, action.payload];
      default:
        throw new Error();
    }
  }
  