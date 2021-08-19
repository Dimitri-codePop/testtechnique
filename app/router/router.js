const express = require('express');
const router = express.Router();

const mainController = require('../controllers/maincontroller')



/* Mise  en place de la route d'inscription */
router.route('/signup')
    .post(mainController.signup);


/* Route connexion */
router.post('/login', mainController.login);


/* Route des commentaires */

router.route('/commentary/:name')
    .get(mainController.getComment);

router.route('/comment/:name/:repo')
    .post(mainController.postCommentary);

module.exports = router;