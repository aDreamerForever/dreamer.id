/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx, keyframes, withTheme } from "@emotion/react";

const LandingPage = (props) => {
    let mq = props.mq;

    let homeTextCss = {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(0.75em + 6.5vh)",
        color: "#263F60",
        flexDirection: "column",
        [mq[0]]: {
            fontSize: "2.5em",
        },
        [mq[1]]: {
            fontSize: "calc(0.75em + 4.5vh)",
        },
        [mq[2]]: {
            fontSize: "calc(0.75em + 5vh)",
        },
        [mq[3]]: {
            fontSize: "calc(0.75em + 6vh)",
        },
    };

    let homeSubTextCss = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(0.1em + 1vh)",
        fontFamily: "Montserrat",
        color: "#263F60",
        flexDirection: "column",
        [mq[0]]: {
            fontSize: "0.45em",
        },
        [mq[1]]: {
            fontSize: "calc(0.25em + 0.5vh)",
        },
        [mq[2]]: {
            fontSize: "calc(0.25em + 0.75vh)",
        },
        [mq[3]]: {
            fontSize: "calc(0.25em + 1vh)",
        },
    };

    return (
        <div
            css={css`
                animation: ${props.fadeIn} 0.25s ease-in;
                ${homeTextCss}
            `}
        >
            Dreamer.id
            <div
                css={css`
                    ${homeSubTextCss}
                `}
            >
                By Alvin Tanoto
            </div>
        </div>
    );
};

export default LandingPage;
