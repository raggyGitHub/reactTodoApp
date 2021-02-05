import React from 'react'
//funcion hijo que envia una funcion
//se recibe un funcion como argumento

export const ShowIncrement = React.memo(({ increment }) => {

	console.log(':S');

	return (
		<button
			className="btn btn-primary"
			onClick={() => {
				increment(5);
			}}>
			Incrementar
		</button>
	)
})
