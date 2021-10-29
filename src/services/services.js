import axios from 'axios';
import { API_URL } from '../globals/config';


export const getAllTools = () => {

  return axios.get(`${API_URL}/productsinfo/Hosting`)
}

export const getAllAssets = () => {
  return axios.get(`${API_URL}/productsinfo/digiassets`)
}

export const getAllSoftware = () => {
  return axios.request({
    method: 'GET',
    data: `${API_URL}/productsinfo/desktop_software`
  });
}

export function getUserProfileData(emailaddress) {
  return axios.post(`${API_URL}/userprofile`, {emailid: emailaddress})
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
  return axios.get(`${API_URL}/productsinfo/${value}`)
}