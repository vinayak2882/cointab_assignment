const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema(
    {
      email: {type: String, required: false },
      password: {type: Number,required: true },
     
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  const UserData=mongoose.model("user", UserSchema)
  module.exports=UserData