import express from "express";
import mongoose from 'mongoose';
import users from "./routes/users.js"

const app = express();

const CONNECTION_URL = "mongodb+srv://test_user:erk3ojzyg8@cluster0.awsqo.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3500;
mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


app.use('/api/users', users);

app.get('/api', (req, res) => {
    res.send('Hello world from express!')
});