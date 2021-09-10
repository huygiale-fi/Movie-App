import {GROUP_ID} from '../settings/apiConfig'
import callApi from '../utils/callApi';


const movieApi = {
    fetchAllMovieApi(page) {
        return callApi(`QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&soTrang=${page}&soPhanTuTrenTrang=12`);
    },

    fetchMovieDetailApi(movieId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    },

    fetchBannerApi() {
        return callApi(`QuanLyPhim/LayDanhSachBanner`);
    }
}

export default movieApi;