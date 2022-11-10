import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";


const Search = () => {

    const {searchParam, handleOnChange, handleSubmit} = useContext(GlobalContext);
    return (
        <div>
            <input  onChange={handleOnChange} name="search" placeholder="Enter movie name" type="text"/>
            <button onClick={handleSubmit}>Submit Search</button>
        </div>
    )
};

export default Search;