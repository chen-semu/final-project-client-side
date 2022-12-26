
const basicAPI='http://localhost:8080'

const fetchOrders= async ()=>{
  return await fetch(`${basicAPI}/orders`)
  .then(res=>res.json())
  .catch((error)=>{console.log(error);})
}