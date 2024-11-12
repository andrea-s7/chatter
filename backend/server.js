const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const {notFound, errorHandler} = require("./midware/errorMiddleware");

connectDB();
const app = express();

app.use(express.json());    //TO ACCEPT JSON DATA

app.get('/', (req, res) => {
    res.send("API is running ayyy"); 
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

//error handing
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server successfully started on PORT ${PORT}`.yellow.bold);
});

