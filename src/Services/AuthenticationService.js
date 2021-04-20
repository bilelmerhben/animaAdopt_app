import axios from "axios";


class AuthenticationService {
  signin = (username, password) => {
      return axios.post("http://localhost:8687/api/auth/signin", {username, password})
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

  register = async(name, username, email, password) => {
    return await axios.post("http://localhost:8687/api/auth/signup", {
      name,
      username,
      email,
      password
    });
  }
  demande = async(nom, prenom, address,numeroTelephone,animal) => {
    return await axios.post("http://localhost:8687/api/test/demande", {
      nom,
      prenom,
      address,
      numeroTelephone,
      animal
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthenticationService();