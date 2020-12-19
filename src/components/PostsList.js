import React from 'react';
import PostItem from './PostItem';

const PostsList = ({ postsData }) => {
  return (
    <div className='container post-list '>
      {postsData &&
        postsData.length > 0 &&
        postsData.map(item => <PostItem key={item.id} item={item} />)}
    </div>
  );
};

export default PostsList;
