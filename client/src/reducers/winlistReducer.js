const winlistReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_WIN_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default winlistReducer;
