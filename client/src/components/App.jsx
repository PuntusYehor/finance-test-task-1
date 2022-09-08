import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import MainPage from './pages/MainPage';
import TickerWatchList from './TickerWatchList';
import { Routes, Route } from "react-router-dom";
import MyNavbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setIsConnected, setTickers } from '../redux/tickersReducer';
import { FetchData } from "../API/fetchData"

function App() {
	const data = useSelector(state => state.tickers.tickers)
	const dispatch = useDispatch();

	useEffect(() => {
		FetchData("ticker", dispatch, setIsConnected, setTickers)
	}, [dispatch]);

	return (
		<>
			<MyNavbar />
			<Routes>
				<Route path='/main' element={<MainPage tickers={data} />} />
				<Route path='/watch-list' element={<TickerWatchList />} />
				<Route path="*" element={<MainPage tickers={data} />} />
			</Routes>
		</>
	)
}

export default App;
