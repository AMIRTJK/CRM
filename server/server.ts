import express from "express";
import userRoutes from "./routes/users";

const app = express();

app.use(express.json());
app.use("/", userRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на https://localhost:${PORT} порту`);
});
