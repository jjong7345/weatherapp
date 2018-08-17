import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import { WeatherBlock } from "../components/WeatherBlock";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("WeatherBlock renders correctly", () => {
	const component = shallow(<WeatherBlock code="20" highTemp="70" lowTemp="50" day="Thur" condition="Cloudy"/>);
	expect(component).toMatchSnapshot();
});
