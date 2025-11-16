import React from "react";

//blogData is imported to pass down to components' properties
import blogData from "../data/blog";

import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);

//The main component, App, renders Header, About and ArticleList
//ArticleList contains a nested component: Article
//The properties are declared using the blogData information

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={ blogData.posts } />
    </div>
  );
}

export default App;
