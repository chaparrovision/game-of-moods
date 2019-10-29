import * as React from 'react';
import { Link} from 'react-router-dom';


import SmileyFace from './smileyFace60.png';
import SadFace from './sadFace60.png';
export interface INavProps {}
export function Nav(props: INavProps){
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand" id="brand-style">
                <img src={SmileyFace} width="10%" />
                &nbsp; Game of Moods &nbsp; 
                <img src={SadFace} width="10%"/>
            </div>
            <div className="navbar-right">
                <div className="dropdown menu-btn">
                    {/*<button className="dropbtn btn menu-height" id="burger-btn"></button> */}
                    <div className="dropdown-content" id="dropdown-contentA">
                        <Link className="btn btn-block dropcontent" id="nav-game-btn" to="/game">
                            Game
                        </Link>
                        <Link className="btn btn-block dropcontent" id="nav-add-btn" to="/add">
                            Add Content
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}