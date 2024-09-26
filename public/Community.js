import React, { useState } from 'react';

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const addPost = () => {
    setPosts([...posts, newPost]);
    setNewPost('');
  };

  return (
    <div>
      <h2>커뮤니티</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index}>{post}</div>
        ))}
      </div>
      <input
        value={newPost}
        onChange={e => setNewPost(e.target.value)}
        placeholder="게시글 작성"
      />
      <button onClick={addPost}>Post</button>
    </div>
  );
};

export default Community;
