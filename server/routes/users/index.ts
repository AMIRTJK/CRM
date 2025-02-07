import { Router } from "express";

import getUsers from "./getUsers";
import createUser from "./createUser";
import updateUser from "./updateUser";
import deleteUser from "./deleteUser";

const router = Router();

console.log("Маршруты подключаются");

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
