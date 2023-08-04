import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer, changeActivePage } from "./slices/navigationSlice";
import { aboutWidgetApi } from "./apis/aboutWidgetApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
    reducer: {
        // Add Reducers
        navigation: navigationReducer,
        [aboutWidgetApi.reducerPath]: aboutWidgetApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat([aboutWidgetApi.middleware])
    }
})

setupListeners(store.dispatch);

export { store };

export { navigationReducer, changeActivePage };

export { useFetchAboutWidgetDataQuery } from "./apis/aboutWidgetApi"; 