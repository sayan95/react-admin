import React, { Fragment } from 'react'

interface Menus{
    menu: string
}


const Menu = () => {
    return (
        <Fragment>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <span data-feather="home" />
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file" />
                            Orders
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="shopping-cart" />
                            Products
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="users" />
                            Customers
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="bar-chart-2" />
                            Reports
                        </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="layers" />
                                Integrations
                            </a>
                        </li>
                    </ul>
                
                </div>
            </nav>
        </Fragment>
    )
}

export default Menu
