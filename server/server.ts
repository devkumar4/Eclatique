// server.ts
import app from "./app";

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
