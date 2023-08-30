import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const aboutWidgetApi = createApi({
    reducerPath: "aboutWidget",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3003"
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