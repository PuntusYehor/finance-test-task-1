import React from 'react'
import Modal from "react-bootstrap/Modal"

function MyModal({ children, show, setOpen }) {
	return (
		<div onClick={() => setOpen(false)}>
			<Modal show={show} onClick={(e) => e.stopPropagation()}>
				{children}
			</Modal>
		</div>

	)
}

export default MyModal