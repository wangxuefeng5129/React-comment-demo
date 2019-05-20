import React from 'react';
import CommentAdd from './comment-add'
import CommentList from './comment-list'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  //初始化数据
  state = {
    comments:[
      {username:'tom',content:'react is easy'},
      {username:'mary',content:'java is easy'},
      {username:'jack',content:'php is easy'}
      ]
  };

  //添加评论，传递给添加组件
  addComment=(comment)=>{
    const {comments} = this.state;
    comments.unshift(comment);
    this.setState({comments});
  };

  //删除指定评论
  deleteComment=(index)=>{
    const {comments} = this.state;
    comments.splice(index,1);
    this.setState({comments})
  };

  render(){
    const {comments} = this.state;

    return(
        <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>

            <div className="container">
              <CommentAdd addComment={this.addComment}/>
              <CommentList comments={comments} deleteComment={this.deleteComment}/>
            </div>
          </header>
        </div>
    )
  }
}

export default App;
