import { combineReducers } from "redux";
import {
    ADD_FORECAST_DATA,
    ADD_CURRENT_DATA,
    SET_THEME
} from "../constants";

const forecastData = (state = "", action) => {
    if (action.type === ADD_FORECAST_DATA) {
        //return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
        return action.payload;
    }
    return state;
};

const currentData = (state = "", action) => {
    if (action.type === ADD_CURRENT_DATA) {
        //return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
        return action.payload;
    }
    return state;
};

const theme = (state = "", action) => {
    if (action.type === SET_THEME) {
        return action.payload;
    }
    return state;
};

const rootReducer = combineReducers({
    forecastData,
    currentData,
    theme
});

export default rootReducer;
