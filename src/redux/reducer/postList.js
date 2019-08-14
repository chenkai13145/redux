import {POST_LIST,POST_COMMET} from '../action/type'

const initState={
    postlist:[],
    post:{},
    val:'dwd'
}
const postreducer=function (state=initState,action){
    switch (action.type){
        case POST_LIST:
             return{
                 ...state,
                 postlist:action.posts
             }
        case POST_COMMET:
             state.postlist.unshift(action.post)
            return{
                ...state,
                post:action.post,
                val:action.post.title
            }
        default:
            return state
    }
}

export default postreducer;