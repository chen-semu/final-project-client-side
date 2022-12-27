
const basicAPI='https://final-project-server-side.onrender.com'

const fetchProducts= async ()=>{
  return await fetch(`${basicAPI}/products`)
  .then(res=>res.json())
  .catch((error)=>{console.log(error);})
}