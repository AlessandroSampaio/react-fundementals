import React from "react";
import Post from "./Post";

const category = 'Posts da semana';

function App() {
    return (
        <>
            <h1>JStack's Blog</h1>
            <h2>{category}</h2>

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