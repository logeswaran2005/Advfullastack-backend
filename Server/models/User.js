import mongoose from 'mongoose';
const username = new mongoose.Schema({
    username: String,
    password: String,
})

export default mongoose.model('User', username);