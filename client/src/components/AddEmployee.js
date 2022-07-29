import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
export class AddEmployee extends Component {


    state = {
        name: '',
        email:'',
        mobile:'',
        Date:'',     
        Load:false,
        progress:'',
   
        description:''
     

      }
   

      nameinput = event => {
        this.setState({ name: event.target.value});

      }
      emailinput = event => {
        this.setState({email: event.target.value});

      }
      mobileinput = event => {
        this.setState({ mobile: event.target.value});

      }
      dateinput = event => {
        this.setState({ Date: event.target.value});

      }
   
      Descriptioninput = event => {
        this.setState({ description: event.target.value});

      }
      handleSubmit = event => {
        
        event.preventDefault();
    
        const user = {
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
          Date: this.state.Date,
          description: this.state.description,
       
        };
    
   
          try{
            //alert(jsonauthdata);
              axios.post(`http://localhost:5000/admin/Insert`,  user, {
                headers:{'Content-Type': 'application/json','Accept': 'application/json',"Access-Control-Allow-Origin" :"*"}
            
                
              })
              
    
              .then(res => {
                //alert(res.data);
                console.log(res.status);
                console.log(res.data);
      
                console.log("success");
                swal({
                  title: "Good job",
                  text: " successfully inserted !",
                  icon: "success",
                  buttons: [
                    'NO',
                    'YES'
                  ],
                }).then(function(isConfirm) {
                  if (isConfirm) {
                 window.location.reload();
                  } else {
                    //if no clicked => do something else
                  }
                });
              
                if(res.data.msg=='success'){
               
      
              
                  // window.location.reload();
        
      
                }else{
                 
                 
                  console.log("failure");
                 
                }
      
                this.setState({
                  Load :false,
                  // cname:'',
                  // email:'',
                  // mobile:'',
                  // address:''
                  });
              
              // console.log(res);
              // console.log(res.data);
            })
          }  catch(error) {
     
            console.log(error)
            this.setState({
              Load :false,
              });

            console.log("internal server error");
          }
    
    
      }
  render() {
    return (
   <div>
       <center>
     
       <form onSubmit={this.handleSubmit} >
         <center>
     <div class="alert alert-success" role="alert">
<h1>   Employees Form </h1>
</div>
</center>
  <div className="container">
    <label htmlFor="uname"><b>Name</b></label>
    <input type="text" placeholder=" Enter Input" onChange={this.nameinput} name="Request" required />

    <label htmlFor="uname"><b> Email</b></label>
    <input type="text" placeholder=" Enter Input" onChange={this.emailinput} name="Request" required />

    <label ><b> Mobile</b></label>
    <input type="text" name="Phone Number" pattern="[6-9]{1}[0-9]{9}" placeholder=" Enter Input" onChange={this.mobileinput}
       title="Phone number with 6-9 and remaing 9 digit with 0-9"required/>
    
    {/* <input type="text" id="phone" name="phone" placeholder=" Enter Mobile no" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/> */}
    <div><br></br></div>

  
    


    <label htmlFor="uname"><b> Date</b></label>
    <input type="date" placeholder=" Enter Input" onChange={this.dateinput} name="Request" required />
    <div><br></br></div>
    <label htmlFor="uname"><b>  Description </b></label>
    <textarea rows="3" type="text" className="form-control" name="description" placeholder=" Enter Input" required autoComplete='off' onChange={this.Descriptioninput} ></textarea>
    <div><br></br></div>
    <button type="submit"> Insert</button>

  </div>
 
</form>

</center>
</div>

    )
  }
}

export default AddEmployee