import React from "react";
import './Reciepts.css';
import Options from '../Options/Options';

function Reciepts(){
    return(
        <div className="body">
            <Options>
                <p>Search</p>
                <p>Add</p>
                <p>My</p>
                <p>Sort</p>
                <p>Filter</p>
            </Options>
            <div className="content">
                <h1>Reciepts</h1>
            </div>
        </div>
    );
}

export default Reciepts;