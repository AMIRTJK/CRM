import { Router } from "express";

const router = Router();

router.post("/users", (req, res) => {
  res.json({ message: "Пользователь создан" });
});

export default router;
