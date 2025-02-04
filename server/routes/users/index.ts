import { Router } from "express";

import getUsers from "./getUsers";
import createUser from "./createUser";
import updateUser from "./updateUser";
import deleteUser from "./deleteUser";

const router = Router();

router.use(getUsers);
router.use(createUser);
router.use(updateUser);
router.use(deleteUser);

export default router;
