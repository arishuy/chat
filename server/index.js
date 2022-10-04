const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const { Server } = require("socket.io");
const userController = require("./controllers/userController");
const chatController = require("./controllers/chatController");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

//console.log(apiRoutes);
const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000/Message_ChatWindow",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {

  console.log(`User Connected: ${socket.id}`);
  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.chat).emit("receive_message", data);
  });

  socket.on("inChat", (chatId) => { 
    socket.join(chatId);
    console.log(`User with ID: ${socket.id} joined room: ${chatId}`);
  })

  socket.on("reloadAllMessages", (data,chatId) => { 
    socket.to(chatId).emit("reloadAllMessages", data);
  })

  socket.on("getAllChats", (data) => { 
    socket.emit("reloadAllChats", );
  })

  socket.on("send_notification", (data) => {
    console.log(data);
    socket.to(data.receiver).emit("receive_notification", data);
  });


  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});


app.all("*", (req, res, next) => {
    // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
    // err.status = "fail";
    // err.statusCode = 404;
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});



// app.use((err, req, res, next) => {
// //   err.statusCode = err.statusCode || 500;
// //   err.status = err.status || "error";
// //   res.status(err.statusCode).json({ status: err.status, message: err.message });
// });

app.use(globalErrorHandler);







