const mongoose = required("mongoose");
const userSchema =mongoose.schema({
    username: {
        type: String,
        require: [true, "please add the user name"]
    },

    email: {
        type: String,
        require:[true, "please add the user email address"],
        unique: [true,"email adress already taken"]
    },

    password: {
        type: string,
        require: [true,"please add the user password"],
    },

   },
   {
    timestamps: true,
}
   );

   module.exports= mongoose.model("User",userSchema);