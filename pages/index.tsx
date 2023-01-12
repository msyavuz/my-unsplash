import axios from "axios";
import React, { useEffect, useState } from "react";
import AddImageForm from "../components/AddImageForm";
import Grid from "../components/Grid";

export default function Home() {
    const [images, setImages] = useState<image[]>();

    type images = {
        imgs: image[];
    };

    type image = {
        id: number;
        url: string;
        label: string;
    };

    useEffect(() => {
        async function getImages() {
            const res = await axios.get("/api/image");
            const data = await res.data;
            console.log(data);
            setImages(data.imgs);
        }
        getImages();
    }, []);

    return (
        <>
            <AddImageForm />
            {images && <Grid images={images} />}
        </>
    );
}
