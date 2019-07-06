import React from 'react'
import Loader from '../components/Loader/Loader'
import Post from '../components/Post/Post'
import api from '../helpers/api'

export default class Posts extends React.Component {
  state = { loading: true, posts: [] }

  async componentDidMount() {
    try {
      const posts = await api.get('/posts')
      this.setState({ loading: false, posts })
    } catch (error) {
      this.setState({ loading: false })
    }
  }

  render() {
    const { loading, posts } = this.state
    const { currentPost, setPost } = this.props

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
}
