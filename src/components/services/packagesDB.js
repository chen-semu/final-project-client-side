
const basicAPI='http://localhost:8080'

const fetchPackages= async ()=>{
  return await fetch(`${basicAPI}/packages`)
  .then(res=>res.json())
  .catch((error)=>{console.log(error);})
}