import React from 'react'
import Button from "react-bootstrap/Button"
import { useState } from 'react'

function Input({ callback }) {
	const [state, setState] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault()
		callback(state.toUpperCase())
		setState("")
	}

	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				className="input"
				type="text"
				value={state}
				onChange={(e) => setState(e.target.value)}
				placeholder="Enter name of a ticker"
			/>
			<Button type='submit' style={{ width: "100px" }}>
				Submit
			</Button>
		</form>
	)
}

export default Input