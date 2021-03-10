/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx, keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const NavMobile = (props) => {
    const breakpoints = [320, 425, 768, 1024, 1440];
    const mqx = breakpoints.map((bp) => `@media (max-width: ${bp}px)`); //mediaquery max

    let globalCss = {
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0)",
        zIndex: 5,
        backdropFilter: "blur(8px)",
    };

    let imageCss = {
        width: "36px",
        cursor: "pointer",
        position: "absolute",
        right: 0,
        userDrag: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
        padding: "5vh",
    };

    let textCss = {
        padding: "2vh 3vh",
        margin: "2vh 4vh",
        cursor: "pointer",
        borderRadius: "8px",
        textDecoration: "none",
        color: "#263F60",
        transition: "all 0.1s ease-in",
        fontSize: "3vh",

        [mqx[3]]: {
            padding: "0.5vh 1vh",
            margin: "3vh 2vh",
            fontSize: "2vh",
        },
    };

    let hoverCss = `&:hover {
        background-color: #263F60;
        cursor: pointer;
        color: #E4EBE0;
    }`;

    let homeActiveCss = () => {
        if (props.active === "home") {
            let data = {
                fontWeight: 800,
            };
            return data;
        }
    };

    let aboutActiveCss = () => {
        if (props.active === "about") {
            let data = {
                fontWeight: 800,
            };
            return data;
        }
    };

    let contactActiveCss = () => {
        if (props.active === "contact") {
            let data = {
                fontWeight: 800,
            };
            return data;
        }
    };

    let animation = () => {
        if (props.runFadeOutTransition) {
            return css`
                ${props.fadeOut} 0.25s ease-out
            `;
        } else {
            return css`
                ${props.fadeIn} 0.25s ease-in
            `;
        }
    };

    let menuCss = {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div
            css={css`
                animation: ${animation()};
                ${globalCss}
            `}
        >
            <img
                src="/assets/icons/cross.svg"
                css={css`
                    ${imageCss}
                `}
                onClick={props.menuHandler}
                alt="cross_icon"
            />

            <div
                css={css`
                    ${menuCss}
                `}
            >
                <Link
                    to="/"
                    css={css`
                        ${textCss}
                        ${hoverCss}
                        ${homeActiveCss()}
                    `}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    css={css`
                        ${textCss}
                        ${hoverCss}
                        ${aboutActiveCss()}
                    `}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    css={css`
                        ${textCss}
                        ${hoverCss}
                        ${contactActiveCss()}
                    `}
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default NavMobile;
