import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

function AddImageForm() {
    const [label, setLabel] = useState("");
    const [url, setUrl] = useState("");
    const router = useRouter();

    const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLabel(e.target.value);
    };
    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUrl(e.target.value);
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await axios.post("/api/image", { label: label, url: url });
        router.push("/");
    };
    return (
        <form
            action="/api/image"
            method="POST"
            onSubmit={handleSubmit}
            className="font-roboto"
        >
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
    );
}

export default AddImageForm;
