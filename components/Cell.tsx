import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Transition } from "@headlessui/react";

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
                className="mb-4 rounded shadow"
                alt={props.url}
                key={crypto.randomUUID()}
                src={props.url}
            ></img>

            <Transition
                appear={true}
                show={open}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="inline"
            >
                <p className="text-center absolute left-2 bottom-2 text-white font-roboto font-bold bg-black rounded px-2 py-1">
                    {props.label}
                </p>
                <div className="absolute right-2 top-2 ">
                    <button
                        className="bg-rose-700 rounded-full border-2 border-rose-700 px-2 py-1 text-white font-roboto"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </Transition>
        </div>
    );
}

export default Cell;
