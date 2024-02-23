import {useState} from "react";
import "../../styles/views/SearchField.css"

function SearchField({ searchRef, onKeyDown}) {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

    searchRef.current = searchValue;

    return (
        <input className={"search-field"} placeholder={"Search character"} value={searchValue}
               onChange={handleSearchInput} onKeyDown={onKeyDown}/>
    );
}

export default SearchField;