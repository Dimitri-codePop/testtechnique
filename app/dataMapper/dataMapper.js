const { login } = require('../controllers/maincontroller');
const client = require('../database');

module.exports = {
    async signup(firstname, lastname, email, password) {
        const result = await client.query(`INSERT INTO "member" (firstname, lastname, email, password) VALUES ($1,$2,$3,$4) RETURNING *`, [firstname, lastname, email, password]);
        return result.rows[0];
    },
    async login(email){
        const result = await client.query(`SELECT * FROM "member" WHERE email = $1`, [email]);
        return result.rows[0];
    }
}