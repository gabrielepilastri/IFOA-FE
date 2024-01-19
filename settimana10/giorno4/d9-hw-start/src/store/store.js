import favoritesReducer from "../reducers/favoritesReducers";

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: favoritesReducer
});

export default store;