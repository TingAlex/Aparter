import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "../reducers/authReducer";
import gameReducer from "../reducers/gameReducer";

import reduxThunk from "redux-thunk";
import { reducer as reduxForm } from "redux-form";
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      game: gameReducer,
      form: reduxForm
    }),
    {},
    compose(
      applyMiddleware(reduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};
