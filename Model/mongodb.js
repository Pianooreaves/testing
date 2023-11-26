const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/MCO2", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log("failed to connect");
})

const logInSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    course:{
        type:String,
    },
    type:{
        type:String,
    }
})

const seatsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  seat: {
    type: String,
  },
  reservationDate: {
    type: Date,
    default: Date.now,
  },
  isAnonymous: {
    type: Boolean,
  }
  
})
  
  const Users = mongoose.model("Users", logInSchema, "user");
  const Seats = mongoose.model('Seats', seatsSchema);
  
  module.exports = {
    Users: Users,
    Seats: Seats,
  };