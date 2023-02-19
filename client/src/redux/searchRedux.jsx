import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        products: [],
    },
    reducers: {
        searchProducts: (state, action) => {
            state.products.push(action.payload);
        }
    },
});

export const { searchProducts } = searchSlice.actions;
export default searchSlice.reducer;