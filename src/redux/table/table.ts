import { createSlice } from '@reduxjs/toolkit';

export type TableStateType = {
    data: Array<ItemType>,
};

export type ItemType = {
    id: Number,
    firstname: string,
    lastname: string,
    age: Number
}

const initialState: TableStateType = {
    data: [

    ],
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        addItem: (state, { payload }) => {
            state.data = [payload, ...state.data];
        },
        updateItem: (state, { payload }) => {
            console.log(payload, 'update')
            state.data = state.data.map((item)=>{
                if(payload.id === item.id) return payload;
                else return item;
            })
        },
        deleteItem: (state, { payload }) => {
            console.log(payload, 'redux deletesa')
            state.data = state.data.filter((item)=>payload !== item.id);
        },
    }
});

export const { addItem, updateItem, deleteItem } = tableSlice.actions;

export default tableSlice.reducer;