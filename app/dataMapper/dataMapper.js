const { login, getComment, postCommentary } = require('../controllers/maincontroller');
const client = require('../database');

module.exports = {
    async signup(firstname, lastname, email, password) {
        const result = await client.query(`INSERT INTO "member" (firstname, lastname, email, password) VALUES ($1,$2,$3,$4) RETURNING *`, [firstname, lastname, email, password]);
        return result.rows[0];
    },
    async login(email){
        const result = await client.query(`SELECT * FROM "member" WHERE email = $1`, [email]);
        return result.rows[0];
    },
    async getComment(gitusername){
        const result = await client.query(`SELECT * FROM "comments" WHERE gitusername = $1`, [gitusername])
        console.log(result.rows);
        return result.rows;
    },
    async postCommentary(label, gitusername, reposname){
        console.log(label, gitusername, reposname);
        const result = await client.query(`INSERT INTO "comments" ("label", "gitusername", "reposname") VALUES ($1, $2, $3) RETURNING *`, [label, gitusername, reposname]);
        return result.rows[0];
    }
    
}