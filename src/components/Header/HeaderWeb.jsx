/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx, keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const HeaderWeb = (props) => {
    const breakpoints = [320, 425, 768, 1024];
    const mqx = breakpoints.map((bp) => `@media (max-width: ${bp}px)`); //mediaquery max
    const mqn = breakpoints.map((bp) => `@media (min-width: ${bp}px)`); //mediaquery min

    let globalCss = {
        position: "fixed",
        padding: "5vh",
        zIndex: 1,
        right: 0,
        color: "#263F60",
        textDecoration: "none",
        [mqx[0]]: {
            display: "none",
        },
        [mqx[1]]: {
            display: "none",
        },
        [mqn[2]]: {
            display: "block",
            padding: "5vh",
        },
        [mqn[3]]: {
            padding: "5vh",
        },
    };

    let textCss = {
        padding: "1vh 3vh",
        margin: "2vh 4vh",
        cursor: "pointer",
        borderRadius: "8px",
        textDecoration: "none",
        color: "#263F60",
        transition: "all 0.1s ease-in",
        [mqx[3]]: {
            padding: "0.5vh 1vh",
            margin: "1vh 2vh",
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

    return (
        <div
            css={css`
                ${globalCss}
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
            |
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
            |
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
    );
};

export default HeaderWeb;
