import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { slide as Menu } from "react-burger-menu";

import {
	getForeCastData,
	getCurrentData
} from "../actions";

import {
	H_Box,
	H_Box_Center,
	H_Box_Align_Center,
	h_box_base
} from "../style.js";

import { WeatherBlock, WeatherBlockNow } from "./WeatherBlock";
import ThemePicker from "./ThemePicker";

/*const Input_Container = styled.div`
	width: 48%;
	color: #fff;
	font-size: 20px;
	margin-top: 50px;
`;

const Button = styled.button`
	width: 200px;
	height: 50px;
	font-size: 16px;
	background: #0071bc;
	border-radius: 4px;
	border: none;
	color: white;
	outline: none;

	&:hover {
		background: #025790;
	}
`;*/

const ForeCastContainer = styled.div`
	${h_box_base} padding: 30px 0;
	max-width: 800px;
	width: 100%;
	flex-flow: row wrap;
`;

const MenuTitle = styled.div`
	font-size: 20px;
	color: #000;
	font-weight: 800;
	margin: 5px 0;
`;

const CityInput = styled.input`
	font-size: 20px;
	color: #000;
	font-weight: 100;
	font-style: italic;
	margin: 15px 0 25px;
	width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid red;
`;

const CityName = styled.div`
	font-size: 18px;
	color: #FFF;
	font-weight: 800;
	width: 100%;
	text-align: center;
	opacity: 0.7;
`;

class App extends Component {
	constructor(props) {
		super(props);
		/*this.state = {
			distance: 0
		};*/
	}

	componentDidMount() {
		this.props.getFCastData();
	}

	/*componentDidUpdate(prevProps) {
		if (prevProps.distance !== this.props.distance) {
			this.test(this.props.distance);
		}
	}

	calcDistance = event => {
		const lat1 = parseFloat(this.props.airportFrom.lat);
		const lng1 = parseFloat(this.props.airportFrom.lng);
		const lat2 = parseFloat(this.props.airportTo.lat);
		const lng2 = parseFloat(this.props.airportTo.lng);
		if (lat1 && lat2) {
			this.props.calculatedDistance(calcDistance(lat1, lng1, lat2, lng2));
		}
	};

	test = distance => {
		this.setState({ distance: 0 });
		let interval;
		interval = setInterval(() => {
			if (this.state.distance < this.props.distance) {
				this.setState({ distance: this.state.distance + 10 });
			} else {
				clearInterval(interval);
			}
		}, 2);
	};*/

	render() {
		let content;
		if (this.props.forecastData) {
			let condition = this.props.forecastData.query.results.channel.item
				.condition;
			let forecast = this.props.forecastData.query.results.channel.item
				.forecast;
			let forecastContent = forecast
				.slice(0, 4)
				.map((item, index) => (
					<WeatherBlock
						code={item.code}
						highTemp={item.high}
						lowTemp={item.low}
						day={item.day}
						condition={item.text}
						key={index}
					/>
				));
			content = (
				<H_Box_Align_Center>
					<WeatherBlockNow
						code={condition.code}
						temp={condition.temp}
						condition={condition.text}
					/>
					<ForeCastContainer>{forecastContent}</ForeCastContainer>
				</H_Box_Align_Center>
			);
		}
		return (
			<div className="main" style={{ background: this.props.theme }}>
				<Menu>
					<MenuTitle>Select a City</MenuTitle>
					<CityInput value="New York, NY" onChange={() => { return false }} />
					<MenuTitle>Theme</MenuTitle>
					<ThemePicker />
				</Menu>
				<div className="content">{content}</div>
				<CityName>New York, NY</CityName>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	forecastData: state.forecastData,
	currentData: state.currentData,
	theme: state.theme
});

const mapDispatchToProps = dispatch => ({
	getFCastData() {
		dispatch(getForeCastData());
	},
	getCurrData() {
		dispatch(getCurrentData());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
