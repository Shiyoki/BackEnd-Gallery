import express from 'express';
//Import the function of controller
import { getPosts, createPost, updatePost, deletePost, getPostId } from '../controllers/posts.js'

//create variable router
const router = express.Router();

//create function get
router.get('/', getPosts);
//create function post
router.post('/', createPost);
//create update function
router.put('/:id', updatePost);
//create delete function
router.delete('/:id', deletePost);
//create get with id
router.get('/:id', getPostId)

export default router;