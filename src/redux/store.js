import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import darkModeReducer from "./dark-slice";

const reducers = combineReducers({
  darkMode: darkModeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["darkMode"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
