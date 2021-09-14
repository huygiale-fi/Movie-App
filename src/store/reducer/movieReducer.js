import * as movieType from "../constants/movieType";

const initialState = {
    movie: [],
    page: 1,
    allpage: null,
    Banner: [],
    errors: {},
    isLoading: false,
};

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case movieType.FETCH_BANNER_REQUEST:
            return { ...state, isLoading: true };
        case movieType.FETCH_BANNER_SUCCESS:
            return { ...state, isLoading: false, Banner: payload };
        case movieType.FETCH_BANNER_FAILED:
            return { ...state, isLoading: false, errors: payload };
        case movieType.FETCH_MOVIEPAGE_REQUEST:
            return { ...state, isLoading: true };
        case movieType.FETCH_MOVIEPAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movie: payload.items,
                page: payload.currentPage,
                allpage: payload.totalPages,
            };
        case movieType.FETCH_MOVIEPAGE_FAILED:
            return { ...state, isLoading: false, errors: payload };
        case movieType.CHANGE_PAGE_NEXT:
            let pagenext = state.page + 1;
            return { ...state, page: pagenext };
        case movieType.CHANGE_PAGE_PREV:
            let pageprev = state.page - 1;
            return { ...state, page: pageprev };
        default:
            return state;
    }
};
export default movieReducer;
