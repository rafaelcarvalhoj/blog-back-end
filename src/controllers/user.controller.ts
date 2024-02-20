import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient().user;

// get all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.findMany();
        res.json(users);
    } catch (error) {
        throw error;
    }
};
// get user by id
export const getUserById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const user = await prisma.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        res.json(user);
    } catch (error) {
        throw error;
    }
};

// create user
export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
        const user = await prisma.create({
            data: {
                name,
                email,
                password,
            },
        });

        res.json(user);
    } catch (error) {
        throw error;
    }
};

// update user by id
export const updateUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    try {
        const user = await prisma.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name,
                email,
                password,
            },
        });

        res.json(user);
    } catch (error) {
        throw error;
    }
};
// delete user by id
export const deleteUser = async (req: Request, res:Response) => {
    const id = req.params.id;
    try {
        const user = await prisma.delete({
            where: {
                id: parseInt(id),
            },
        });

        res.json(user);
    } catch (error) {
        throw error;
    }
};

// export user controller
export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};