import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer, changeActivePage } from "./slices/navigationSlice";

const store = configureStore({
    reducer: {
        // Add Reducers
        navigation: navigationReducer
    }
})

export { store };

export { navigationReducer, changeActivePage };