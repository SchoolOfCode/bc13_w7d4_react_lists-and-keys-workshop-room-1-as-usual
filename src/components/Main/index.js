import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  console.log(posts)
  return (
  <main id="main">
    {posts.map((post) => {return <Post key={post.postId} title={post.title} date={post.date} author={post.author} text={post.text} src={post.image.link} alt={post.image.alt}/>})}

{/*     {posts.highlights.map((item, index) => {return <Post key={index} highlights={item.highlights}/>})} */}
    
  </main>
  )
}

export default Main;

/* title: 'One Of My Favourites',
    date: '12/10/20',
    author: 'Bobby Nest',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        'https://i.pinimg.com/originals/71/a0/5f/71a05f47b8f449fc231881416bf4bc66.jpg',
      alt: 'A blue-grey pigeon turns to face the camera.', */
