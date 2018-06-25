const indexReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_PLAYPIC":
      return action.payload;
    default:
      return state;
  }
};
