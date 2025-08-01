import pg from 'pg';

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
});

export const handler = async (event) => {
    try {
        const client = await pool.connect();

        const email = event.email;
        const password = event.password;

        await client.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;");

        const result = await client.query(`SELECT * FROM app_user
                                        WHERE email = $1
                                        AND password = crypt($2, password);`, [email, password]);

        client.release();
        if (result.rows.length > 0) {
            console.log("Match found, user authenticated!");
            return {
                status: 200,
                body: JSON.stringify({
                    message: "Successful authentication"
                })
            }
        } else {
            return {
                status: 401,
                body: JSON.stringify({
                    message: "Unsuccessful authentication"
                })
            }
        }

    } catch (err) {
        return {
            status: 500,
            body: JSON.stringify({
                message: "Unable to fulfill request",
                error: err.message
            })
        }
    }
}