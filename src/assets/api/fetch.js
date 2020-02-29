/**
 * Created by ebi on 2017/5/11.
 */
import axios from 'axios'

axios.defaults.timeout = 30000
axios.defaults.baseURL = 'http://103.120.225.226:18300/evi-car-service/manager/'


// axios.interceptors.request.use(async config => {
//     // 在发送请求之前做些什么
//     // console.log(Vue.prototype);
//     // console.log(languages())
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded' 
//     // if (config.method === 'post') { 
//     //   config.data = qs.stringify({
//     //     ...config.data
//     //   })
//     // }

//     const token = localStorage.getItem('usertoken')
//     if (token) config.headers.Authorization = token;
//     // console.log(Toast)
//     // Toast('该宝贝数量不能再减少了哟',3000);
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     console.log(error)
//     return Promise.reject(error);
// });




// type默认为form，如果要在请求体里传json，则传json，如果要上传文件，传file
function goodsFetch(url = '', params = {}, method = 'get', contentType = 'json') {
    if (contentType === 'json') contentType = 'jsonp';
    contentType === 'form' && (contentType = 'application/x-www-form-urlencoded')
    contentType === 'jsonp' && (contentType = 'application/json; charset=utf-8')
    contentType === 'file' && (contentType = 'multipart/form-data')
    let query = []
    for (let k in params) {
        query.push(k + '=' + params[k])
    }
    let qs = query.join('&')
    if (method.toLowerCase() === 'get' && query.length > 0) {
        url += (url.indexOf('?') < 0 ? '?' : '&') + qs
    }
    if (contentType !== 'application/x-www-form-urlencoded' && method !== 'get') {
        qs = params
    }
    // 判断是否登录
    // if (localStorage.getItem('X-token')) {
    //   let headersObj = {
    //     'X-token': 'bb822996f2ce4696ba31bf8fd3e13abe',
    //     'appKey': '80349e231ee02804237ac695'
    //   }
    // }
    let headersObj = {
        'X-token': 'bb822996f2ce4696ba31bf8fd3e13abe',
        'appKey': '80349e231ee02804237ac695'
    }
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            data: qs,
            headers: headersObj
        })
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (err) {
                if (err.response) {
                    reject(err.response)
                } else {
                    reject(err.response)
                }
            })
    })
}

export default goodsFetch
