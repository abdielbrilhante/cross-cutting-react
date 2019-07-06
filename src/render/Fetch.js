import React from 'react'
import api from '../helpers/api'

class Fetch extends React.Component {
  state = { loading: true, data: null }

  async componentDidMount() {
    try {
      const { endpoint } = this.props
      const data = await api.get(endpoint)
      this.setState({ loading: false, data })
    } catch (error) {
      this.setState({ loading: false })
    }
  }

  render() {
    const { loading, data } = this.state
    const { render } = this.props
    return render({ loading, data })
  }
}

export default Fetch
