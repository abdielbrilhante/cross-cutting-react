import React from 'react'
import Loader from '../components/Loader/Loader'
import Fetch from './Fetch'

const Comments = ({ currentPost }) => (
  <Fetch
    endpoint={`/posts/${currentPost}/comments`}
    render={({ loading, data: comments }) => (
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
    )}
  />
)

export default Comments
