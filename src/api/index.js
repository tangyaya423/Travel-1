import axios from 'axios'

axios.interceptors.response.use(function(response) {
  // Do something with response data
  return response.data.data;
});


//请求home组件的数据接口
export let getHome = ()=>{
  return axios.get('/static/data/index.json')
}

//请求city组件的数据接口
export let getCities = ()=>{
  return axios.get('/static/data/city.json')
}

//请求detail组件的数据接口
export let getDetails = (id)=>{
  return axios.get('/static/data/detail/'+id+'.json')
}
