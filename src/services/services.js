export const getFreeSoftware = () => {
    return fetch({
      method: 'GET',
      url: '/data/freedesktopsoftware.json',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  };