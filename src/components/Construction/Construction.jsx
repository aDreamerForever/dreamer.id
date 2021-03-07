/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx, keyframes } from "@emotion/react";

import Header from "../Header/Header";
import NavMobile from "../NavigationMenu/NavMobile";
import { Link } from "react-router-dom";

import "./construction.css";

const Construction = (props) => {
    let [runFadeOutTransition, setFadeOutTransition] = useState(false);
    let [isMenuOpen, setMenuOpen] = useState(false);

    let fadeIn = keyframes`
        from, 0%, to {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }`;

    let fadeOut = keyframes`
    from, 0%, to {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }`;

    let menuHandler = () => {
        if (isMenuOpen) {
            setFadeOutTransition(true);
            setTimeout(() => {
                setFadeOutTransition(false);
                setMenuOpen(false);
            }, 100);
        } else {
            setMenuOpen(true);
        }
    };

    return (
        <div className="App">
            {isMenuOpen ? (
                <NavMobile
                    fadeIn={fadeIn}
                    fadeOut={fadeOut}
                    menuHandler={menuHandler}
                    isMenuOpen={isMenuOpen}
                    runFadeOutTransition={runFadeOutTransition}
                    active={props.active}
                />
            ) : (
                ""
            )}

            <Header
                active={props.active}
                menuHandler={menuHandler}
                isMenuOpen={isMenuOpen}
            />

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
