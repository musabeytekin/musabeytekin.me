import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isOpen: true,

    },
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeToggleMenu: (state) => {
            state.isOpen = false;
        }

    }
});

export const { toggleMenu, closeToggleMenu } = menuSlice.actions;

export default menuSlice.reducer;