import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

function AddImageForm() {
    const [label, setLabel] = useState("");
    const [url, setUrl] = useState("");

    const [showModal, setShowModal] = useState(false);

    const router = useRouter();

    function handleNewImage() {
        setShowModal(true);
    }

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
        router.reload();
    };
    return (
        <>
            <button onClick={handleNewImage}>New Image</button>

            {showModal && (
                <div
                    className="fixed grid place-content-center inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto"
                    onClick={(e) => {
                        if (e.target == e.currentTarget) {
                            setShowModal(false);
                        }
                    }}
                >
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
                </div>
            )}
        </>
    );
}

export default AddImageForm;
