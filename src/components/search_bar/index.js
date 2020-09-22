import React from 'react';

import './index.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
    return (
        <div className="col col-sm-9 col-md-9">
            <div class="input-group seach-bar">
                <input type="text" class="form-control" placeholder="What do you want to know today?" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary btn-light" type="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default SearchBar;