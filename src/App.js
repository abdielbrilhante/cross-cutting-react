import React, { useState } from 'react'

import Selector from './components/Selector/Selector'
import strategies from './strategies'

const App = () => {
  const [strategy, setStrategy] = useState('duplicated_code')
  const [post, setPost] = useState(null)

  const Strategy = strategies[strategy]

  return (
    <div className="app">
      <div className="content">
        <Strategy.Posts currentPost={post} setPost={setPost} />
        <Strategy.Comments currentPost={post} key={post} />
      </div>
      <Selector choice={strategy} setChoice={setStrategy} />
    </div>
  )
}

export default App
