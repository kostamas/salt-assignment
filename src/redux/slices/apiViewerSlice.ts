import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface CounterState {
    filterValue: string;
    showOnlyPii: boolean;
    apiData: any;
}

const initialState: CounterState = {
    filterValue: '',
    showOnlyPii: false,
    apiData: null
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
        updateApiData: (state, action: PayloadAction<any>) => {
            state.apiData = action.payload;
        },
    },
});

export const {updateFilterValue, updateShowOnlyPii, updateApiData} = apiViewerSlice.actions;

export default apiViewerSlice.reducer
