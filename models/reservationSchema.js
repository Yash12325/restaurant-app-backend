import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        minLength: [3,"atleast 3 character"],
        maxLength: [30,"max 30 character"],
    },
    lastName: {
        type: String,
        required:true,
        minLength: [3,"atleast 3 character"],
        maxLength: [30,"max 30 character"],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email!"],
    },
    phone:  {
        type: String,
        required:true,
        minLength: [9,"Phone must contain 9 digits!"],
        maxLength: [9,"Phone must contain 9 digits!"],
    },
    time: {
        type:String,
        required:true
    },
    date :{
        type:String,
        required:true
    },
});

// export default reservationSchema;
export const Reservation = mongoose.model("Reservation",reservationSchema);