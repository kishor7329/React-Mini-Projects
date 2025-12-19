import axios from "axios"
import { useEffect, useState } from "react"
import './Style.css'

const View_Data=({onEdit,refresh,onDelete})=>{
    const [data,setData]=useState([])
function getData(){
    axios.get("https://693e3dbef55f1be79304a1d4.mockapi.io/user").then((res)=>{
      setData(res.data)
    })
}
  useEffect(()=>{
    getData()
  },[refresh])
    return(<>
      <h1>View Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td><button onClick={()=>onEdit(item)} >Edit</button></td>
                <td><button onClick={() => onDelete(item.id)}>Delete</button></td>
              </tr>
            ))
          }
        
        </tbody>
          
      
      </table>
    </>)
}
export default View_Data