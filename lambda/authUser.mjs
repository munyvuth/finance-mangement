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

        const requestBody = parseParams(event);
        const email = requestBody.email;
        const password = requestBody.password;

        await client.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;");

        const result = await client.query(`SELECT * FROM app_user
                                        WHERE email = $1
                                        AND password = crypt($2, password);`, [email, password]);

        client.release();
        if (result.rows.length > 0) {
            console.log("Match found, user authenticated!");
            const firstName = result.rows[0].first_name;
            const lastName = result.rows[0].last_name;
            const email = result.rows[0].email;
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: "Successful authentication",
                    user: {
                        firstName, lastName, email
                    }
                })
            }
        } else {
            return {
                statusCode: 401,
                body: JSON.stringify({
                    message: "Unsuccessful authentication"
                })
            }
        }

    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Unable to fulfill request",
                error: err.message
            })
        }
    }
}

export const parseParams = (event) => {
    if (typeof event.body === 'string') {
        try {
            return JSON.parse(event.body);
        } catch (err) { 
            console.error("Issue parsing request body");
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Invalid JSON format"
                })
            }
        }
    } else {
        return event.body;
    };
}