import React from 'react';

import './index.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideMenu() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="btn btn-light">
                    <FontAwesomeIcon icon={faBars} />
                </button>

            </div>
        </nav>
    )
}


export default SideMenu;