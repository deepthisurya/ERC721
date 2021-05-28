const express = require('express');

const {
    addImageInfo,
    getAllImageInfo,
    getImageInfo
} = require('../controllers/imageController');

const router = express.Router();

router.post('/image', addImageInfo);
router.get('/image', getAllImageInfo);
router.get('/image/:id', getImageInfo);

module.exports = {
    routes: router
}