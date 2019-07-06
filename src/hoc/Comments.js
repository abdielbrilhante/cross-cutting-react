import React from 'react'
import Loader from '../components/Loader/Loader'
import withFetch from './withFetch'

const Posts = ({ fetchedData }) => {
  const { loading, data: comments } = fetchedData
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

export default withFetch(({ currentPost }) => `/posts/${currentPost}/comments`)(Posts)
