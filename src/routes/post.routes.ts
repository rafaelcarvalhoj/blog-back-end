import { Router } from 'express';

import {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} from '../controllers/post.controller';

const postRouter = Router();

postRouter.get('/', getAllPosts);
postRouter.get('/:id', getPostById);
postRouter.post('/', createPost);
postRouter.put('/:id', updatePost);
postRouter.delete('/:id', deletePost);
postRouter.delete('/:id', deletePost);

export default postRouter;