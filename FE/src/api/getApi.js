import axios from 'axios'
import { env } from '../env/env'

const getApi = (urldefault, body, callback) => {
    const url = env.server + ':5000' + urldefault
    axios({
        method: 'post',
        url: url,
        data: body
    }).then(response => {
        if (response.status === 200) {
            callback(response.data)
        }
    }).catch(error => {
        callback(error)
    })

}

export default getApi