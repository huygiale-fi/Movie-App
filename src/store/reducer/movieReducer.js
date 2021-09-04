import * as movieType from '../constants/movieType'

const initialState = {
    listBanner: [],
    errors: {},
    isLoading : false,
}

const bannerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case movieType.FETCH_BANNER_REQUEST:
        return { ...state,isLoading:true }
    case movieType.FETCH_BANNER_SUCCESS:
        return{...state,isLoading:false,listBanner:payload}
    case movieType.FETCH_BANNER_FAILED:
        return {...state,isLoading:false,errors:payload}
        
    default:
        return state
    }
}
export default bannerReducer;
