import axios from 'axios';

export const apiClient = axios.create({
  baseURL: ' https://api.skilla.ru/',
  responseType: 'arraybuffer',
  headers: {
    Authorization: 'Bearer testtoken',
    'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
    'Content-Transfer-Encoding': 'binary',
    'Content-Disposition': 'filename="record.mp3"',
  },
});

export default {
  getRecord(payload: any) {
    return apiClient.post('mango/getRecord?' + payload);
  },
};
