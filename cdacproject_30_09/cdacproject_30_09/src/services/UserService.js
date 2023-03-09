import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8181/api"

class UserService {
    addUser(user){
        console.log(user)
        return axios.post(USER_API_BASE_URL+'/user', user);
    
    }
    
    login(UserEmailPass) 
    {
       
       return axios.post(USER_API_BASE_URL+'/login',UserEmailPass) 
       //"http://localhost:8080/user/login?email=sujitksagar93@gmail.com&pass=sujit
    }   
   
}

export default new UserService()