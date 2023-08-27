import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProduct } from "../../Redux/Actions";
import "./SearchBar.css";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    }
    function handleSubmit(e){
        e.preventDefault(e);
        dispatch(getNameProduct(name))
    }

    return(
        <div className="search-container">
            <input id="search-input" type="text" placeholder="Search product" 
            onChange={e => handleInputChange(e)} />
            <button type="submit" onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )

}