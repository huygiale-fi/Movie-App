import theaterApi from "apis/theaterApi";
import {
    FETCH_THEATER_FAIL,
    FETCH_THEATER_REQUEST,
    FETCH_THEATER_SUCCESS,
} from "../constants/theaterType";

export const actFetchTheater = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_THEATER_REQUEST });
        theaterApi
            .fetchTheaterApi()
            .then((res) => {
                dispatch({
                    type: FETCH_THEATER_SUCCESS,
                    payload: res.data.content,
                });
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_THEATER_FAIL,
                    payload: err,
                });
            });
    };
};