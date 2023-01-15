import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Grid from "../components/Grid";
import Topbar from "../components/Topbar";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Home() {
    const [images, setImages] = useState<image[]>();
    const { search } = useContext(GlobalContext);

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
            setImages(data.imgs);
        }
        getImages();
    }, []);

    useEffect(() => {
        console.log(search);
        async function getImagesBySearch(label: string) {
            const res = await axios.get("/api/image", {
                params: {
                    label: label,
                },
            });
            const data = await res.data;
            setImages(data.imgs);
        }
        getImagesBySearch(search);
    }, [search]);

    return (
        <>
            <Topbar />
            {images && <Grid images={images} />}
        </>
    );
}
