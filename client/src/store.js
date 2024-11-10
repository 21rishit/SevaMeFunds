import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import ngoReducer from "./features/ngoSlice";
import scrollReducer from "./features/scrollSlice"

const rootReducer = combineReducers({
    ngo: ngoReducer, // 'ngo' is the state slice for ngoReducer
    user: userReducer, // 'user' is the state slice for userReducer
    // scroll: scrollReducer
});

export const store = configureStore({
    reducer: rootReducer,
});
