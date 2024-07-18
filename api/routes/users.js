import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//UPDATE USER
router.put("/:id", verifyToken, update);

//DELETE USER
router.delete("/:id", verifyToken, deleteUser);

//GET A USER
router.get("/find/:id", getUser);

//SUBSCRIBE A USER
router.put("/sub/:id", subscribe);

//UNSUBSCRIBE A USER
router.put("/unsub/:id", unsubscribe);

//LIKE A VIDEO
router.put("/like/:videoId", like);

//UNLIKE A VIDEO
router.put("/dislike/:videoId", dislike);

export default router;
