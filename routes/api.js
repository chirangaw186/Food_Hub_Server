const express= require('express');
const router = express.Router();

const Shop = require('../controllers/nikanFile');

router.post('/nikan',Shop.view);