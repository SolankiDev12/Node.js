const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const db = require('./db'); // Import the database connection
config = require('dotenv').config();
const userSchema = require('./models/user')
const CandidateSchema = require('./models/candidate')
const { jwtMiddlewareToken , generateToken } = require('./jwt')

const userRoutes = require('./routes/userRoutes');
const CandidateRoutes = require('./routes/CandidateRoutes');


const PORT = process.env.PORT || 3000;

app.use('/user', userRoutes);
app.use('/candidate',jwtMiddlewareToken,CandidateRoutes );


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})