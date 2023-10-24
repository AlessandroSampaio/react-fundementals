import React from "react";
import Post from "./Post";
import Header from "./Header";

const title = 'JStack`s Blog';

function App() {
    return (
        <>
            <Header  title={title}>
                <h2>Posts da Semana</h2>
            </Header>
            <hr />

            <Post
                title="Titulo da Noticia 01"
                subtitle="Subtitulo da Noticia 01"
            />

            <Post
                title="Titulo da Noticia 02"
                subtitle="Subtitulo da Noticia 02"
            />

            <Post
                title="Titulo da Noticia 03"
                subtitle="Subtitulo da Noticia 03"
            />
        </>
    );
}

export default App;