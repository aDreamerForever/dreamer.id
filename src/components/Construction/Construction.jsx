import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./construction.css";

const Construction = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>Dreamer.id</p>

                <img
                    src="/under_construction.svg"
                    className="construction_image"
                />

                <p>
                    This site is under construction, please come back later :)
                </p>
                <Link to="/"> or click this link to go back </Link>
            </header>

            <footer className="App-footer">
                <p className="footer-text">Alvin Tanoto 2021</p>
                <a
                    href="https://id.linkedin.com/in/alvin-tanoto-662537152"
                    target="_blank"
                >
                    <img
                        className="footer-image"
                        src="/linkedin.png"
                        width="20px"
                    />
                </a>

                <a href="https://www.instagram.com/alvint2497/" target="_blank">
                    <img
                        className="footer-image"
                        src="/instagram.png"
                        width="20px"
                    />
                </a>
            </footer>
        </div>
    );
};

export default Construction;
