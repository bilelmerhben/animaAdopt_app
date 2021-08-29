import axios from "axios";
import http from "../http-common";

class AuthenticationService {
  signin = (username, password) => {
    return axios.post("http://localhost:8687/api/auth/signin", { username, password })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  signOut() {
    localStorage.removeItem("user");
  }

  register = async (name, username, email, password) => {
    return await axios.post("http://localhost:8687/api/auth/signup", {
      name,
      username,
      email,
      password
    });
  }
  demande = async (nom, prenom, address, numeroTelephone, animal) => {
    return await axios.post("http://localhost:8687/api/test/demande", {
      nom,
      prenom,
      address,
      numeroTelephone,
      animal
    });
  }
 

  createAnimal = async ( data) => {

    return await http.post("/api/test/animal",data);
  }

  createAssociation  = async ( data) => {

    return await http.post("/api/test/association",data);
  }

getAnimals = async ()=>{
return await http.get("/api/test/getAnimals")
}
getAssociations = async ()=>{
  return await http.get("/api/test/getAssociations")
  }

getAnimalsWithAgeAndCategory = async (category,age)=>{
  return await axios.get(`http://localhost:8687/api/test/getAnimalsWithAgeAndCategory/${category}/${age}`)
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthenticationService();