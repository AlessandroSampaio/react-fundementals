import React from "react";
import Post from "./Post";
import Header from "./Header";

const title = "JStack`s Blog";

function App() {
  return (
    <>
      <Header >
        <h2>Posts da Semana</h2>
      </Header>
      <hr />

      <Post
        likes={20}
        post={{
          title: "Titulo da Noticia 01",
          subtitle: "Subtitulo da Noticia 01",
        }}
      />

      <Post
        likes={50}
        post={{
          title: "Titulo da Noticia 02",
          subtitle: "Subtitulo da Noticia 02",
        }}
      />

      <Post
        likes={30}
        post={{
          title: "Titulo da Noticia 03",
          subtitle: "Subtitulo da Noticia 03",
        }}
      />
    </>
  );
}

export default App;
