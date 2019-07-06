import React from 'react'
import Loader from '../components/Loader/Loader'
import api from '../helpers/api'

export default class Comments extends React.Component {
  state = { loading: true, comments: [] }

  async componentDidMount() {
    try {
      const { currentPost } = this.props
      const comments = await api.get(`/posts/${currentPost}/comments`)
      this.setState({ loading: false, comments })
    } catch (error) {
      this.setState({ loading: false })
    }
  }

  render() {
    const { loading, comments } = this.state

    return (
      <div className="comments">
        <h3>Post comments</h3>
        {loading ? (
          <Loader />
        ) : comments.map((comment) => (
          <div key={comment.id} className="comment">
            <h4>
              <strong>{comment.name}</strong> [{comment.email.toLowerCase()}]
            </h4>
            <p>
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    )
  }
}
