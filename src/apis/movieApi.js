import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

const movieApi = {
    fetchAllMovieApi() {
        return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
    },

    fetchMovieDetailApi(movieId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    },

    fetchBannerApi() {
        return callApi(`QuanLyPhim/LayDanhSachBanner`);
    }
}

export default movieApi;