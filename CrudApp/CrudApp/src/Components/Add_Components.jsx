import { useState,useEffect } from "react"
import './Style.css'
import axios from "axios"
import View_Data from "./View_Components"
import Update_Form from "./Update_Components"
const Add_Form=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [update,setUpdate]=useState(null)
    const [showView, setShowView] = useState(false);
   const [refresh,setRefresh]=useState(false)
    const[img,setImg]=useState(false)
    const onHandelSubmit=()=>{
        axios.post("https://693e3dbef55f1be79304a1d4.mockapi.io/user",{name:name,email:email,phone:phone}).then(()=>{    
            setImg(true);
            setName('');
            setEmail('');
            setPhone('');
        });
         
    }
    const tapView=()=>{
         setShowView(true)
    }
    const handleDelete = (id) => {
        axios.delete(`https://693e3dbef55f1be79304a1d4.mockapi.io/user/${id}`)
        .then(() => {
            setRefresh(prev => !prev);   // reload table
        });
    };

    
        
  return(<>
  
   
      <div className=" add_farm">
        <h1 >Add Data</h1>
        <input type='text' placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type='email' placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
        <input type='text' placeholder="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <button onClick={onHandelSubmit} >Add Item</button>
     

          {img?<div className="view_show">
              <button onClick={tapView}>View Form</button>
          </div>:null
          }
         {img ? <div className="img_src"> <img  src="https://cdn-icons-png.flaticon.com/512/3388/3388563.png" alt="correction icon" />   </div> : null}
          
    
      </div>
      { showView?<div className="View_data"> <View_Data onDelete={handleDelete} refresh={refresh} onEdit={(item)=>setUpdate(item)} />  </div>:null
      }
      {
          update?<Update_Form data={update}  onUpdated={()=>setRefresh(prev=>!prev)}  onClose={()=>setUpdate(null)}/>:null
      }
    

  </>)
}

export default Add_Form