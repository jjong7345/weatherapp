import React from "react";
import { shallow, render } from 'enzyme';
import WeathBlock from "../components/WeatherBlock"

test('WeatherBlock renders correctly', () => {
  const component = shallow(<WeatherBlock />);
  expect(component).toMatchSnapshot();
});