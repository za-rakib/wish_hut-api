const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
     fullName:{
      type:String,
      required:true
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img:{
      type:String
    }
  },
  { timestamps: true }
);

// UserSchema.set("toJSON", {
//   virtuals: true,
// });
module.exports = mongoose.model("User", UserSchema);
