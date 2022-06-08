import axios from 'axios';
import { API_URL } from '../globals/config';


export const getAllTools = () => {

  return axios.get(`${API_URL}/products/Hosting`)
}


export function getSecurity() {
  return axios.get(`${API_URL}/products/security`)
}

export function getInvestment() {
  return axios.get(`${API_URL}/products/investment`)
}

export function getProductsInfo(item) {
  return axios.get(`${API_URL}/products/productsinfo/${item}`)
}


export function getUserProfileData(emailaddress) {
  return axios.post(`${API_URL}/userprofile`, { emailid: emailaddress })
}

export function logIn(obj) {
  return axios.post(`${API_URL}/login`, obj);
}

export function registration(regObj) {
  return axios.post(`${API_URL}/registration`, regObj)
}

export function updateUser(updateObj) {
  return axios.put(`${API_URL}/userupdate`, updateObj)
}

export function searchProduct(value) {
  return axios.get(`${API_URL}/products/${value}`)
}

export function postReviews(reviewObj) {
  return axios.post(`${API_URL}/postreviews`, reviewObj)
}

export function getBannerImages() {
  return axios.get(`${API_URL}/banners`)
}