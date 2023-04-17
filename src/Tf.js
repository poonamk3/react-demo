import React, { useState } from "react";

function Tf() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        mo: "",
    })
    const [allData, setAllData] = useState([])
    const [show, setShow] = useState(false)
    const [editIndex, setEditIndex] = useState()

    const handleAdd = (e) => {
        e.preventDefault()

        setAllData(newData => [...newData, userData])
        setUserData({
            name:"",
            email:"",
            mo:""
        })
    }
    let changeData = (e) => {

        setUserData((userData) => ({
            ...userData,
            [e.target.name]: e.target.value,

            
        }));

        console.log(e.target.id)
    }

   

    const handleDelete=(index)=>{
        allData.splice(index,1)
        setAllData([...allData])
    }

    const handleEdit=(i)=>{
        setUserData(allData[i])
        setShow(true)
        setEditIndex(i)
    }
    const handleUpdate=(e)=>{
        e.preventDefault()
        allData.splice(editIndex,1,userData)
        setAllData([...allData])
        setShow(false)
        setUserData({
            name:"",
            email:"",
            mo:""
        })
    }
 
    return (
        <>
        <form autoComplete="off"  className='form-group'
        >
            <label>Name</label>
            <input type="text" name='name' onChange={changeData} value={userData.name} className='form-control' required></input>

            <br></br>
            <label>Email</label>
            <input type="text" name='email' onChange={changeData} value={userData.email} className='form-control' required></input>
            <br></br>
            <label>Mobile</label>
            <input type="text" name='mo' onChange={changeData} value={userData.mo} className='form-control' required></input>
            <br></br>
            {!show?<button onClick={handleAdd}>Add</button>:
            <button onClick={handleUpdate}>Update</button>}

        </form>
        <div className='table-responsive'>
        <table className='table'>
          <tbody>

            <tr>
              <th>Name</th>
              <th> email</th>
              <th>Mobile</th>
            </tr>
            {
              allData.map((data, indx) =>
                <tr key={indx}
                >
                   
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.mo}</td>
                  <td><button className="edit" onClick={()=>handleEdit(indx)} >Edit</button>
                    <button className="delete" onClick={()=>handleDelete(indx)}>Delete</button></td>
              
                </tr>
                
              )
            
             
            }
          
          </tbody>
        </table>
      </div>
        </>
    );
}
export default Tf; 