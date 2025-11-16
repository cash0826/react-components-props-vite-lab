import React from 'react';

//Header is a child component of App
//Header renders the blog name from blogData using the properties it was passed down

function Header(props){
    let name = props.name;

    return (
        <>
            <header>
                <h1>{ name }</h1>
            </header>
        </>
    )
};

export default Header;
