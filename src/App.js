import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

function App() {

  const [posts, setPosts] = useState([
    {
      id: Math.random(), title: 'Title #01', subtitle: 'Subtitle #01', likes: 20, read: true,
    },
  
    {
      id: Math.random(), title: 'Title #02', subtitle: 'Subtitle #02', likes: 40, read: true,
    },
  
    {
      id: Math.random(), title: 'Title #03', subtitle: 'Subtitle #03', likes: 120, read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random,
        title: `Title #0${posts.length + 1}`,
        subtitle: `Subtitle #0${posts.length + 1}`,
        likes: 50
      }
    ]);
  };

  function handleRemove( postId){
    setPosts((prevState) => prevState.filter(post => post.id !== postId));
  }

  
  return (
    <>
      <Header >
        <h2>Posts da Semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />

      {posts.map(
        (element) => (
          <Post
            key={element.title} 
            onRemove={handleRemove}
            post={{
              id: element.id,
              title : element.title,
              subtitle: element.subtitle,
              read: element.read
            }}
            likes={element.likes} 
          />
        )
      )}
    </>
  );
}

export default App;
