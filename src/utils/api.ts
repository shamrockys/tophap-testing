import axios from 'axios'

export const apiPropertyGetList = () => axios.get('/api/property')
export const apiPropertyGetItem = (id: string) => axios.get(`/api/property/${id}`)
export const apiPropertyFilterList = (params: string) => axios.get(`/api/property/query?${params}`)