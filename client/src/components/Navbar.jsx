import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" >
			<Container style={{ maxWidth: "1000px" }}>

				<Navbar.Brand>
					<Link to="/main" className="nav-link">
						All tickers
					</Link>
				</Navbar.Brand>

				<Nav className="me-auto">
					<Link to="/watch-list" className='nav-link'>Watch List</Link>
				</Nav>
			</Container>

		</Navbar >
	)
}

export default MyNavbar