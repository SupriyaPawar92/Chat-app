const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), (req, res) => {
  res.send({ imagePath: `/uploads/${req.file.filename}` });
});

module.exports = router;
