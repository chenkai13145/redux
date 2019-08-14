import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getpostlidst} from '../redux/action/postlist'
import Comment from './commet'

class HomeClas extends Component {
   
    componentWillMount(){
        this.props.getpostlidst()
    }
    // componentWillReceiveProps(nextProps,oldProps){
    //     console.log(nextProps)
    // }
    render() {
        return (
            <div>
                {this.props.vals}
                <div>
                  <Comment/>
                </div>
                <ul>
                   {this.props.postlistss.map((item)=>{
                      return <li key={item.body}><h3>评论人:{item.title}</h3><p>评论：{item.body}</p></li>
                    })}
                </ul>
               
            </div>
        );
    }
}
//获取store值mapStateToProps
const mapStateToProps=state=>{
    return{
    postlistss:state.homelist.postlist,
    vals:state.homelist.val
}}
export default connect(mapStateToProps,{getpostlidst})(HomeClas);
