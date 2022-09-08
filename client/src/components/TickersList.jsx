import React from 'react'
import TickerItem from './TickerItem'
import Table from "react-bootstrap/Table"

function TickersList({ tickers, remove }) {
	return (
		<>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Ticker</th>
						<th>Price</th>
						<th>Change</th>
						<th>Change (%)</th>
						<th>Divident</th>
						<th>Yield</th>
					</tr>
				</thead>
				<tbody>
					{tickers.map((ticker, i) => (
						<TickerItem key={i} ticker={ticker} remove={remove} />
					))}
				</tbody>

			</Table>
		</>

	)
}

export default TickersList