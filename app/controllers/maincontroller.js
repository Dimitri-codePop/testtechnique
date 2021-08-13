const bcrypt = require('bcrypt');
const dataMapper = require('../dataMapper/dataMapper');

module.exports = {
    homePage: (_, res) =>{
        res.render('index')
    },
    showAddMe: (_, res) => {
        res.render('signup', {data: {}});
    },
    async signup(req, res){
        try {
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const email = req.body.email;
            const password = req.body.password;
            
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt);

            const user = await dataMapper.signup(firstname, lastname, email, encryptedPassword);

            return res.render('signup', {data: user})
              
        } catch (error) {
            console.log(error);
            console.trace(error);
        }
    },

    showLog: (_, res) => {
        res.render('login', {data: {}});
    }, 
    async login(req, res){
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await dataMapper.login(email);

            if(!user){
                return res.status(400).render('login',{error : 'This resource doesn"t exists.'});
            }

            const validPwd = await bcrypt.compare(password, user.password);

            if (!validPwd) {
                return res.status(400).render('login',{
                    error: "Ce n'est pas le bon mot de passe."
                });
            }
            if(validPwd){

                res.status(200).render('login',{
                   data: user
            });
        }

            
        } catch (error) {
            console.trace(error)
        }
    }
}