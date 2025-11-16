# Blog Site

## Overview

This is a personal blog site, similar to
[Dan Abramov's Overreacted](https://overreacted.io/):

![demo](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-component-props-mini-project/demo.png)

The data in `data/blog.js`  is being imported into `App` so it can be passed down to the components that need it.

## Setup

Run the following commands:

   npm install
   npm run dev

## Component Tree

└── App
    ├── Header
    ├── About
    └── Article List
        └── Article

## Component Files

The files can be found here ./src/components.
Code comments explaining key logic can be found in each component:

- `App.js`
- `Header.js`
- `About.js`
- `ArticleList.js`
- `Article.js`

## Testing

To run the test suites, run the following command:

   npm run test