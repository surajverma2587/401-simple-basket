export const basketReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      basket: [...state.basket, { ...action.payload, id: crypto.randomUUID() }],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const filteredBasket = state.basket.filter((item) => {
      return item.id !== action.payload;
    });

    return {
      ...state,
      basket: [...filteredBasket],
    };
  }

  return state;
};
