import React, { Component } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
export class First extends Component {
    
     constructor(props) {
      super(props);
 
      this.state = {
        all:[],
        persons: [],
        

        list: [],
        perPage: 10,
        page: 0,
        toggle:0,
     
        pages: 0,
        i: 0,
        items:[],
      };
  }
 









  componentDidMount() {
    this.makeHttpRequest();
  }
 
  makeHttpRequest = async() => {
    let res = await axios.post(`http://localhost:5000/admin/SHOW`,{ headers:{'content-Type': 'application/json'},}).catch(err => console.log(err));
 
    const {perPage} = this.state;
    const persons = res.data;
  var a=  persons.sort()
 console.log(a);
   
   this.state.count =persons.length;
   if(persons.length % perPage==0)
   {
    this.setState({
        persons,
        pages: Math.floor(persons.length / perPage)
      });
   }
   else{
    this.setState({
        persons,
        pages: Math.floor(persons.length / perPage)+1
      });
   }


   
  };
 
  handlePageClick = (event) => {
    let page = event.selected;
    this.setState({page})
    // alert(page)
  }


  handledelete = (_id) => {


    this.setState({
      Load: true,

    });
    var sendId = {
      _id: _id,
  
    }
    try {
      axios.post(`http://localhost:5000/admin/Delete`, sendId, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          //alert(res.data);
          console.log(res.status);
          console.log(res.data);

          if (res.data.msg == 'success') {

            console.log("success");

            swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover this imaginary  file!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {

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
              } else {
                swal("Your imaginary file is safe!");
              }
            });



            // window.location.reload();


          } else {

            console.log("failure");

          }

          this.setState({
            Load: false,

          });

        })
    } catch (error) {

      console.log(error)
      this.setState({
        Load: false,
      });
      console.log("internal server error");
    }
  }

  handleMore=(email)=>
  {
   
alert("call");
var sendId = {
  email: kharemani22,

}

 var a="kharemani22@gmail.com"
 const  res =axios.get(`http://localhost:5000/admin/sendsingleemailtocust `,sendId).catch(err => console.log(err));
 
 
    // const items = res.data;
console.log(res)
// this.setState({
//   items
// });


  }


handleADDEmployee  = () =>{

      
  window.location = "/AddEmployee/"; 
  

// alert(_id);
     }
     
  
  

  render() {
    const {page, perPage, pages, persons} = this.state;
    this.state.items = persons.slice(page * perPage, (page + 1) * perPage);
  
   
    return (
      <div>
 <div class="alert alert-success" role="alert">
<center><h1>  Employees List </h1></center>


</div>
<div  style={{position: 'absolute', right: 5}}><button type="button" class="btn btn-primary" onClick={() => { this.handleADDEmployee() } }> AddEmployee</button></div>

<div><br></br></div>
<div><br></br></div>
<div><br></br></div>
  <div className="mb-3"class="col-sm-12" >
<table class="table">
  <thead class="thead-dark" >
    <tr>
      <th scope="col" >#</th>
      <th scope="col" > Name </th>
      <th scope="col" > Email </th>
      <th scope="col"  > Mobile </th>
      <th scope="col"  >  Description </th>
      <th scope="col" >  Date </th>
  
      <th scope="col">  Send Mail </th>
   
      <th scope="col"  >  Action[Edit]</th>
      <th scope="col"  >Action[Delete] </th>
    </tr>
  </thead>
  
  <tbody>
  {
     this.state.items
     .map((person ,i)=>


          
    <tr>
    
   
    <td>{this.state.i = this.state.i + 1}</td>
      <td>{person.name}</td>
      <td>{person.email}</td>
      <td>{person.mobile}</td>
      <td>{person.description}</td>
 
      <td>{person.Date}</td>
   
    
   
      <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${rawmateriallist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => { this.handleMore(person.email) } } className="btn btn-sm btn-primary" >Send</button>
                                  </td>

                                  <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${rawmateriallist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => { this.handleMore(person._id) } } className="btn btn-sm btn-success" > Edit</button>
                                     {/* <Link to={to}>{label}</Link> */}
                                  </td>

      <td><button type="button" onClick={() => { if (window.confirm('Do you want to see?')) { this.handledelete(person._id) } }}  className="btn btn-sm btn-danger" >Delete</button>     </td>

 
   

     
    </tr>



)}  </tbody>
</table>

</div>

<ReactPaginate

         previousLabel={'previous'}
         nextLabel={'next'}
         breakLabel={'...'}
         pageCount={pages}
    
         marginPagesDisplayed={2}
         pageRangeDisplayed={3}
         onPageChange={this.handlePageClick}

         containerClassName={'pagination justify-content-center'}
       
         pageClassName={'page-item'}
         pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
         previousClassName={'page-item'}
         nextClassName={'page-item'}
         nextLinkClassName={'page-link'}
         breakClassName={'page-item'}
         breakLinkClassName={'page-link'}
         activeClassName={'active'}
       />


 



    </div>
    )
  }
}

export default First