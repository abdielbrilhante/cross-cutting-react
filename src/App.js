import React, { useState } from 'react'

import Posts from './dup/Posts'
import Comments from './dup/Comments'
import Selector from './components/Selector/Selector'

const App = () => {
  const [strategy, setStrategy] = useState('duplicated_code')
  const [post, setPost] = useState(null)
  return (
    <div className="app">
      <div className="content">
        <Posts currentPost={post} setPost={setPost} />
        {post && <Comments currentPost={post} key={post} />}
      </div>
      <Selector choice={strategy} setChoice={setStrategy} />
    </div>
  )
}

export default App
