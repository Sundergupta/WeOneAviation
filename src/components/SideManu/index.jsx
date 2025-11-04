import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import "./style.css";

const SideMenu = ({ data, children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="menu-layout">
            {/* Left Sidebar */}
            <div className="left-menu">
                {data.map((item, i) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={i}
                            className={`menu-item ${isActive ? "active" : ""}`}
                            onClick={() => navigate(item.path)}
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>

            {/* Right Content Area */}
            {/* <div className="content-box">
                {children}
            </div> */}
        </div>
    );
};

export default SideMenu;
