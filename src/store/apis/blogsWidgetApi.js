import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const blogsWidgetApi = createApi({
    reducerPath: "blogsWidget",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3003"
    }),
    endpoints(builder) {
        return {
            fetchBlogsWidget: builder.query({
                query: () => {
                    return {
                        url: "/blogsWidget",
                        method: "GET"
                    }
                }
            })
        }
    }
})

export const { useFetchBlogsWidgetQuery } = blogsWidgetApi;
export { blogsWidgetApi };