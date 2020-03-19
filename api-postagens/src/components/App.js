import React from 'react';
import Post from './Post'

export default class App extends React.Component{
  render(){
    return (
      <>
        <div className="App">
          <h1>Feed Comments</h1>
        </div>
          <div>
            <Post title="Learning react " />
            
            <Post title="Learning front end"/>
          </div>
        </>
    );  
  }
}
