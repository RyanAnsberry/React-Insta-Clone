import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js'

function App() {
  return (
    <div className="App">
      {dummyData.map( post => {
        return (
          <PostContainer data={post} key={post.id}/>
        )
      })}
    </div>
  );
}

export default App;
