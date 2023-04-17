import React, { Component } from 'react'

export default class Tc extends Component {
    constructor(props){

        super(props)
           this.state={
                username:"",
              
                email:"",
                Mobile:"",
                employeeData:[],
                ditIndex:"",
                show:false,
                editIndex:''
                
               
            }
        }
  
 onChange=(e)=>{
 
     this.setState({[e.target.name]:e.target.value})
    
 }
 onSubmit=(e)=>{
    e.preventDefault()
    
    console.log(this.state.username)
   
    console.log(this.state.email)
    let employeeData=this.state.employeeData;
    let username=this.state.username;
    
    let email=this.state.email;
    let Mobile=this.state.Mobile;
   let  newEmployee={
    

      'userName':username,
      
      'email':email,
      'Mobile':Mobile
       
    

  }
console.log('==',email)
employeeData.push(newEmployee)
this.setState({
  employeeData:employeeData
})

this.setState({
    username:'',
    email:"",
    Mobile:""
})

    //employeeData.push(newEmployee)
   // setAllData(newData => [...newData, userData])
    // this.setState({
    //     ...this.state,

    //   employeeData: newEmployee
    // })
 
  


   
   
   
  
  
 }
 handleDelete=(indx)=>{
    this.state.employeeData.splice(indx,1)
    this.setState({
        employeeData:this.state.employeeData
      })
      
}

handleEdit=(i,data)=>{
   
  
  console.log(data)
  var userName1=data.userName
  var email1=data.email
  var Mobile1=data.Mobile

  this.setState({
    username:userName1,
    email:email1,
    Mobile:Mobile1,
    show:true,
    editIndex:i
  })

}
 handleUpdate=(e)=>{
    var newData={
        userName:this.state.username,
        email:this.state.email,
        Mobile:this.state.Mobile
    }
    e.preventDefault()
    this.state.employeeData.splice(this.state.editIndex,1,newData)
    this.setState({
        employeeData:this.state.employeeData
      })
  
      this.setState({
        username:"",
        email:"",
        Mobile:"",
        show:false
      })
}


  render() {
    let employeeData=this.state.employeeData;
    const{username,password,error,email,usernameL2,Mobile,err}=this.state
    return (
      <>
      <h1>Rcc </h1>
      <form >
        <label>Name :</label>
        <input type="text"
        name='username'
        value={username}
        onChange={this.onChange}/>
        
        <br/>
      
        
       

       <label>SurName:</label>
        <input type="text"
        name='email'
        value={email}
        onChange={this.onChange}/>
        <br/>
     


       <label>Address:</label>
        <input type="text"
        name='Mobile'
        value={Mobile}
        onChange={this.onChange}/>
        <br/>
       
        {!this.state.show?<button onClick={this.onSubmit}>Add</button>:
            <button onClick={this.handleUpdate}>Update</button>}
     </form>
     <div className='table-responsive'>
     
     { <table className='table'>
     <tbody>
     
      <tr>
         <th>Name</th>
         <th>SurName</th>
         <th>Address</th>
      </tr>
      
         { 
         employeeData.map((data,indx)=>
             <tr key={indx}>
                 <td>{data.userName}</td>
                 <td>{data.email}</td>
                 <td>{data.Mobile}</td>
                 <td><button className="edit" onClick={()=>this.handleEdit(indx,data)} >Edit</button>
                    <button className="delete" onClick={()=>this.handleDelete(indx)}>Delete</button></td>
              
                  </tr>
              
         )
         
        
         }
      </tbody>
   </table>
  }
  </div>
      </>
    )
  }
}
