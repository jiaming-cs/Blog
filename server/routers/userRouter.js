import express from "express";
import { authUser} from "../controllers/userController.js"

const userRouter = express.Router();

//user routers for CRUD operations
userRouter.post("/auth", authUser);    //for user authentication
// userRouter.get("/", getUserList);      //get user list
// userRouter.post("/", addUser);         //add user
// userRouter.put("/:id", updateUser);    //update user
// userRouter.delete("/:id", deleteUser); //delete user
// userRouter.get("/:id", getUser);       //get user

export default userRouter;