import React, { Component } from 'react';
import './App.css';

import Car from "./Car/Car"
import CarCalc from "./Car/Car-calc"

class App extends Component {
	state = {
		cars: [
			{name: 'Ford', year: 2010},
			{name: 'Audi', year: 201677},
			{name: 'Porche', year: 2011}
		],
		pageTitle: 'Hello State'
	}

	changeTitleHandler = (newTitle) => {

		// const oldTitle = this.state.pageTitle;
		// const newTitle = " (changed)";
		this.setState({
			pageTitle: newTitle
		})
	}

	render() {
		const divStyle = {
			"color": "red",
			fontSize: "44px",
		}

		const cars = this.state.cars

		return (
			<div className="App">
				<h1 style={divStyle}>{this.state.pageTitle}</h1>
				<button onClick={this.changeTitleHandler.bind(this, "changed")}>Change title</button>
				<Car 
					name={cars[0].name} 
					year={cars[0].year}
					onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
					/>
				<Car 
					name={cars[1].name} 
					year={cars[1].year}
					onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
					/>
				<Car 
					name={cars[2].name} 
					year={cars[2].year}
					onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
				/>
				<CarCalc/>
				<CarCalc/>
				{/* <p style={{"color": "blue", fontSize: "74px"}}>I am React developer</p> */}
			</div>
		  );
	}

	// return (
	// 	React.createElement(
	// 		'div',
	// 		{
	// 			className: 'App' 
	// 		},
	// 		React.createElement(
	// 			'h1',
	// 			null,
	// 			'Hello React!'
	// 		)
	// 	)
	// )
}

export default App;
