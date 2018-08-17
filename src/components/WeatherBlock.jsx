import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { H_Box, H_Box_Align_Center } from "../style.js";

const ForcastBlock = styled.div`
	width: 100%;
	max-width: 200px;
	text-align: center;
	padding: 30px;
`;

const NowBlock = styled.div`
	width: 100%;
	max-width: 200px;
	text-align: center;
	padding: 10px;
`;

const WeatherIcon = styled.div`
	width: 100%;
	text-align: center;
	font-size: 50px;
`;

const WeatherIconNow = styled.div`
	width: 100%;
	text-align: center;
	font-size: 160px;
	padding-bottom: 10px;
`;

const High = styled.div`
	font-weight: 800;
	font-size: 30px;
	padding: 20px 5px;
`;

const Low = styled.div`
	font-weight: 800;
	font-size: 25px;
	opacity: 0.5;
	padding: 15px 5px;
`;

const Day = styled.div`
	font-weight: 100;
	font-size: 30px;
	opacity: 0.5;
`;

const Today = styled.div`
	font-weight: 100;
	font-size: 50px;
	opacity: 0.5;
`;

const Condition = styled.div`
	font-weight: 100;
	font-size: 16px;
	opacity: 0.5;
	height: 40px;
`;

const ConditionNow = styled.div`
	font-weight: 100;
	font-size: 30px;
	opacity: 0.5;
`;

export const WeatherBlock = class WeatherBlock extends Component {
	render() {
		return (
			<ForcastBlock>
				<WeatherIcon className={"wi wi-yahoo-" + this.props.code} />
				<H_Box_Align_Center>
					<High>{this.props.highTemp + "°"}</High>
					<Low>{this.props.lowTemp + "°"}</Low>
				</H_Box_Align_Center>
				<Day>{this.props.day}</Day>
				<Condition>{this.props.condition}</Condition>
			</ForcastBlock>
		);
	}
};

export const WeatherBlockNow = class WeatherBlockNow extends Component {
	render() {
		return (
			<NowBlock>
				<WeatherIconNow className={"wi wi-yahoo-" + this.props.code} />
				<High>{this.props.temp + "°"}</High>
				<Today>Now</Today>
				<ConditionNow>{this.props.condition}</ConditionNow>
			</NowBlock>
		);
	}
};
