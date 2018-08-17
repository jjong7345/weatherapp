import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

import { setTheme } from "../actions";

const ThemeBlocksContainer = styled.div`
	width: 180px;
	height: 150px;
	border-radius: 10px;
	overflow: hidden;
	background: #000;
	margin: 10px auto;
	flex-flow: row wrap;
	flex: 0 0 auto;
	display: flex;
	padding: 0;
`;

const ThemeBlock = styled.div`
	width: 60px;
	height: 50px;
	cursor: pointer;
`;

class ThemePicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			themes: [
				"#C34D40",
				"#4242BA",
				"#2E3C56",
				"#E59C2F",
				"#412F3F",
				"#EA724C",
				"#5C2533",
				"#2D442F",
				"#8DD397"
			]
		};
	}
	render() {
		let content = this.state.themes.map((item, index) => (
			<ThemeBlock
				onClick={() => this.props.switchTheme(item)}
				style={{ background: item }}
				key={index}
			/>
		));
		return <ThemeBlocksContainer>{content}</ThemeBlocksContainer>;
	}
}

const mapStateToProps = state => ({
	theme: state.theme
});

const mapDispatchToProps = dispatch => ({
	switchTheme(theme) {
		dispatch(setTheme(theme));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemePicker);
