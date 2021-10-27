import { Router } from "express";
import accountRoutes from "./routes/account.routes";

const routes = Router();
// Base Routes
routes.get('/', (request, response) => {
    response.json({
        success: true,
        title: "Mutual Challenge for BackEnd",
        message: "Testando na Mutual",
        version: "1.0.0"
    });
});

// All Routes
routes.use(accountRoutes);

// Exporting routes
export default routes;