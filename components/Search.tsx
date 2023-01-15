import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function Search() {
    const { search, setSearch } = useContext(GlobalContext);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    return (
        <div className="flex justify-center items-center gap-2">
            <input
                name="search"
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="&#x1F50E;&#xFE0E; Search"
                className="rounded font-roboto font-semibold focus:border-slate-800 border-slate-400 shadow px-2 py-1 w-96"
            />
        </div>
    );
}

export default Search;
