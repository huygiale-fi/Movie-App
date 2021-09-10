import callApi from "../utils/callApi";




const showtimeApi = {
    fetchInfoShowtimeApi(maphim) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maphim}`);
    },

}

export default showtimeApi;