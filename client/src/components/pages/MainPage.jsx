import React from 'react';
import Container from "react-bootstrap/Container"
import TickersList from '../TickersList';

function MainPage({ tickers }) {

	return (
		<Container className="page">
			<h1>All tickers</h1>
			<TickersList tickers={tickers} />
		</Container>
	);
}

export default MainPage;