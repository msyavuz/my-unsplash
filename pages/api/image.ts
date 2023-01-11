import { PrismaClient, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type image = Prisma.ImageGetPayload<{}>;

async function getAllImages() {
    const images = await prisma.image.findMany();
    return images;
}

async function deleteImage(id: number) {
    await prisma.image.delete({ where: { id: id } });
}

async function newImage(image: { data: image }) {
    await prisma.image.create(image);
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "GET") {
        const images = await getAllImages();
        return res.status(200).json({ imgs: images });
    } else if (req.method == "DELETE") {
        await deleteImage(+req.body);
        return res.status(200).end();
    } else if (req.method == "POST") {
        await newImage({ data: req.body });
        return res.status(200).end();
    }
}
