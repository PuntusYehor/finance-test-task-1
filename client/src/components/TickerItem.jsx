import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function TickerItem({ ticker, remove }) {

	return (
		<>
			<tr>
				<td><Badge bg="primary">{ticker.ticker}</Badge></td>
				<td>{ticker.price}</td>
				<td>{ticker.change}</td>
				<td>{ticker.change_percent}</td>
				<td>{ticker.dividend}</td>
				<td>{ticker.yield}</td>
				{remove ? <td><Button onClick={() => remove(ticker.ticker)}>X</Button></td> : null}

			</tr>
		</>

	)
}

export default TickerItem