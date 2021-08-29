import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8687",
   headers: {
    'Accept': 'application/json, text/plain, */*',
    //"Content-Type": "application/json; charset=UTF-8"
 // "Content-Type": "application/json"
   'Content-Type': 'multipart/form-data'
   //'Content-Type': 'application/x-www-form-urlencoded'
  } 
 // { headers: { "Content-Type": "application/json; charset=UTF-8" }
});