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
        <div className="mx-16 my-16 columns-2 md:columns-3 lg:columns-4 shadow p-2 rounded">
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
