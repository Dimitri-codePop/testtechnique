const bcrypt = require('bcrypt');
const dataMapper = require('../dataMapper/dataMapper');

module.exports = {
    async signup(req, res){
        try {
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const email = req.body.email;
            const password = req.body.password;
            
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt);

            const user = await dataMapper.signup(firstname, lastname, email, encryptedPassword);

            return res.json()
              
        } catch (error) {
            console.log(error);
            console.trace(error);
        }
    },
    async login(req, res){
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await dataMapper.login(email);

            if(!user){
                return res.status(400).json('login',{error : 'This resource doesn"t exists.'});
            }

            const validPwd = await bcrypt.compare(password, user.password);

            if (!validPwd) {
                return res.status(400).json();
            }
            if(validPwd){

                res.status(200).json();
        }

            
        } catch (error) {
            console.trace(error)
        }
    }
}