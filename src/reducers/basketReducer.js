export const basketReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      basket: [...state.basket, action.payload],
    };
  }

  return state;
};
