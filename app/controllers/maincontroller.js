const bcrypt = require('bcrypt');
const dataMapper = require('../dataMapper/dataMapper');

module.exports = {
    async signup(req, res){
        try {
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const email = req.body.email;
            const password = req.body.password;

            if(password !== req.body.passwordConfirm) {
                return res.json({
                  error: "La confirmation du mot de passe ne correspond pas."
                });
              }

              const salt = await bcrypt.genSalt(10);
              const encryptedPassword = await bcrypt.hash(req.body.password, salt);

              const user = await dataMapper.signup(firstname, lastname, email, encryptedPassword);

              return res.json({message: "Vous etes bien inscrit"})
              
        } catch (error) {
            console.trace(error);
        }
    },
    async login(req, res){
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await dataMapper.login(email);

            if(!user){
                return res.status(400).json({error : 'This resource doesn"t exists.'});
            }

            const validPwd = await bcrypt.compare(password, user.password);

            if (!validPwd) {
                return res.status(400).json({
                    error: "Ce n'est pas le bon mot de passe."
                });
            }
            if(validPwd){

                res.status(200).json({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            });
        }

            
        } catch (error) {
            console.trace(error)
        }
    }
}