import React from 'react';

const PostItem = ({ item: { title, body, name } }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{name} </h5>
        <p className='card-text'>{body}</p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default PostItem;
