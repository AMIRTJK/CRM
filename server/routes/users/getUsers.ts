import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  res.json({ message: "Список пользователей" });
});

export default router;
