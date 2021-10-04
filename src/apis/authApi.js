import callApi from "utils/callApi"
import axios from 'axios'

const authApi = {
    postRegisterApi:(data)=>{
        return callApi(`QuanLyNguoiDung/DangKy`,'POST',data)
    },
    postLoginApi:(data)=>{
        return callApi(`QuanLyNguoiDung/DangNhap`,'POST',data)
    },
    postUserApi:()=>{
        const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan';
        
        return axios({
            url:url,
            method:'post',
            headers: {'Authorization': 'Bearer '+ localStorage.getItem('accessToken')}
        })
    },
}

export default authApi;