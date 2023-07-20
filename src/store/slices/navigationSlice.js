import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'form',
    initialState: {
        activePage: 'home'
    },
    reducers: {
        changeActivePage(state, action) {
            return action.payload;
        }
    }
})

export const { changeActivePage } = navigationSlice.actions;
export const navigationReducer = navigationSlice.reducer; 