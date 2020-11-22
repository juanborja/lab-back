import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

if (!process.env.DB_USER || !process.env.DB_NAME || !process.env.DB_PASS || !process.env.DB_HOST) {
  console.log('Missing db configuration');
  process.exit(1);
}

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
  logging: process.env.ENV !== 'production',
});

export default db;
