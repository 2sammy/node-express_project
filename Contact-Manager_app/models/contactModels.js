const mongoose = require("mongoose");

const contactSchema = mongoose.contactSchema(
    {   
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "User",
        },

        name: {
            type: String,
            require: [true, "Please add the contacts name"],
        },
        email :  {
            type: String,
            equire: [true, "Please add the contact email address"],
    },
    phone :  {
        type: String,
        equire: [true, "Please add the contact phone number"]
},



},
{
    timestamps: true,
}
);

module.exports =mongoose.model("Contact", contactSchema);
