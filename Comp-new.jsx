import React from "react"
import ReactDOM from "react-dom/client"
import Car from "./Car"

// class comp

// class Car extends React.Component{
// 	render(){
// 		return <h1>This is my first car.</h1>
// 	}
// }


// func comp

// function Car(){
// 	return <h1>This is my first car.</h1>
// }

function myGarage(){
	return (
		<>
			<h1>My car is parked in the Garage.</h1>
			<Car />
		</>
	)
}

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Car color = 'red'/>)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<myGarage />)