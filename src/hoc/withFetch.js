import React from 'react'
import api from '../helpers/api'

const withFetch = (endpoint) => (Comp) => {
  return class WithFetch extends React.Component {
    state = { loading: true, data: null }

    async componentDidMount() {
      try {
        const requestEndpoint = typeof endpoint === 'function' ? endpoint(this.props) : endpoint
        const data = await api.get(requestEndpoint)
        this.setState({ loading: false, data })
      } catch (error) {
        this.setState({ loading: false })
      }
    }

    render() {
      const { loading, data } = this.state
      const props = {
        ...this.props,
        fetchedData: {
          loading,
          data,
        }
      }
      return <Comp {...props} />
    }
  }
}

export default withFetch
