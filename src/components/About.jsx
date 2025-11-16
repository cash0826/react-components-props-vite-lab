import React from 'react';

//The About function is a child of App
//The About renders an image and about information from blogData

function About({about, ...props}) {
    let image = props.image;
    if (! image){
        image = "https://via.placeholder.com/215"
    }

    return (
        <>
            <aside>
                <img alt="blog logo" src={ image }/>
                <p>{ about }</p>
            </aside>
        </>
    )
};

export default About;
