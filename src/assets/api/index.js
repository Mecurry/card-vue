import fetch from './fetch'

export default {
  common: {
    login(params) {
      return fetch('/auth/getToken', params, 'post', 'form', 'baseURL1')
    },
    searchInfo(params) {
      return fetch('/staff/userinfo/query', params, 'post')
    },

    // 上传行驶证OCR识别
    ocrIdentify(params) {
      return fetch('/staff/carInfo/OCRIdentify', params, 'post', 'file')
    },

    insert(params) {
      return fetch('/staff/carInfo/insert', params, 'post')
    },
    carInfoUpdate(params) {
      return fetch('/staff/carInfo/update', params, 'post')
    },
    eviBind(params) {
      return fetch('/staff/carInfo/evi_id_bind', params, 'post')
    },
    activation(params) {
      return fetch('/staff/carInfo/activation', params, 'post', 'file')
    },
    getbinds(params) {
      return fetch('/staff/carInfo/queryCarIdCode', params, 'post')
    }
  }
}