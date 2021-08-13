const express = require('express');
const router = express.Router();

const mainController = require('../controllers/maincontroller')


router.get('/', mainController.homePage);

/* Mise  en place de la route d'inscription */
router.route('/signup')
    .get(mainController.showAddMe)
    .post(mainController.signup);


/* Route connexion */
router.get('/login', mainController.showLog);
router.post('/login', mainController.login);

module.exports = router;