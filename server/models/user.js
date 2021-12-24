import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    
    userName: String,

    passWord: String,

    email: String,

    createdDate: {
        type: Date,
        default: Date.now()
    } // no need to specify, automatically generate at api call
})

const User = mongoose.model('User', userSchema);

export default User;