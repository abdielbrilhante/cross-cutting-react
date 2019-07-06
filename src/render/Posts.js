import React from 'react'
import Loader from '../components/Loader/Loader'
import Post from '../components/Post/Post'
import Fetch from './Fetch'

const Posts = ({currentPost, setPost }) => (
  <Fetch
    endpoint="/posts"
    render={({ loading, data: posts }) => (
      <div className="posts">
        {loading ? (
          <Loader />
        ) : posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            active={post.id === currentPost}
            onClick={() => setPost(post.id)}
          />
        ))}
      </div>
    )}
  />
)

export default Posts
