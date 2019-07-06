import { useEffect, useState } from 'react'
import api from '../helpers/api'

const useFetch = (endpoint) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.get(endpoint)
        setData(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint])

  return { loading, data }
}

export default useFetch
