'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();
const Image = require('../models/imageInfo');
firestore.settings({ timestampsInSnapshots: true });


const addImageInfo = async(req, res) => {
    try {
        const data = req.body;
        await firestore.collection('imagesUrls').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getImageInfo = async(req, res, next) => {
    try {
        const id = req.params.id;
        const allImages = await firestore.collection('imagesUrls').doc(id);
        const data = await allImages.get();
        if (!data.exists) {
            res.status(404).send('Student with the given ID not found');
        } else {
            res.send(data.data().name);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllImageInfo = async(req, res, next) => {
    try {
        const imageInfo = await firestore.collection('imagesUrls');
        const data = await imageInfo.get();
        const imagesArray = [];
        if (data.empty) {
            res.status(404).send('No record found');
        } else {
            data.docs.forEach(doc => {
                console.log(doc.data().id);
                const imageInfo = new Image(
                    doc.data()
                );
                imagesArray.push(imageInfo);
            });
            res.send(JSON.stringify(imagesArray));
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addImageInfo,
    getAllImageInfo,
    getImageInfo
}