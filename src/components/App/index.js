import React, { useState } from "react";
import { ThemeProvider } from "../../context/ThemeContext";
import Header from "../Header";
import Post from "../Post";
import {Title} from "./styles";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title #01",
      subtitle: "Subtitle #01",
      likes: 20,
      read: true,
      removed: false,
    },

    {
      id: Math.random(),
      title: "Title #02",
      subtitle: "Subtitle #02",
      likes: 40,
      read: true,
      removed: false,
    },

    {
      id: Math.random(),
      title: "Title #03",
      subtitle: "Subtitle #03",
      likes: 120,
      read: false,
      removed: true,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title #0${posts.length + 1}`,
        subtitle: `Subtitle #0${posts.length + 1}`,
        likes: 50,
        read: false,
        removed: false,
      },
    ]);
  }

  function handleRemove(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>

      <hr />

      {posts.map((element) => (
        <Post
          key={element.title}
          onRemove={handleRemove}
          post={{
            id: element.id,
            title: element.title,
            subtitle: element.subtitle,
            read: element.read,
            removed: element.removed,
          }}
          likes={element.likes}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
