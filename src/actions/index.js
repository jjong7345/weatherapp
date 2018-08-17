import axios from "axios";
import {
    ADD_FORECAST_DATA,
    ADD_CURRENT_DATA,
    SET_THEME,
} from "../constants";

export function addForeCastData(data) {
    return { type: ADD_FORECAST_DATA, payload: data };
}

export function addCurrentData(data) {
    return { type: ADD_CURRENT_DATA, payload: data };
}

export function setTheme(theme_color) {
    return { type: SET_THEME, payload: theme_color };
}

export function getForeCastData() {
    return dispatch => {
        axios
            .get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="newyork, ny")&format=json&env=store://datatables.org/alltableswithkeys')
            .then(response => {
                dispatch(addForeCastData(response.data));
            })
            .catch(error => {
                console.log("axios error", error);
            });
    };
}

export function getCurrentData() {
    return dispatch => {
        axios
            .get('https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="newyork, ny")&format=json&env=store://datatables.org/alltableswithkeys')
            .then(response => {
                dispatch(addCurrentData(response.data));
            })
            .catch(error => {
                console.log("axios error", error);
            });
    };
}
