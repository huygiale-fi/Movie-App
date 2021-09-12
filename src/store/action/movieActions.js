import movieApi from "apis/movieApi";
import * as movieType from '../constants/movieType'

export const fetchBannerAction = ()=>async(dispatch)=>{
    try{
        dispatch({type:movieType.FETCH_BANNER_REQUEST})
        const response = await movieApi.fetchBannerApi();
        dispatch({
            type:movieType.FETCH_BANNER_SUCCESS,
            payload:response.data.content,
        })
    }catch(err){
        dispatch({
            type:movieType.FETCH_BANNER_FAILED,
            payload:err,
        })
    }
}

export const fetchAllMoviePageAction = (page)=>async(dispatch)=>{
    try{
        dispatch({type:movieType.FETCH_MOVIEPAGE_REQUEST})
        const response = await movieApi.fetchAllMoviePageApi(page);
        dispatch({
            type:movieType.FETCH_MOVIEPAGE_SUCCESS,
            payload: response.data.content,
        })
    }catch(err){
        dispatch({
            type:movieType.FETCH_MOVIEPAGE_FAILED,
            payload:err
        })
    }
}
export const fetchAllMovieAction = ()=>async(dispatch)=>{
    try{
        dispatch({type:movieType.FETCH_ALLMOVIE_REQUEST})
        const response = await movieApi.fetchAllMovieApi();
        dispatch({
            type:movieType.FETCH_ALLMOVIE_SUCCESS,
            payload: response.data.content,
        })
    }catch(err){
        dispatch({
            type:movieType.FETCH_ALLMOVIE_FAILED,
            payload:err
        })
    }
}


export const changePageAction = (ispage) => async(dispatch)=>{
    if(ispage){
        dispatch({type:movieType.CHANGE_PAGE_NEXT})
    }else{
        dispatch({type:movieType.CHANGE_PAGE_PREV})
    }
}