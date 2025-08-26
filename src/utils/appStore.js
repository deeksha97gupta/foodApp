import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;