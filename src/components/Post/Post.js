import React from 'react'

const Post = ({ post, active, ...props }) => (
  <div key={post.id} className={`post ${active ? 'active' : ''}`.trim()} {...props}>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>
)

export default Post
