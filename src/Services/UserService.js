import axios from 'axios';
const User_Rest_API_Url ="http://localhost:8686/setUser";
class UserService{

createUser(user){
   return axios.post(User_Rest_API_Url,user);
}
    
}
export default new UserService();