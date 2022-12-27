
import axios from 'axios'

const basicAPI='https://final-project-server-side.onrender.com/users'

const fetchAllUsers= async ()=>{
  return await fetch(`${basicAPI}`)
  .then(res=>res.json())
  .catch((error)=>{console.log(error);})
}

const logInUser= async (LogIn)=>{
  console.log(LogIn);
  return await axios.post(`${basicAPI}/log-in`,
  {
    // method:'POST',
    // headers:{'Content-Type':'application/json'},
    // body:JSON.stringify({
    //   email: LogIn.email,
    //   password: LogIn.password,
    // }
    // )
    LogIn
  }
  )
  .then(res=>res.json())
  .catch((error)=>{console.log(error,"hhhhhhh");})
}

const signUpUser= async (register)=>{
  console.log(register, 'WORKS?');
  return await axios.post(`${basicAPI}/register`,{
    // method:'POST',
    // headers:{'Content-Type':'application/json'},
    // body:JSON.stringify({
    //   email: `${register.email}`,
    //   password: `${register.password}`,
    //   passwordRep: `${register.passwordRep}`,
    //   fullName: `${register.fullName}`
    // })
    register
  })
  .then(res=>res.json())
  .catch((error)=>{console.log(error);})
}


export {fetchAllUsers, logInUser, signUpUser} 

// fetchUser().then(res=>localStorage.setitem("token",res.token))


//  localStorage.get("token"){
//   g=true
//  }


//  localStorage.removeItem(token)