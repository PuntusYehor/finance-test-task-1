import { io } from "socket.io-client";

const socket = io("http://localhost:4000/")

export function FetchData(event, dispatch, setIsConnected, setData) {
	try {
		socket.emit('start');

		socket.on('connect', () => {
			dispatch(setIsConnected(true));
		});
	
		socket.on('disconnect', () => {
			dispatch(setIsConnected(false));
		});
	
		socket.on(event, async (data) => {
			const response = await data
			dispatch(setData(response));
		});
	
		return () => {
			socket.off('connect');
			socket.off('disconnect');
			socket.off(event);
		};
	} catch(err) {
		let error = err.message
		throw new Error(error)
	}
}
