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
            <button
                onClick={handleNewImage}
                className="px-2 py-2 bg-emerald-700 font-roboto text-center text-white font-bold shadow rounded hover:bg-emerald-300"
            >
                New Image
            </button>

            {showModal && (
                <div
                    className="fixed grid place-content-center inset-0 bg-slate-700 bg-opacity-50 overflow-y-auto z-10"
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
                        className="w-96 h-96 grid place-content-center gap-8 font-roboto  text-white font-bold rounded"
                    >
                        <input
                            type="text"
                            id="label"
                            name="label"
                            value={label}
                            onChange={handleLabelChange}
                            placeholder="Label"
                            className="bg-black text-white placeholder:text-white px-2 py-2 focus:outline-none w-96"
                            required
                        />
                        <input
                            type="text"
                            name="url"
                            id="url"
                            value={url}
                            onChange={handleUrlChange}
                            placeholder="Url"
                            className="bg-black text-white placeholder:text-white px-2 py-2 focus:outline-none "
                            required
                        />
                        <button
                            type="submit"
                            className="px-2 py-2 bg-emerald-700 font-roboto text-center text-white font-bold shadow rounded hover:bg-emerald-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}

export default AddImageForm;
