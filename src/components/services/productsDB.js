
const basicAPI='http://localhost:8080'

const fetchProducts= async ()=>{
  return await fetch(`${basicAPI}/products`)
  .then(res=>res.json())
  .catch((error)=>{console.log(error);})
}