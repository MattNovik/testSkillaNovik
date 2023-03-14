import axios from 'axios';

export const apiClient = axios.create({
  baseURL: ' https://api.skilla.ru/',
  headers: {
    'Authorization': 'Bearer testtoken'
  }
});

export default {
  getListOfCalls(payload: any) {
    return apiClient.post('mango/getList?' + payload);
  },
  getRecord(payload:any) {
    return apiClient.post('mango/getRecord?' + payload);
  },
  getCallback(payload: any) {
    return apiClient.post('mango/getCallback?' + payload);
  },
  sendAbuse(payload: any) {
    return apiClient.post('mango/sendAbuse?' + payload);
  },
  answerAbuse(payload: any) {
    return apiClient.post('mango/answerAbuse?' + payload);
  },
}