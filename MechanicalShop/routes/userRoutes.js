const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);
router.get('/', userController.loginPage);
router.post('/check', userController.checkLogin);
router.post('/add', userController.register);
router.get('/logout', userController.logout);
router.get('/profile/:id', userController.user);
router.get('/setting/:id', userController.userSetting);
router.post('/upload/:id', userController.updateUserById);
router.get('/detail-order/:id', userController.getOrderUserById);



//router.get('/profile', userController.profile);









module.exports = router;
