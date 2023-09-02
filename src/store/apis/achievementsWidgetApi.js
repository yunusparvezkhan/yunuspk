import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const achievementsWidgetApi = createApi({
    reducerPath: "achievementsWidget",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3003"
    }),
    endpoints(builder) {
        return {
            fetchAchievementsWidget: builder.query({
                query: () => {
                    return {
                        url: "/achievementsWidget",
                        method: "GET"
                    }
                }
            })
        }
    }
})

export const { useFetchAchievementsWidgetQuery } = achievementsWidgetApi;
export { achievementsWidgetApi };