import axios from "axios";
import callApi from "../utils/callApi";




const showtimeApi = {
    fetchInfoShowtimeApi(maphim) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maphim}`);
    },
    fetchHeThongRapApi(){
        return callApi(`QuanLyRap/LayThongTinHeThongRap`)
    },
    fetchCumRapApi(htRap){
        return callApi(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${htRap}`)
    },
    postTaoShowTime(data){
        const url = 'http://movieapi.cyberlearn.vn/api/QuanLyDatVe/TaoLichChieu';
        
        return axios({
            url:url,
            method:'POST',
            data:data,
            headers: {'Authorization': 'Bearer '+ localStorage.getItem('accessToken')}
        })
    }

}

export default showtimeApi;