import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.quran.com:3000/api/v3/',
});
