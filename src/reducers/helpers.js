const sortOrderFn = (a, b) => b.createdAt - a.createdAt;

const initialState = {
  market: {
    orders: []
  },
  farm: {
    orders: [],
    profit: 0,
    productionPrice: 0
  },
  budget: {
    profit: 0,
    marketExpanse: 0,
    farmExpanse: 0,
    deliveryExpanse: 0
  }
};

export { sortOrderFn, initialState };
