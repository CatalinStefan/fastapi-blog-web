import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';

const BASE_URL = 'http://localhost:8000/'

function App() {

  const[posts, setPosts] = useState([])

  useEffect(() => {
    fetch(BASE_URL + 'post/all')
      .then(response => {
        const json = response.json()
        console.log(json);
        if (response.ok) {
          return json
        }
        throw response
      })
      .then(data => {
        return data.reverse()
      })
      .then(data => {
        setPosts(data)
      })
      .catch(error => {
        console.log(error);
        alert(error)
      })
  }, [])

  return (
    <div className="App">
      <div className='blog_title'>Open City Blog</div>
      <div className='app_posts'>
        {
          posts.map(post => (
            <Post post={post} />
          ))
        }
      </div>
      <div className='new_post'>
        <NewPost />
      </div>
    </div>
  );
}

export default App;
