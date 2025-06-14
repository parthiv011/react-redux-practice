import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk";
import { AnyAction } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, AnyAction>)
);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
