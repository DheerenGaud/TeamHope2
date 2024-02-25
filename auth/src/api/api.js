import axios from "axios"
const BACKEND_URL="http://localhost:9000"

export const singin= async(data)=>{
  console.log(data)
  try{
      
      return await axios.post(`${BACKEND_URL}/auth/login/user`,data)
  }
  catch(err){
        console.log("error in finding user for login by api")
  }
}
export const singinHospital= async(data)=>{
  console.log(data)
  try{
      
      return await axios.post(`${BACKEND_URL}/auth/login/hospital`,data)
  }
  catch(err){
        console.log("error in finding user for login by api")
  }
}
export const singinDoctor= async(data)=>{
  console.log(data)
  try{
      
      return await axios.post(`${BACKEND_URL}/auth/login/doctor`,data)
  }
  catch(err){
        console.log("error in finding user for login by api")
  }
}
export const singinMediclaimCompany= async(data)=>{
  console.log(data)
  try{
      
      return await axios.post(`${BACKEND_URL}/auth/login/MediclaimCompany`,data)
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
export const AddDr= async({data,token})=>{
  console.log(token);
  const formData = new FormData();

  // Append the fields to the FormData
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('specialization', data.specialization);
  formData.append('experience', data.experience);

  // Append the file(s) to the FormData
  if (data.certificate_array) {
    for (let i = 0; i < data.certificate_array.length; i++) {
      formData.append('certificate_array', data.certificate_array[i]);
    }
  }
  // Make the Axios POST request with the FormData
  return await axios.post(`${BACKEND_URL}/hospital/addDr`, formData, {
    headers: {
      'Authorization': `${token}`
    }
  });
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
export const getHospitalInfo= async({token})=>{
  console.log(token);
  try{
      return await axios.get(`${BACKEND_URL}/hospital/getHospitalInfo`,{headers:{
        'Authorization': `${token}`
      }})
  }
  catch(err){
        console.log("error in finding userData for login by api")
  }
}