export const calcTotalItems = (state) =>
  state.items.reduce((sum, item) => sum + item.quantity, 0);

export const calcTotalPrice = (state) =>
  state.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

export const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_PIZZA':
      const isExist = state.items.find((item) => item.id === payload.id);
      if (!isExist) {
        const newStateItems = [...state.items, { ...payload, quantity: 1 }];
        return {
          items: newStateItems,
          totalItems: calcTotalItems({ items: newStateItems }),
          totalPrice: calcTotalPrice({ items: newStateItems }),
        };
      }

      const updatedItems = state.items.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      return {
        items: updatedItems,
        totalItems: calcTotalItems({ items: updatedItems }),
        totalPrice: calcTotalPrice({ items: updatedItems }),
      };

    case 'DELETE_PIZZA':
      const filteredItems = state.items.filter(
        (item) => item.id !== payload.id,
      );

      return {
        items: filteredItems,
        totalItems: calcTotalItems({ items: filteredItems }),
        totalPrice: calcTotalPrice({ items: filteredItems }),
      };

    case 'INCREMENT_PIZZA':
      const incrementItems = state.items.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      return {
        items: incrementItems,
        totalItems: calcTotalItems({ items: incrementItems }),
        totalPrice: calcTotalPrice({ items: incrementItems }),
      };

    case 'DECREMENT_PIZZA':
      const decrementItems = state.items.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      return {
        items: decrementItems,
        totalItems: calcTotalItems({ items: decrementItems }),
        totalPrice: calcTotalPrice({ items: decrementItems }),
      };

    default:
      return state;
  }
};
