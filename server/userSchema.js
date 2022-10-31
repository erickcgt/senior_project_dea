const mongoose = require("mongoose")

const userDBSchema = new mongoose.Schema(
    {
        fname:String,
        lname:String,
        email:{type:String, unique:true},
        password:String
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", userDBSchema);