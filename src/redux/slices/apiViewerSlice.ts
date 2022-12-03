import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface CounterState {
    filterValue: string;
    showOnlyPii: boolean;
}

const initialState: CounterState = {
    filterValue: '',
    showOnlyPii: false,
};

export const apiViewerSlice = createSlice({
    name: 'apiViewer',
    initialState,
    reducers: {
        updateFilterValue: (state, action: PayloadAction<string>) => {
            state.filterValue = action.payload;
        },
        updateShowOnlyPii: (state, action: PayloadAction<boolean>) => {
            state.showOnlyPii = action.payload;
        },
    },
});

export const {updateFilterValue, updateShowOnlyPii} = apiViewerSlice.actions;

export default apiViewerSlice.reducer
