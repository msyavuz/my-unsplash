import Cell from "./Cell";

type image = {
    id: number;
    url: string;
    label: string;
};

type GridProps = {
    images: image[];
};

function Grid(props: GridProps) {
    return (
        <div className="columns-2 md:columns-3 lg:columns-4">
            {props.images.map((image) => {
                return (
                    <Cell
                        key={crypto.randomUUID()}
                        id={image.id}
                        label={image.label}
                        url={image.url}
                    />
                );
            })}
        </div>
    );
}

export default Grid;
