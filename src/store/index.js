import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer, changeActivePage } from "./slices/navigationSlice";
import { aboutReducer } from "./slices/aboutSlice";

const store = configureStore({
    reducer: {
        // Add Reducers
        navigation: navigationReducer,
        about: aboutReducer,
    }
})

export { store };

export { navigationReducer, changeActivePage };

export { aboutReducer };