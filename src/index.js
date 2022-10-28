const express = require("express")
const cors = require("cors");
const Connect = require("./config/db");
require('dotenv').config();
// const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors({credentials:true}))
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


app.listen(8080, async () => {
    await Connect()
    console.log(`Server is running on port ${PORT}`)
})
