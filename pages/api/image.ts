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

async function newImage(url: string, label: string) {
    await prisma.image.create({
        data: {
            url: url,
            label: label,
        },
    });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == "GET") {
        const images = await getAllImages();
        return res.status(200).json({ imgs: images });
    } else if (req.method == "DELETE") {
        console.log(req.body, typeof req.body);
        await deleteImage(+req.body.id);
        return res.status(200).end();
    } else if (req.method == "POST") {
        await newImage(req.body.url, req.body.label);
        return res.status(200).end();
    }
}
