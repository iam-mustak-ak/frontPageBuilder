import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    template: 'template1',
    forValue: 'for Assignment',
    dateInclude:true
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
        },
        getForValue: (state, action) => {
            state.forValue=action.payload
        },
        getDateInclude: (state, action) => {
            state.dateInclude=action.payload
        }

    }
});

export default inputSlice.reducer;
export const {getValues,getTemplate,getForValue,getDateInclude} = inputSlice.actions