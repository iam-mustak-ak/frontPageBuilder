import { configureStore } from "@reduxjs/toolkit";
import inputValueSlice from "./inputValueSlice";

const store = configureStore({
    reducer: {
        input:inputValueSlice
    }
});

export default store