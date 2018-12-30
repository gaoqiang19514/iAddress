const Api = {
  get: function (url, data, settings) {
    return axios.get(url, { ...settings, params: data })
  },
  post: function (url, data, settings) {
    return axios.post(url, data, { ...settings });
  },
  getProvince: function () {
    return this.get('./getProvince');
  },
  getCities: function (code) {
    return this.get('./getCities', { code: code });
  },
  getAreas: function (code) {
    return this.get('./getAreas',  { code: code });
  },
  getStreets: function (code) {
    return this.get('./getStreets',  { code: code });
  },
  postArticle: function (data) {
    return this.post('./postArticle', data);
  }
}