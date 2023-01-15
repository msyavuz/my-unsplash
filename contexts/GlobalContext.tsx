import { useState, createContext } from "react";

type GlobalContextProps = {
    search: string;
    setSearch: (search: string) => void;
};

const GlobalContext = createContext<GlobalContextProps>({
    search: "",
    setSearch: () => {},
});

function GlobalContextProvider(props: { children: React.ReactNode }) {
    const [currentSearch, setCurrentSearch] = useState("");

    return (
        <GlobalContext.Provider
            value={{
                search: currentSearch,
                setSearch: setCurrentSearch,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalContextProvider };
