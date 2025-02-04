import { Router } from "express";

const router = Router();

router.delete("/users/:id", (req, res) => {
  res.json({
    message: `Пользователь по идентификатору ${req.params.id} удален`,
  });
});

export default router;
