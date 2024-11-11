import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";
import ChatGroupController from "../controllers/ChatGroupController.js";
import ChatGroupUserController from "../controllers/ChatGroupUserController.js";
import ChatsController from "../controllers/ChatsController.js";

const router = Router();

router.post("/auth/login",AuthController.login);

router.post("/chat-group",authMiddleware,ChatGroupController.store);
router.get("/chat-group",authMiddleware,ChatGroupController.get);
router.get("/chat-group/:id",ChatGroupController.show);
router.put("/chat-group/:id",authMiddleware,ChatGroupController.update);
router.delete("/chat-group/:id",authMiddleware,ChatGroupController.destroy);

//chat group users
router.get("/chat-group-users",ChatGroupUserController.index);
router.post("/chat-group-users",ChatGroupUserController.store);

//chats
router.get("/chats/:groupId", ChatsController.index);

export default router;