import React from 'react'
import Input from './UI/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import TickersList from './TickersList'
import Container from 'react-bootstrap/esm/Container'
import { addToWatchList, removeFromWatchList } from '../redux/tickersReducer'
import Alert from 'react-bootstrap/Alert';

function TickerWatchList() {
	const data = useSelector(state => state.tickers.tickers)
	const wishList = useSelector(state => state.tickers.watchList)
	const now = data.filter(curr => wishList.includes(curr.ticker));
	const dispatch = useDispatch();

	const handleSubmit = (value) => {
		const cond = data.find(item => item.ticker === value)
		if (cond) {
			dispatch(addToWatchList(value))
		} else {
			alert("Ticker is not found, try another one")
		}
	}

	return (
		<Container className='watchlist'>
			<Input callback={handleSubmit} />
			{
				!now.length
					? <Alert>Your watch-list is empty</Alert>
					: <TickersList tickers={now} remove={(value) => dispatch(removeFromWatchList(value))} />
			}

		</Container>
	)
}

export default TickerWatchList