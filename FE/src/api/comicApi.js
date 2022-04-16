
import axios from 'axios'

const comicApi = (urldefault,body,callback) => {
  const url = 'https://mangamint.kaedenoki.net/api/' + urldefault
  axios({
    method: 'get',
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

export default comicApi;
