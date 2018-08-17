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
	}

	componentDidMount() {
		this.props.getFCastData();
	}

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
	theme: state.theme
});

const mapDispatchToProps = dispatch => ({
	getFCastData() {
		dispatch(getForeCastData());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
