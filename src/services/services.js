import axios from 'axios';

const API = 'https://digismartautomate.com/api'

export const getFreeSoftware = () => {
    return axios.get(`${API}/productsinfo/desktop_software`)
            
    // return fetch({
    //   method: 'GET',
    //   url: `${API}/productsinfo/desktop_software`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // });
  };

  