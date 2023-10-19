import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    template:'template1'
};

const inputSlice = createSlice({
    name: 'inputSlice',
    initialState,
    reducers: {
        getValues: (state, action) => {
            state.data=action.payload
        },
        getTemplate: (state, action) => {
            state.template=action.payload
        }

    }
});

export default inputSlice.reducer;
export const {getValues,getTemplate} = inputSlice.actions