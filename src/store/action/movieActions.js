import movieApi from '../../apis/movieApi'
import * as movieType from '../constants/movieType'
export const fetchBannerAction = ()=>async(dispatch)=>{
    try{
        dispatch({type:movieType.FETCH_BANNER_REQUEST})
        const respone = await movieApi.fetchBannerApi();
        dispatch({
            type:movieType.FETCH_BANNER_SUCCESS,
            payload:respone.data.content,
        })
    }catch(err){
        dispatch({
            type:movieType.FETCH_BANNER_FAILED,
            payload:err,
        })
    }
}