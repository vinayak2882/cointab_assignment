const mongoose=require("mongoose")

module.exports=()=>{
    return mongoose.connect(
      "mongodb+srv://Vinayak2882:VIna2882@cluster0.mcpnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ).then(()=>{
        console.log("Database connected successuly");
        }).catch((err)=>{
            console.log(err);
       })
  };
