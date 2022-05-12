import axios from 'axios'

export const apiPropertyGetList = () => axios.get('/api/property')
export const apiPropertyGetItem = (id: string) => axios.get(`/api/property/${id}`)