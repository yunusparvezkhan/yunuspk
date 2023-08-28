import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const aboutWidgetApi = createApi({
    reducerPath: "aboutWidget",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ypk-dattanidhi.onrender.com"
    }),
    endpoints(builder) {
        return {
            fetchAboutWidget: builder.query({
                query: () => {
                    return {
                        url: "/aboutWidget",
                        method: "GET"
                    }
                }
            })
        }
    }
})

export const { useFetchAboutWidgetQuery } = aboutWidgetApi;
export { aboutWidgetApi };