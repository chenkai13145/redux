import {combineReducers} from 'redux'
import postreducer from './postList'

export default combineReducers({
    homelist:postreducer
})