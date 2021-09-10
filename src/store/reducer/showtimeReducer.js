
import * as showtimeType from '../constants/showtimeType'

const initialState = {
    isloading:false,
    showtime:[],
    errors:{}
}

 const showtimeReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case showtimeType.FETCH_INFO_SHOWTIMES_REQUEST:
        return { ...state,isloading:true }
    case showtimeType.FETCH_INFO_SHOWTIMES_SUCCESS:
        return { ...state,showtime:payload,isloading:false }
    case showtimeType.FETCH_INFO_SHOWTIMES_FAILED:
        return { ...state,errors:payload,isloading:false }

    default:
        return state
    }
}
export default showtimeReducer;