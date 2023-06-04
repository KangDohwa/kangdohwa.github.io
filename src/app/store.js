import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addressSlice from "./slice/Address";
import glamourSlice from "./slice/Glamour";

const rootReducer = combineReducers({
  address: addressSlice.reducer,
  glamour: glamourSlice.reducer,
});

const initialState = {};

const store =  configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;