import { Elysia } from "elysia";
import fileRoutes from "./routes/fileRoutes";

const app = new Elysia();

app.use(fileRoutes);

app.listen(3000, () => {
    console.log("App running at http://localhost:3000");
});
