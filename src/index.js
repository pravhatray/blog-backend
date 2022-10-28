const express = require("express")
const cors = require("cors");
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const Connect = require("./config/db");
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors(corsOptions));
require('dotenv').config();
app.use(express.json())
const userRouter = require("./user/user.router")
const postRouter = require("./post/post.router")
const commentRouter = require("./comment/comment.router")



app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.get("/", (req, res) => {
    res.send("Welcome to apna blog")
})


app.listen(PORT, async () => {
    await Connect()
    console.log(`Server is running on port ${PORT}`)
})
