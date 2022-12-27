
const basicAPI='https://final-project-server-side.onrender.com'

const fetchOrders= async ()=>{
  return await fetch(`${basicAPI}/orders`)
  .then(res=>res.json())
  .catch((error)=>{console.log(error);})
}