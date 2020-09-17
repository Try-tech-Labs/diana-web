import React from 'react';

import './index.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
    return (
        <div class="input-group mb-3 seach-bar">
            <input type="text" class="form-control" placeholder="O que você quer saber hoje?" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary btn-light" type="button">
                <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}


export default SearchBar;