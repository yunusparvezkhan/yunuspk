import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        activePage: window.location.pathname
    },
    reducers: {
        changeActivePage(state, action) {
            return {
                activePage: action.payload
            }
        }
    }
})

export const { changeActivePage } = navigationSlice.actions;
export const navigationReducer = navigationSlice.reducer; 