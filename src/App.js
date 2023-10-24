import React from "react";
import Post from "./Post";
import Header from "./Header";

const posts = [
  {
    title: 'Title #01', subtitle: 'Subtitle #01', likes: 20
  },

  {
    title: 'Title #02', subtitle: 'Subtitle #02', likes: 40
  },

  {
    title: 'Title #03', subtitle: 'Subtitle #03', likes: 120
  },
];

function App() {
  return (
    <>
      <Header >
        <h2>Posts da Semana</h2>
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
