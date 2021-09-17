import callApi from "utils/callApi";
import axios from 'axios'
const bookingApi = {
    fetchAllSeatApi(malichchieu) {
        return callApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${malichchieu}`);
    },
    postDatVeApi:(data)=>{
        const url = 'http://movieapi.cyberlearn.vn/api/QuanLyDatVe/DatVe';
        
        return axios({
            url:url,
            method:'post',
            data:data,
            headers: {'Authorization': 'Bearer '+ localStorage.getItem('accessToken')}
        })
    }
    
}

export default bookingApi;