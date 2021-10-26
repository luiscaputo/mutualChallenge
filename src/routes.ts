import { Router } from "express";

const routes = Router();

routes.get('/', (request, response) => {
    response.json({
        success: true,
        title: "Mutual Challenge for BackEnd",
        message: "Testando na Mutual",
        version: "1.0.0"
    });
});

export default routes;