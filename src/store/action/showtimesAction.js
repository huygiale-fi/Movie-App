import showtimeApi from 'apis/showtimeApi'
import * as showtimeType from '../constants/showtimeType'


export const fetchInfoShowtimeAction = (maphim)=>async(dispatch)=>{
    try{
        dispatch({type:showtimeType.FETCH_INFO_SHOWTIMES_REQUEST})
        const response = await showtimeApi.fetchInfoShowtimeApi(maphim)
        console.log(response)
        dispatch({
            type:showtimeType.FETCH_INFO_SHOWTIMES_SUCCESS,
            payload:response.data.content
        })
    }catch(err){
        dispatch({
            type:showtimeType.FETCH_INFO_SHOWTIMES_FAILED,
            payload:err
        })
    }
}