import React from 'react';

import './index.css';

function Post(props) {
  return <article>
    <h1>{props.title}</h1>
    <p>{props.date}</p>
    <p>{props.author}</p>
    <p>{props.text}</p>
    
      {/* <li>{props.highlights}</li> */}
    
    <img src={props.src} alt={props.alt} />
  </article>;
}

export default Post;
