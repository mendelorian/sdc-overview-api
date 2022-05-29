const http = require('k6/http');
const { sleep } = require('k6');
export const options = {
  vus: 1000,
  duration: '3m'
};


export default function () {
  var lowerVal = 1000011 * 0.9;
  var productId = Math.floor(Math.random() * (1000011 - lowerVal) + lowerVal);
  // var productId = Math.floor(Math.random() * 1000011);

  http.get(`http://54.67.77.142/products/${productId}/styles`);
  // http.get(`http://13.57.29.232:8080/products/${productId}/styles`);

  sleep(1);
}