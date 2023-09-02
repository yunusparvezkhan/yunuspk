import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer, changeActivePage } from "./slices/navigationSlice";
import { aboutWidgetApi } from "./apis/aboutWidgetApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { blogsWidgetApi } from "./apis/blogsWidgetApi";
import { projectsWidgetApi } from "./apis/projectsWidgetApi";
import { achievementsWidgetApi } from "./apis/achievementsWidgetApi";

const store = configureStore({
    reducer: {
        // Add Reducers
        navigation: navigationReducer,
        [aboutWidgetApi.reducerPath]: aboutWidgetApi.reducer,
        [blogsWidgetApi.reducerPath]: blogsWidgetApi.reducer,
        [projectsWidgetApi.reducerPath]: projectsWidgetApi.reducer,
        [achievementsWidgetApi.reducerPath]: achievementsWidgetApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat([aboutWidgetApi.middleware, blogsWidgetApi.middleware, projectsWidgetApi.middleware, achievementsWidgetApi.middleware])
    }
})

setupListeners(store.dispatch);

export { store };

export { navigationReducer, changeActivePage };

export { useFetchAboutWidgetQuery } from "./apis/aboutWidgetApi";
export { useFetchBlogsWidgetQuery } from "./apis/blogsWidgetApi";
export { useFetchProjectsWidgetQuery } from "./apis/projectsWidgetApi";
export { useFetchAchievementsWidgetQuery } from "./apis/achievementsWidgetApi";