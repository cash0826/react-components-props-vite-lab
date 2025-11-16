import React from 'react';
import Article from './Article'

//ArticleList is a child component of App
//ArticleList renders posts
//Each post contains passed properties from blogData: id, title, date, and preview
//The passed properties are passed again to the new child component: Article
//Article renders each post using the passed properties

function ArticleList(props){
    let posts = props.posts || [];

    return (
        <>
            <main>
                {
                    posts.map((posts) => <Article key={ posts.id } title={ posts.title } date= { posts.date } preview= { posts.preview} /> )
                }
            </main>
        </>
    )
};

export default ArticleList;
