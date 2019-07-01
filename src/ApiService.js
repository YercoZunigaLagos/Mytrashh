import axios from 'axios';
const API_URL = 'http://127.0.0.1:8080';
export class APIService{

constructor(){
}
getPuntos() {
    const url = `${API_URL}/employees/`;
    return axios.get(url).then(response => response.data);
}
};


