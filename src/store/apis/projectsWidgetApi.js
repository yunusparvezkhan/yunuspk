import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const projectsWidgetApi = createApi({
    reducerPath: "projectsWidget",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ypk-dattanidhi.onrender.com"
    }),
    endpoints(builder) {
        return {
            fetchProjectsWidget: builder.query({
                query: () => {
                    return {
                        url: "/projectsWidget",
                        method: "GET"
                    }
                }
            })
        }
    }
})

export const { useFetchProjectsWidgetQuery } = projectsWidgetApi;
export { projectsWidgetApi };