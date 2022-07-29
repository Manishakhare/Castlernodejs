


const nodemailer = require("nodemailer");

const admin_info = require("../model/Admin_model");
const Mail_model = require("../model/Mail_model");

  exports.sendsingleemailtocust = function(req, res)
  {
    // res.send("ok")
    const schedule = require('node-schedule');

// const job = schedule.scheduleJob('* *  * * * *', function(){

  async function  check(params) 
  {

    let email ={ email: req.body.email };
    let bcc = req.body.bcc ;
    let cc =req.body.cc ;
    let name =req.body.name ;
    let mgs = req.body.mgs ;
    let subject = req.body.subject ;


    const user = await admin_info.findOne(email);


    if (!user)
    {
     res.send({ message: "Invalid Email" });

    }

    else
    {
      // res.send("yes")
      var path = "http://localhost:3000/Sendmsgform/"+user.email;
      var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,  
        service: 'Gmail',
        auth: {
          user: 'kharemani22@gmail.com',
          pass: 'gpjgibiibxglzrgi' }
          });

        var mailOptions = {
          
        from: user.email,
        to: user.email,
        subject: subject,
        text: 'Your text is here',
        html: `
                  <p>Email: ${user.email}</p>
                  <p>BCC: ${bcc}</p>
                  <p>CC: ${cc}</p>
                  <p>Name: ${user.name}</p>
                  <p>Message:${mgs}</p>
                  <p>path:${path}</p>` 
                  } 

       var status = transporter.sendMail(mailOptions, function(error)
       {

        if (error) 
        {
          console.log(error);       
        } 
        else 
        {
          res.send("success"); 
          console.log("email send")
          //  res.send({token:user.token} );        
        }
        });
     }


  }

check();
// console.log('The answer to life, the universe, and everything!');
// });
  
    
  }




  exports.sendemailtoMulcust =function(req,res)
  {

    async function   check(params) 
    {

      // let email ={ email: req.body.email };
     
    // const user = await usermodel.find({_id:myquery});
    // var mulemail=[];
    
    // for(var i =0; i<user.length-1;i++){
    //   mulemail.push(user[i].email)  

     const {email} = req.body;
     const ids =  email ;
     console.log(ids)
     let bcc = req.body.bcc ;
     let cc =req.body.cc ;
     let mgs = req.body.mgs ;
     let subject = req.body.subject ;
   
     const user = await admin_info.find({ 'email' : ids  });
      // res.send(user)

      for(var i=0;i<user.length;i++)
      {
          var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,  
            service: 'Gmail',
            auth: {
                user: 'kharemani22@gmail.com',
                pass: 'gpjgibiibxglzrgi' }
                });
              
              var mailOptions = {
                
               from: user[i].email,
               to: user[i].email,
               subject: subject,
               text: 'Your text is here',
               html: `
              
               <p>BCC: ${bcc}</p>
               <p>CC: ${cc}</p>
           
               <p>Message:${mgs}</p>`
                      
              }
              
             var status = transporter.sendMail(mailOptions, function(error)
             {
              
                if (error) 
                {
                   console.log(error);       
                } 
                else 
                {
                   res.send("success"); 
                   console.log("email send")
                  
                  //  res.send({token:user.token} );
                       
               }
              });
      }

   }

    check();

  }


  exports.forgotPassword=function(req,res){
  
    //   var _id = req.body._id;
    let name = {password:req.body.name,};
    
    let email = {email: req.body.email };
    
    let linkaccess = {link:req.body.link};
    
    
    
    
    
    
    
    async function   check(params) {
    
    
         
      const exptime = await admin_info.findOne({ email: req.body.email }).sort( { _id: -1 } );
      // console.log(exptime)
    
      const user = await admin_info.findOne({ email: req.body.email });
    
    
    
      // let resettoken= { token: crypto.randomBytes(20).toString('hex') }
      if (!user){
    
        return res.status(200).send({ message: "Invalid Link" });
    
      }
      else{
    
    
    var expires = exptime.exptime;
    
    
    var currentDate = Date(Date.now());
    
    currtime = currentDate.toString()
    
    console.log(expires)
    console.log(currtime)
    
    if(expires<=currtime)
    {
    
    
    res.send({error:"invalidtime"});
    
    
    }
    
    else{
    
      var path = "http://localhost:3000/Sendmsgform="+user.email;
    
    
    
      // console.log(path);
    
      // console.log(linkaccess.link===path)
    
      if(linkaccess.link===path){
    
    
       admin_model.findOneAndUpdate(email, pass, function(err){
      if(err){
        console.log(err);
        return;
      } else {
       console.log("success");
       res.send({error:"success"});
      //  console.log(user.token)
    
    
    
      }
    });
    
    
    }
    else{
      console.log("invalid link");
      res.send({error:"unauthorized"});
    
    }
      console.log("not expired")
    }
      
      
    
      }
    
      }
    
    
      check();
    
    
    }
    exports.sendinsert=async function(req,res)
    {
      const Employees = new Mail_model(req.body)
      try{
          await Employees.save()
          res.status(201).json({
              status: 'Success',
              data : {
                  Employees
              }
          })
      }catch(err){
          res.status(500).json({
              status: 'Failed',
              message : err
          })
      }
    }