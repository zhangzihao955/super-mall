import axios from './axios';

export function getHomeMuItidata(){
    return axios({
        url:'/home/multidata'
    })
};
export function getHomegoods(type,page){
    return axios({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}