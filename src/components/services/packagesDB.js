
const basicAPI='https://final-project-server-side.onrender.com'

const fetchPackages= async ()=>{
  return await fetch(`${basicAPI}/packages`)
  .then(res=>res.json())
  .catch((error)=>{console.log(error);})
}