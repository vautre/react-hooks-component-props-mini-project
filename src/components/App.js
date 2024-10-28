import React from "react";
import blogData from "../data/blog";
import Header from "./Header.jsx"
import About from "./About.jsx"
import Article from "./Article.jsx"
import ArticleList from "./ArticleList"

// console.log(blogData);

function App() {
  return (

    <div className="App">

      <Header name= {blogData.name} />

      <About image={blogData.image} about={blogData.about} />

      <ArticleList posts={blogData.posts} />

      <Article />
      <Article />
      <Article />

      <p>about</p>

    </div>
  );
}

export default App;
