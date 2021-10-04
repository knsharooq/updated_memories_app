import express from 'express';
import { createPost, deletePost, getPost, getPosts, likePost, updatePost } from '../controllers/posts.js';

const postRouter = express.Router();

postRouter.get('/', getPosts);
postRouter.get('/:id', getPost);
postRouter.post('/', createPost);
postRouter.patch('/:id', updatePost);
postRouter.delete('/:id', deletePost);
postRouter.patch('/:id/likePost', likePost);

export default postRouter;