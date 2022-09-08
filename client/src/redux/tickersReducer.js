import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tickers: [],
	watchList: [],
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
		}, 
		addToWatchList: function(state, action) {
			state.watchList.push(action.payload)
		},
		removeFromWatchList: function(state, action) {
			// state.watchList = state.watchList.filter((val) => val !== action.payload)
			state.watchList.pop()
		}
	}
})

export default tickersReducer.reducer;
export const {setTickers, setIsConnected, addToWatchList, removeFromWatchList} = tickersReducer.actions;