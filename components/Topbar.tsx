import AddImageForm from "./AddImageForm";
import Search from "./Search";

function Topbar() {
    return (
        <div className="flex justify-between mt-8 mx-16">
            <Search />
            <AddImageForm />
        </div>
    );
}

export default Topbar;
