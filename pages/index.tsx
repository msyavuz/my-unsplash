import React, { ChangeEvent, FormEvent, useState } from "react";
import Grid from "../components/Grid";

export default function Home() {
    const [label, setLabel] = useState("");
    const [url, setUrl] = useState("");

    const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLabel(e.target.value);
    };
    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUrl(e.target.value);
    };

    return (
        <>
            <form action="/api/image" method="POST">
                <label htmlFor="label">Label</label>
                <input
                    type="text"
                    id="label"
                    name="label"
                    value={label}
                    onChange={handleLabelChange}
                    required
                />
                <label htmlFor="url">URL</label>
                <input
                    type="text"
                    name="url"
                    id="url"
                    value={url}
                    onChange={handleUrlChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <Grid imageURLS={[]} />
        </>
    );
}
