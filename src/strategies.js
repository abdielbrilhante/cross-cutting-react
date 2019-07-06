import DupPosts from './dup/Posts'
import DupComments from './dup/Comments'

import HOCPosts from './hoc/Posts'
import HOCComments from './hoc/Comments'

export default {
  duplicated_code: {
    Posts: DupPosts,
    Comments: DupComments,
  },
  hoc: {
    Posts: HOCPosts,
    Comments: HOCComments,
  },
}
