import axios from "axios";
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '18818490-d3572911d029790c33b9a509f';
export const getImg = (searchImg,page) => {
    return axios.get( `${BASE_URL}/?q=${searchImg}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)

};



