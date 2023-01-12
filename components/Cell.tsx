import { useState } from "react";

type cellProps = {
    id: number;
    url: string;
    label: string;
};

function Cell(props: cellProps) {
    const [open, setOpen] = useState(false);

    return (
        <div
            key={crypto.randomUUID()}
            onMouseOver={() => {
                setOpen(true);
            }}
            onMouseLeave={() => {
                setOpen(false);
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="mb-4"
                alt={props.url}
                key={crypto.randomUUID()}
                src={props.url}
            ></img>
            {open && (
                <div>
                    <button>Delete</button>
                    <p>{props.label}</p>
                </div>
            )}
        </div>
    );
}

export default Cell;
