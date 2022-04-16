var mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1"); 

// usermodel
var userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
        },
        lastname: {
            type: String,
            maxlength: 32,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        userinfo: {
            type: String,
            trim: true
        },
        encry_password: {
            type: String,
            required: true
        },
        salt: String,
        role: {
            type: Number,
            default: 0
        },
        purchases: {
            type: Array,
            default: []
        },
    },
    { timestamps: true }

);
/* mongodb virtual method used to set and get Encrypted password */
userSchema.virtual("password")
    .set(function(password){
        this._password = password; //private password variable
        this.salt = uuidv1(); //secret key used to hash password
        this.encry_password = this.securePassword(password) //fn returns encrypted password
    })
    .get(function(){
        return this._password //TODO
    })

/* mongodb method used to Encrypt password using crypto and uuid */
userSchema.method = {
    securePassword(plainpassword){
        if(!password) return "";
        try {
            return crypto.createHmac("sha256", this.salt)
                .update(plainpassword)
                .digest("hex")
        } catch (err) {
            return "";
        }
    }
}
    
module.exports = mongoose.model("User", userSchema);