import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "../reducers/authReducer";
import gameReducer from "../reducers/gameReducer";
import winlistReducer from "../reducers/winlistReducer";
import reduxThunk from "redux-thunk";
import { reducer as reduxForm } from "redux-form";

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      game: gameReducer,
      form: reduxForm,
      winlist:winlistReducer
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
