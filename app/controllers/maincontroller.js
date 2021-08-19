const bcrypt = require('bcrypt');
const dataMapper = require('../dataMapper/dataMapper');

module.exports = {
    async signup(req, res){
        try {
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const email = req.body.email;
            const password = req.body.password;

            if(password !== req.body.confirmPassword) {
                return res.json({
                  error: "La confirmation du mot de passe ne correspond pas."
                });
              }
            
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt);

            const user = await dataMapper.signup(firstname, lastname, email, encryptedPassword);

            return res.json({   
                id: user.id,
                lastname: user.lastname,
                firstname: user.firstname,
                email: user.email})
              
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
                return res.status(400).json({msg: "Ce n'est pas le bon mot de passe !! Veuillez recommencer !!"});
            }
            if(validPwd){

                res.status(200).json({id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email});
        }

            
        } catch (error) {
            console.trace(error)
        }
    },
    async getComment(req, res) {
        try {
            const gitusername = req.params.name;

            const comments = await dataMapper.getComment(gitusername);

            if(!comments) {
                res.status(200).json([])
            }

            res.status(200).json(comments);
            
        } catch (error) {
            console.trace(error);
        }
    },
    async postCommentary(req, res){
        try {
            const gitusername = req.params.name;
            const reposname = req.params.repo;
            const label = req.body.comments;

            const postCommentary = await dataMapper.postCommentary(label, gitusername, reposname);

            res.status(200).json({postCommentary});
            
        } catch (error) {
            console.trace(error)
        }
    }
}