import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    template: 'template1',
    forValue: 'for Assignment',
    dateInclude: true,
    tableContent: [],
    sameCheck:false
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
        },
        getTableContent: (state,action) => {
            state.tableContent=action.payload
        },
        getSameCheck: (state, action) => {
            state.sameCheck=action.payload
        }

    }
});

export default inputSlice.reducer;
export const {getValues,getTemplate,getForValue,getDateInclude,getTableContent,getSameCheck} = inputSlice.actions