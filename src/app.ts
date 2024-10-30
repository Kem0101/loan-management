import express from 'express';
import dotenv from 'dotenv';
import './models/UserModel';
import './models/ClientModel';
import './models/LoanModel';
import './models/FeeModel'
import sequelize from './config/database';

const app = express();

dotenv.config();
const port = process.env.PORT;


// Middlewares
app.use(express.json());

// Routes

// Server
sequelize.sync({ force: false}).then(() => {
  console.log('database synchronized');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);  
  });
}).catch((error) => {
  console.log('Error synchronizing the database', error);
});

export default app;