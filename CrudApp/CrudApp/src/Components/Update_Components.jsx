import axios from "axios"
import "./Style.css"
import { useState } from "react"
const Udate_Form=({data,onClose,onUpdated})=>{
  const [uname,setUname]=useState(data.name)
    const [uemail,setUemail]=useState(data.email)
    const [uphone,setUphone]=useState(data.phone)
  const handleUpdate = () => {
      axios.put(`https://693e3dbef55f1be79304a1d4.mockapi.io/user/${data.id}`, {
          name: uname,
          email: uemail,
          phone: uphone
      }).then(() => {
          onClose(); 
        onUpdated();// close the form
      });
  };

    return(<>
      <div className="update-overlay">
      <div className="Upadte_form">
         <h1>Update Form</h1>
         <img onClick={onClose}
          src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" 
          alt="close icon" 
          width="20" 
          height="20"
        />
        <input type='text' placeholder="name" value={uname} onChange={(e)=>setUname(e.target.value)}/>
        <input type='email' placeholder="email"  value={uemail}  onChange={(e)=>setUemail(e.target.value)}/>
        <input type='text' placeholder="phone" value={uphone}  onChange={(e)=>setUphone(e.target.value)}/>
        <button onClick={handleUpdate
        }>Update Item</button>
      </div>
        </div>
    </>)
}
export default Udate_Form