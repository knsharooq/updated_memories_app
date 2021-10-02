import express from 'express';
import { createPost, getPosts } from '../controllers/posts.js';

const postRouter = express.Router();

postRouter.get('/', getPosts);
postRouter.post('/', createPost);

export default postRouter;