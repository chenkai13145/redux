import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk' //中间件作用用来action异步操作
import rootReduxcer from '../reducer/index'
const initStateVal={} //初始化
const middleware=[thunk]

//1、reducer2、初始化值3、action异步操作
export const store=createStore(
    rootReduxcer,
    initStateVal,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //显示数据插件
        )
        )