const gameReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_PICS":
      console.log(JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default gameReducer;
