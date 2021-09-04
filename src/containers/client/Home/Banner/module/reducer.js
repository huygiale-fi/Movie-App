import { FETCH_BANNER_FAILED, FETCH_BANNER_SUCCESS, START_LOADING_BANNER, STOP_LOADING_BANNER } from "./types";

const initialState = {
    listBanner: [],
    errors: {},
    isLoading : false,
};

const bannerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_BANNER_SUCCESS:
            state.listBanner = payload;
            return { ...state };
        
        case FETCH_BANNER_FAILED:
            state.errors = payload;
            return { ...state };
        
        case START_LOADING_BANNER:
            state.isLoading = true;
            return { ...state };

        case STOP_LOADING_BANNER:
            state.isLoading = false;
            return { ...state };
    
        default:
            return state;
    }
};

export default bannerReducer;
