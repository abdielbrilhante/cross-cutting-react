const baseURL = 'https://jsonplaceholder.typicode.com'

export default {
  get: async (endpoint) => {
    const response = await fetch(`${baseURL}${endpoint}`)
    return response.json()
  },
}
