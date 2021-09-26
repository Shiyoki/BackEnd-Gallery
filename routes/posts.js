import express from 'express';
//import config to save image
import { upload } from '../libs/storage.js';
/*import {upload} from '../libs/storage';*/
//Import the function of controller
import { getPosts, createPost, updatePost, deletePost, getPostId } from '../controllers/posts.js'

//create variable router
const router = express.Router();

//create function get
router.get('/', getPosts);
//create function post
router.post('/', upload.single('selectedFile'), createPost);
//create update function
router.put('/:id', updatePost);
//create delete function
router.delete('/:id', deletePost);
//create get with id
router.get('/:id', getPostId)

export default router;