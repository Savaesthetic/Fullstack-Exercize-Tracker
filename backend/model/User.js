import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
})

const User = mongoose.model('User', userSchema);
export default User;