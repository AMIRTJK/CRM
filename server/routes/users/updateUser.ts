import { Router } from "express";

const router = Router();

router.put("/users/:id", (req, res) => {
  res.json({
    message: `Пользователь по идентификатору ${req.params.id} обновлен`,
  });
});

export default router;
