import { configureStore } from "@reduxjs/toolkit";
import library from "./modules/librarySlice";

export const store = configureStore({
    reducer: {
      library
    }
});