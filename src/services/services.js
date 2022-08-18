import axios from 'axios';
import { API_URL } from '../globals/config';


export const getAllTools = async () => {

  const response = await axios.get(`${API_URL}/products/Hosting`);
  return response;
}


export async function getSecurity() {
   const response = await axios.get(`${API_URL}/products/security`);
   return response;
}

export async function getInvestment() {
  const res = await axios.get(`${API_URL}/products/investment`);
  return res;
}

export async function getProductsInfo(item) {
   const res = await axios.get(`${API_URL}/products/productsinfo/${item}`);
   return res;
}


export async function getUserProfileData(emailaddress) {
  const options = {
    headers:  {'content-type': 'application/json'},
    body: JSON.stringify({ emailid: emailaddress }),
  }
   const response = await axios.post(`${API_URL}/userprofile`, options);
   return response;
}

export async function logIn(obj) {
  const res = await axios.post(`${API_URL}/login`, obj);
  return res;
}

export async function registration(regObj) {
   const res = await axios.post(`${API_URL}/registration`, regObj);
   return res;
}

export async function updateUser(updateObj) {
   const res = await axios.put(`${API_URL}/userupdate`, updateObj)
   return res;
}

export async function searchProduct(value) {
  const res = await axios.get(`${API_URL}/products/${value}`);
  return res;
}

export async function postReviews(reviewObj) {
  const res = await axios.post(`${API_URL}/postreviews`, reviewObj)
  return res;
}

export async function getBannerImages() {
   const res = await axios.get(`${API_URL}/banners`)
   return res;
}