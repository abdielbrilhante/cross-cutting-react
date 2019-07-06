import DupPosts from './dup/Posts'
import DupComments from './dup/Comments'

import HOCPosts from './hoc/Posts'
import HOCComments from './hoc/Comments'

import RenderPosts from './render/Posts'
import RenderComments from './render/Comments'

export default {
  duplicated_code: {
    Posts: DupPosts,
    Comments: DupComments,
  },
  hoc: {
    Posts: HOCPosts,
    Comments: HOCComments,
  },
  render_prop: {
    Posts: RenderPosts,
    Comments: RenderComments,
  }
}
