import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sequelize } from './config/db';
import telefonoRoutes from './routes/telefonoRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/telefonos', telefonoRoutes);

sequelize.sync().then(() => {
  console.log('Conectado a la base de datos');
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
