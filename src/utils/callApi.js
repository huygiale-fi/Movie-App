import axios from "axios";
import {BASE_URL} from '../settings/apiConfig'

const callApi = (endpoint, method = 'GET', data = null, header) => {
    return axios({
        url: `${BASE_URL}/${endpoint}`,
        method,
        data,
        headers: header,
    });
};

export default callApi;