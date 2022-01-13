import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js';
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json({limit: '50mb'}));

app.use("/api/v1/users", userRouter)     //router for users
// app.use("/api/v1/courses",courseRoter)  //router for courses
// app.use("/api/v1/events",eventRoter)    //router for events
// app.use("/api/v1/rules",ruleRouter)     //router for rules


//connection to MongoDB
const CONNECTION_URL = 'mongodb+srv://admin:gloftrax123456@cluster0.re7ll.mongodb.net/Blog?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=>{
        console.log(`Server is listening on port: ${PORT}`)
    }))
    .catch((error)=>{console.log(error.message)})