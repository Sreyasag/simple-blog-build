const express = require("express");
const blogsController = require('../controllers/blogsController');

const router = express.Router();

router.post('/', blogsController.create);
router.delete('/:id', blogsController.delete);
router.get('/', blogsController.getAllBlogs);
router.get('/:id', blogsController.getOne);




module.exports = router;