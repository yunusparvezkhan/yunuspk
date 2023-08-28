import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const blogsWidgetApi = createApi({
    reducerPath: "blogsWidget",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ypk-dattanidhi.onrender.com"
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