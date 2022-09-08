import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tickers: [],
	isConnected: false
}

const tickersReducer = createSlice({
	name: "tickersReducer",
	initialState,
	reducers: {
		setTickers: function(state, action) {
			state.tickers = action.payload
		},
		setIsConnected: function(state, action) {
			state.isConnected = action.payload
		}
	}
})

export default tickersReducer.reducer;
export const {setTickers, setIsConnected} = tickersReducer.actions;