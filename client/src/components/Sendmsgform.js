import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
export class Sendmsgform extends Component {


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
      // mobileinput = event => {
      //   this.setState({ mobile: event.target.value});

      // }
      dateinput = event => {
        this.setState({ Date: event.target.value});

      }
   
      Descriptioninput = event => {
        this.setState({ description: event.target.value});

      }



      handleSubmit = event =>  {



        event.preventDefault();
    
    
    
    
    
     let url = window.location.href; //window.location.href originally instead of this
    
    
    let object = new URL(url);
    
    
    let path = object.pathname
    
    
    // console.log(path) 
    //
    let email = path.split('=').pop()
    
    
      // var email = this.state.email;
    
      // alert(sha1(pass));
    

    
      
    
        // alert(this.state.confirmPassword);
    
    
     
    
          event.preventDefault();
        
          const user = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            Date: this.state.Date,
            description: this.state.description,
         
          };
      
         console.log(user);
    
      
     try{
      event.preventDefault();
        axios.post("http://localhost:5000/admin/sendinsert", user, {
          headers:{'Content-Type': 'application/json','Accept': 'application/json'}
        
        })
          .then(res => {
              
              console.log(res.status);
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
              // console.log(res.data.token);
              console.log(res.data.error)
         
            
    
            
            if(res.data.error==="unauthorized"){
              // window.location = "/Delivery/forgotPassword/token="+sessionStorage.getItem('token');
             alert("Invalid link");
             window.location.reload(true);
            } else if(res.data.error==="success"){
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
          //  this.setState({mgs:"Reset Successful"})
              window.location.reload(true);
            }else if(res.data.error==="failiure"){
              alert("Failed");
              window.location.reload(true);
    
            }
           
    
         
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

    {/* <label ><b> Mobile</b></label>
    <input type="text" name="Phone Number" pattern="[7-9]{1}[0-9]{9}" placeholder=" Enter Input" onChange={this.mobileinput}
       title="Phone number with 7-9 and remaing 9 digit with 0-9"required/>
    

    <div><br></br></div> */}

  
    


    <label htmlFor="uname"><b> Date</b></label>
    <input type="date" placeholder=" Enter Input" onChange={this.dateinput} name="Request" required />
    <div><br></br></div>
    <label htmlFor="uname"><b>  Description </b></label>
    {/* <input type="text" placeholder=" Enter Input" onChange={this.Descriptioninput} name="Request" required /> */}
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

export default Sendmsgform