import React, { Component } from 'react';
import { connect } from 'react-redux';
import {postData} from '../redux/action/postlist'

class Comment extends Component {
    
    onChangeVal=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
    }
    submit=()=>{
        // console.log(this.state)
        this.props.postData(this.state)
    }
    render() {
        return (
            <div>
                <h4>标题：</h4>
                <p><input type='text' name="title" onChange={this.onChangeVal}></input></p>
                <h4>内容：</h4>
                <p><input type='textare' name="body" onChange={this.onChangeVal}></input></p>
                <button onClick={this.submit}>提交</button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
  return{ 
    post:state.homelist.post,
} 
}
export default connect(mapStateToProps,{postData})(Comment)