import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient().post;

// get all posts
export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await prisma.findMany();
        res.json(posts).status(200);
    } catch (error) {
        throw error;
    }
};
// get post by id
export const getPostById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const post = await prisma.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        res.json(post).status(200);
    } catch (error) {
        throw error;
    }
};

// create new post
export const createPost = async (req: Request, res: Response) => {
    const { title, content, published, authorId } = req.body;
    try {
        const post = await prisma.create({
            data: {
                title,
                content,
                published,
                authorId,
            },
        });

        res.json(post).status(201);
    } catch (error) {
        throw error;
    }
};

// update post by id
export const updatePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { title, content, published, authorId } = req.body;
    try {
        const post = await prisma.update({
            where: {
                id: parseInt(id),
            },
            data: {
                title,
                content,
                published,
                authorId,
            },
        });

        res.json(post).status(200);
    } catch (error) {
        throw error;
    }
};

// delete post by id
export const deletePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const post = await prisma.delete({
            where: {
                id: parseInt(id),
            },
        });

        res.json(post).status(200);
    } catch (error) {
        throw error;
    }
}

// export post controller
export default {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}