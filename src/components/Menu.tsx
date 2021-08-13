// dependency imports
import React, { Fragment, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// menu list
const menus:Array<{label: string, href: string}>    = [
    {label : 'Dashboard', href: '/'},
    {label : 'Users', href: '/user'},
];


// Menu component
const Menu = () => {
    const location = useLocation(); 

    useEffect(() => {
        console.log(location.pathname)
    }, [location.pathname]);

    return (
        <Fragment>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        {menus.map(m => (
                            <li key={m.label} className="nav-item">
                                <Link className={`nav-link ${location.pathname === m.href ? 'active': undefined}`} aria-current="page" to={m.href}>
                                    <span data-feather="home"/>
                                    <span>{m.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Menu
