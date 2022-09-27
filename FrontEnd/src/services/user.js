import { myAxios } from "./helper";

export const ServiceSignUp=(customer)=>{

    return myAxios.post('/api/customers',customer);
}


export const ServiceLogin=(loginDetail)=>{
    
    return myAxios.post('/api/v1/auth/login',loginDetail).then((response)=>response.data);
}