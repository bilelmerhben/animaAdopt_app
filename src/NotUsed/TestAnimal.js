import React ,{useState} from 'react';
import AuthenticationService from '../Services/AuthenticationService';

function TestAnimal () {
const [img,setImg] = useState("");

const upLoadImage = async (e) => {
    let file = e.target.files[0];
     let formdata = new FormData();
    formdata.append('file',file) 
    
    // const base64 = await convertBase64(file);
    console.log(file);
setImg(formdata);
console.log(formdata);


}

 /*const convertBase64= (file)=>{
  return new Promise ((resolve,reject) =>{
      const fileReader =new FileReader();
      fileReader.readAsDataURL(file);
      
      fileReader.onload = () =>{
        // fileReader.result.split(',')[1]
          resolve(fileReader.result.split(',')[1] );
      };
      fileReader.onerror = (error) =>{
          reject(error);
      };
  });
}; */
 


        return (
            <div>
                
                <label>Photo</label><br/>
               
  <input type="file"    onChange={(e) => upLoadImage(e)} />
 
  <button onClick={(e)=> {
       e.preventDefault();
       console.log(img);
            
                     AuthenticationService.upload(img).then((res)=>{
                         console.log(res.data)
                      }).catch((err)=>{console.log(err)})
                }}> click</button>
   </div>
        ); 
    }

export default TestAnimal;
