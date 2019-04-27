import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

const isPro = process.env.NODE_ENV === 'production'
const showMsg = msg => {
  Message.error({
    showClose: true,
    message: msg,
    type: 'error',
    duration: 3000
  })
}

// create an axios instance
const service = axios.create({
  baseURL: isPro ? '/api/smartdoc' : '/api',
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // console.log(config)
    // Do something before request is sent
    config.method === 'post' && ( config.data = qs.stringify(config.data) )
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// response interceptors
service.interceptors.response.use(
  response => {
    const res = response.data
    // console.log('response: ', response)
    return res
  },
  error => {
    const status = error.response.status
    if(status === 400) {
      showMsg('接口调用异常，请稍后再试 ~_~ ')
    } else if(status === 404) {
      showMsg('接口访问异常，请稍后再试 ~_~ ')
    }else {
      showMsg('服务器繁忙，请稍后再试 ~_~ ')
    }
    return Promise.reject(error)
  }
)

export default service