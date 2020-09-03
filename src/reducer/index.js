const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        },
      };
    case "REMOVE_ITEM":
      const copyState = { ...state };
      delete copyState[action.item.id];
      return copyState;
    default:
      return state;
  }
};

export const getStoreItemArray = (state) => Object.values(state);

export default cartReducer;
