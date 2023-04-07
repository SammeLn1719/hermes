import axios from "axios";


const $host = axios.create({
<<<<<<< HEAD
    baseURL:process.env.REACT_APP_API_URL
})
const $authHost = axios.create({
    baseURL:process.env.REACT_APP_API_URL
=======
    baseURL:'process.env.REACT_APP_API_URL'
})
const $authHost = axios.create({
    baseURL:'process.env.REACT_APP_API_URL'
>>>>>>> 632c72b3cc9e165c60c87b136f2bdbd6c417b965
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}