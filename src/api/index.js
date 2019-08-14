import request  from '../untils/request'

export function getdata(data){
    return request({
        url:'/posts',
        method:'get',
        params:data
    })
}

export function postdata(data){
    return request({
        url:'/comments',
        method:'post',
        data,
    })
}