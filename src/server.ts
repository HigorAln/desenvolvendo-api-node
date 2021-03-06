import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';

import swaggerFile from './swagger.json'

import "./database"

const app = express();

app.use(express.json())
// usado para que todos as rotas de categoriesRoutes comeca com / categories
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.listen(3333, () => console.log("Server is running!"))