type GridProps = {
    imageURLS: string[];
};

function Grid(props: GridProps) {
    return (
        <div className="columns-2 md:columns-3 lg:columns-4">
            {props.imageURLS.map((image) => {
                return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        className="mb-4"
                        alt={image}
                        key={crypto.randomUUID()}
                        src={image}
                    ></img>
                );
            })}
        </div>
    );
}

export default Grid;
