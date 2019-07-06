import React from 'react'
import Loader from '../components/Loader/Loader'
import Post from '../components/Post/Post'
import useFetch from './useFetch'

const Posts = ({ currentPost, setPost }) => {
  const { loading, data: posts } = useFetch('/posts')
  return (
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
  )
}

export default Posts
