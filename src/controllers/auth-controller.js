

const home=async(req,res)=>{
    try{
            res.status(200).send("welcome to home")
    }
    catch(error){
        console.log(error);
        
    }
}
const register=async(req,res)=>{
    try{
       console.log(res.body);
        
        res.status(200).send({msg:req.body})
        console.log("registration successful");
        
    }
    catch(error){
        res.send({meg:"Page not found"}).status(404)
        console.log(error);
        
    }
}

module.exports={home,register}