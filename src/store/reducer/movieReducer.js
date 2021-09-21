import * as movieType from '../constants/movieType'

const initialState = {
    movie:[],
    movieAll:[],
    page:1,
    allpage:null,
    Banner: [],
    errors: {},
    isLoading : false,
    movieInfo:{},
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case movieType.FETCH_BANNER_REQUEST:
        return { ...state,isLoading:true }
    case movieType.FETCH_BANNER_SUCCESS:
        return{...state,isLoading:false,Banner:payload}
    case movieType.FETCH_BANNER_FAILED:
        return {...state,isLoading:false,errors:payload}
    case movieType.FETCH_MOVIEPAGE_REQUEST:
        return {...state,isLoading:true}
    case movieType.FETCH_MOVIEPAGE_SUCCESS:
        return {...state,
            isLoading:false,
            movie:payload.items,
            page: payload.currentPage,
            allpage: payload.totalPages}
    case movieType.FETCH_MOVIEPAGE_FAILED:
        return {...state,isLoading:false,errors:payload}
    case movieType.FETCH_ALLMOVIE_REQUEST:
        return {...state}
    case movieType.FETCH_ALLMOVIE_SUCCESS:
        return {...state,movieAll:payload}
    case movieType.FETCH_ALLMOVIE_FAILED:
        return {...state,errors:payload}
    case movieType.CHANGE_PAGE_NEXT:
        let pagenext = state.page+1
        return{...state,page:pagenext}
    case movieType.CHANGE_PAGE_PREV:
        let pageprev = state.page-1
        return{...state,page:pageprev}
    case movieType.ADD_MOVIEIMG_REQUEST:
        return{...state}
    case movieType.ADD_MOVIEIMG_SUCCESS:
        return{...state}
    case movieType.ADD_MOVIEIMG_FAILED:
        console.log(payload)
        return{...state}
    case movieType.FETCH_MOVIEINFO_REQUEST:
        return{...state}
    case movieType.FETCH_MOVIEINFO_SUCCESS:
        return{...state,movieInfo:payload}
    case movieType.FETCH_MOVIEINFO_FAILED:
        return{...state,errors:payload}
    case movieType.DELETE_MOVIE_REQUEST:
        return{...state}
    case movieType.DELETE_MOVIE_SUCCESS:
        alert("Xóa Thành Công")
        return{...state}
    case movieType.DELETE_MOVIE_FAILED:
        alert("Xóa Thất Bại")
        return{...state,errors:payload}
    default:
        return state
    }
}
export default movieReducer;
