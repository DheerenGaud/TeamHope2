import axios from "axios"
const BACKEND_URL="http://localhost:9000"

export const singin= async(data)=>{
  console.log(data)
  try{
      
      return await axios.post(`${BACKEND_URL}/auth/login-user`,data)
  }
  catch(err){
        console.log("error in finding user for login by api")
  }
}

export const newuser= async(data)=>{
  console.log(data)
  try{
      return await axios.post(`${BACKEND_URL}/auth/singUp/user`,data)
  }
  catch(err){
        console.log("error is occur in adding user by api")
  }
}
export const newhospital= async(data)=>{
  console.log(data)
  try{
      return await axios.post(`${BACKEND_URL}/auth/singUp/hospital`,data)
  }
  catch(err){
        console.log("error is occur in adding user by api")
  }
}
export const newMediclaimCompany= async(data)=>{
  console.log(data)
  try{
      return await axios.post(`${BACKEND_URL}/auth/singUp/MediclaimCompany`,data)
  }
  catch(err){
        console.log("error is occur in adding user by api")
  }
}
export const UserVarification= async(data)=>{
  let {userId,uniqueString}=data;
  console.log(userId);

  try{
      return await axios.get(`${BACKEND_URL}/auth/verify/${userId}/${uniqueString}`);
  }
  catch(err){
        console.log("error in finding user vertifivation  by api")
  }
}
export const forgetPassword= async(data)=>{
  try{
      return await axios.post(`${BACKEND_URL}/auth/forgotpassword`,data)
  }
  catch(err){
        console.log("error in finding userData for login by api")
  }
}
export const resetPassword= async(data)=>{
  try{
      return await axios.post(`${BACKEND_URL}/auth/resetPassword`,data)
  }
  catch(err){
        console.log("error in finding userData for login by api")
  }
}