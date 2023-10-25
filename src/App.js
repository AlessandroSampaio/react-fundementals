import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

function App() {

  const [posts, setPosts] = useState([
    {
      id: Math.random(), title: 'Title #01', subtitle: 'Subtitle #01', likes: 20
    },
  
    {
      id: Math.random(), title: 'Title #02', subtitle: 'Subtitle #02', likes: 40
    },
  
    {
      id: Math.random(), title: 'Title #03', subtitle: 'Subtitle #03', likes: 120
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
            post={{
              title : element.title,
              subtitle: element.subtitle
            }}
            likes={element.likes} 
          />
        )
      )}
    </>
  );
}

export default App;
