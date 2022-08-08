import 'dotenv/config'
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import users from "./routes/users.js"
import connectDB from "./config/dbConn.js";

const app = express();
const PORT = process.env.PORT || 3500;

// connect to db
connectDB();

app.use(cors());
app.use('/api/users', users);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})