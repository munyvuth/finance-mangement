import pg from 'pg';
import { parseParams } from './authUser.mjs';

const { Pool } = pg;

const pool = new Pool({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false  // For RDS with self-signed certs
  }
})


export const handler = async (event) => {
  // TODO implement

  try {
    const client = await pool.connect();
    const requestBody = parseParams(event);

    const firstName = requestBody.firstName;
    const lastName = requestBody.lastName;
    const email = requestBody.email;
    const password = requestBody.password;

    await client.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;");

    await client.query(`
      INSERT INTO app_user 
      (first_name, last_name, email, password)
      VALUES ($1, $2, $3, crypt($4, gen_salt('bf')));
      `, [firstName, lastName, email, password])

    client.release();
    return {
      statusCode: 200,
      body: JSON.stringify(`User ${firstName} ${lastName} created successfully`),
    };
  } catch (err) {
    console.error("Database connection error:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Unsuccessful connection',
        error: err
      }),
    };
  }

};
