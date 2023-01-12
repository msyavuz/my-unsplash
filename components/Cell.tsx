import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

type cellProps = {
    id: number;
    url: string;
    label: string;
};

function Cell(props: cellProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    async function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        await axios.delete("/api/image", {
            data: {
                id: props.id,
            },
        });
        router.reload();
    }

    return (
        <div
            key={crypto.randomUUID()}
            onMouseOver={() => {
                setOpen(true);
            }}
            onMouseLeave={() => {
                setOpen(false);
            }}
            className="relative"
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="mb-4"
                alt={props.url}
                key={crypto.randomUUID()}
                src={props.url}
            ></img>
            {open && (
                <>
                    <p className="absolute left-2 bottom-2 text-white font-roboto font-bold">
                        {props.label}
                    </p>
                    <div className="absolute right-2 top-2">
                        <button
                            className="bg-rose-700 rounded-full border-2 border-rose-700 px-2 py-1 text-white font-roboto"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cell;
