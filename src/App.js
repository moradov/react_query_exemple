import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from './components/Spinner';
import ErrHandler from './components/ErrHandler';
import PostsList from './components/PostsList';

function App() {
  useEffect(() => fetchPosts(), []);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    setErr(false);
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = await res.data;
      setLoading(false);
      setErr(false);
      setPosts(data);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  };

  if (loading) {
    return <Spinner />;
  } else if (err) {
    return <ErrHandler tryAgainClicked={fetchPosts} />;
  } else {
    return <PostsList postsData={posts} />;
  }
}
export default App;
