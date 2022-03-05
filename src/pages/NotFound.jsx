import React from 'react';



const divStyle = {
	width: '100%',
	height: '100vh',
	display: 'flex',
	fontSize: '4rem',
	fontFamily: 'cursive',
	justifyContent: 'center',
	alignItems: 'center',
}

const NotFound = () => {
	return (
		<div style={divStyle} >
			No encontrado, <br></br>
			 error 404.
		</div>
	);
}

export default NotFound;