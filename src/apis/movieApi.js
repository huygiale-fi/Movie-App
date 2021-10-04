import axios from 'axios';
import {GROUP_ID} from '../settings/apiConfig'
import callApi from '../utils/callApi';


const movieApi = {
    fetchAllMoviePageApi(page) {
        return callApi(`QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&soTrang=${page}&soPhanTuTrenTrang=12`);
    },
    fetchAllMovieApi() {
        return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
    },

    fetchMovieDetailApi(movieId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    },

    fetchBannerApi() {
        return callApi(`QuanLyPhim/LayDanhSachBanner`);
    },
    fetchMovieInfoApi(maphim) {
        return callApi(`QuanLyPhim/LayThongTinPhim?MaPhim=${maphim}`);
    },
    addMovieUpLoadImg(formdata){
        return callApi(`QuanLyPhim/ThemPhimUploadHinh`,"POST",formdata)
    },
    updateMovieApi:(formdata)=>{
        const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload';
        
        return axios({
            url:url,
            method:'POST',
            data:formdata,
            headers: {'Authorization': 'Bearer '+ localStorage.getItem('accessToken')}
        })
    },
    deleteMovieApi:(maphim)=>{
        const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maphim}`;
        
        return axios({
            url:url,
            method:'DELETE',
            headers: {'Authorization': 'Bearer '+ localStorage.getItem('accessToken')}
        })
    }
}

export default movieApi;