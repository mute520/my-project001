import request from './request'

export function getPublicModel(data) {
  return request({
    url: '/getPublicModel',
    method: 'post',
    data
  })
}

export function modelInfo() {
  return request({
    url: '/modelInfo',
    method: 'get',
    // data
  })
}