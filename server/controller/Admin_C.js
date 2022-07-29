

const admin_info = require("../model/Admin_model");
// const item_info = require("../model/item_model");




exports.Insert =  async function(req,res){
    const Employees = new admin_info(req.body)
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


exports.SHOW = function(req, res) {
  
    admin_info.find((error, data) => {
        if (error) {
          res.json({admin_info:error})
        } else {
          res.json(data)
        }
      }).sort({_id:-1})
    };
  




    exports.Delete = function(req,res){
        const { _id } = req.body;
        
        
        admin_info.deleteOne({_id: _id}).then(
          () => {
            res.status(200).json({
              msg: 'success'
            });
          }
        ).catch(
          (error) => {
            res.status(200).json({
              msg: 'failure'
            });
          }
        );
        
        
        }

        exports.getoneid = function(req,res){

            const {_id} = req.body;
            console.log(_id);
          
            async function   getData(params) {
              var  pData = await admin_info.findOne({ _id: _id });
          
              if(pData){
                res.send([pData]);
              }else{
                res.send("not found");
          
              }}
            getData();
          };



          exports.update=  function(req,res)
          {
        
      
      
      
          var _id = req.body._id;
      var con_info = {
      
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        description:req.body.description,
        Date:req.body.Date,
        
      };
      
      admin_info.findByIdAndUpdate(_id, con_info , { new: true }, function(
        err,
        con_info 
      ) {
        if (err) {
          console.log("err", err);
          res.status(200).send({msg:'error'});
        } else {
          console.log("success");
          res.send({msg: con_info });
        }
      });
          }
        


