import movieApi from "apis/movieApi";
import {
    FETCH_BANNER_FAILED,
    FETCH_BANNER_SUCCESS,
    START_LOADING_BANNER,
    STOP_LOADING_BANNER,
} from "./types";

export const actStartLoading = () => ({
    type: START_LOADING_BANNER,
});

export const actStopLoading = () => ({
    type: STOP_LOADING_BANNER,
});

export const actFetchBannerSuccess = (bannerList) => {
    return {
        type: FETCH_BANNER_SUCCESS,
        payload: bannerList,
    };
};

export const actFetchBannerFailed = (err) => {
    return {
        type: FETCH_BANNER_FAILED,
        payload: err,
    };
};

export const actFetchBannerApi = () => {
    return (dispatch) => {
        dispatch(actStartLoading());
        movieApi
            .fetchBannerApi()
            .then((response) => {
                dispatch(actFetchBannerSuccess(response.data.content));
                dispatch(actStopLoading());
            })
            .catch((errors) => {
                dispatch(actFetchBannerFailed(errors));
                dispatch(actStopLoading());
            });
    };
};
