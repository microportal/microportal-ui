import axios from 'axios'

export const loadServices = async () => {
    const {data} = await axios.get('/core-service/applications/services')
    return {type: 'LOAD_SERVICES', payload: data}
}
