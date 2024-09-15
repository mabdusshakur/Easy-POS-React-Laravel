import React, { useState, useEffect } from 'react';

import { Inertia } from "@inertiajs/inertia";
import { useAuth } from "../../AuthContext";

function NavBar() {
    const { logout } = useAuth();
    const [userName, setUserName] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            showLoader();
            await userDetails();
            hideLoader();
        };
        fetchData();
    }, []);

    async function userDetails() {
        showLoader();
        let res = await axios.get("/api/user/profile");
        hideLoader();
        if (res.data['success'] === true) {
            res = res.data[0];
            setUserName(res['firstName'] + ' ' + res['lastName']);
        } else {
        }
    }

    function logoutRequest() {
        axios.post("/api/auth/logout").then(response => {
            if (response.status === 200) {
                logout();
                Inertia.visit('/');
            }
        }).catch(error => {
        });
    }

    return (<>
        <nav className="navbar fixed-top bg-white px-0 shadow-sm">
            <div className="container-fluid">

                <Link className="navbar-brand" href="#">
                    Easy POS
                </Link>

                <div className="d-flex float-right h-auto">
                    <div className="user-dropdown">
                        <img className="icon-nav-img" src="/images/user.webp" alt="" />
                        <div className="user-dropdown-content">
                            <div className="mt-4 text-center">
                                <img className="icon-nav-img" src="/images/user.webp" alt="" />

                                <h6>{userName}</h6>

                                <hr className="user-dropdown-divider p-0" />
                            </div>
                            <Link className="side-bar-item" href="/profile">
                                <span className="side-bar-item-caption">Profile</span>
                            </Link>
                            <Link className="side-bar-item" onClick={logoutRequest}>
                                <span className="side-bar-item-caption">Logout</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>);
}

export default NavBar;