import {getdata,postdata} from '../../api/index'
import {POST_LIST,POST_COMMET} from '../action/type'
export const getpostlidst=()=>dispatch=>{
    getdata().then(res=>{
            dispatch({
                    type:POST_LIST,
                    posts:res.data
            })
    })
}
export const postData=(data)=>dispatch=>{
    postdata(data).then(res=>{
        dispatch({
            type:POST_COMMET,
            post:res.data
        })
    })
}