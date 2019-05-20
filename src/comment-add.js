import React from 'react'
import PropTypes from 'prop-types'


class CommentAdd extends React.Component{
    static propTypes={
        addComment:PropTypes.func.isRequired
    };

    state = {
        username:'',
        content:''
    };

    //处理提交事件
    handleSubmit=(e)=>{
        //收集数据
        const comment = this.state;
        if(this.state.username === '' || this.state.content === ''){
            return;
        }

        this.props.addComment(comment);

        this.setState({
            username:'',
            content:''
        })
    };

    handleUsernameChange=(e)=>{
        const username = e.target.value.trim();
        this.setState({username})
    };

    handleContentChange=(e)=>{
        const content = e.target.value.trim();
        this.setState({content})
    };

    render() {
        const {username,content} = this.state;

        return(
            <div className='col-md-4'>
                <form className='form-horizontal'>
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={username} onChange={this.handleUsernameChange}/>
                    </div>

                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.handleContentChange}/>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentAdd