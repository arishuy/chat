const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const dotenv = require("dotenv");

const { Server } = require('socket.io')
const connectDB = require('./config/db')


app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();


const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})