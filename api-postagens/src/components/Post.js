import React from 'react';
import Comment from './Comment';
import './Post.css';
export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments:[
                { text: ''}
            ]
            , newCommentText:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleSubmit(e){
        this.setState({
            comments: [
                {text:this.state.newCommentText},
                ...this.state.comments
            ]
        })

        this.setState({newCommentText: ''})
        e.preventDefault();
    }

    handleTextChange(e){
        this.setState({newCommentText: e.target.value})
    }
  
    render(){
        return(
            <div className="container">
                <div className="itemContain">
                    <h3>{this.props.title}</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.newCommentText} onChange={this.handleTextChange}></input>
                        <button type="submit"> Comment</button>
                    </form>
                    {this.state.comments.map((comment,index)=>{
                        return <Comment key={index} text={comment.text}></Comment>
                    })}

                </div>
            </div>
        )


    }
}