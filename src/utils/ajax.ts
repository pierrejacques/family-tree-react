import Axios from 'axios'

const createAjax = (baseURL) => {
    const instance = Axios.create({
        baseURL,
        withCredentials: true,
    })
    instance.interceptors.response.use(
        (res) => {
            if (res.data.code === 401) {
                setTimeout(() => window.location.href = '#/login', 0)
            }
            return res
        },
    )
    return instance
}

export default createAjax(
    'https://www.zhongxiaotuan.com/api/',
)
