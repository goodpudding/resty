export const searchReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_SEARCH':
        return [action.payload, ...state];      
        default:
          throw new Error();
    }
  }
  