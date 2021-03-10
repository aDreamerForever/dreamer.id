/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx, keyframes, withTheme } from "@emotion/react";
import TypeWriter from "./TypeWriter";

const DreamerPage = (props) => {
    let mx = props.mx;

    let text1 = `a person who lives in a world of fantasy;\n one who is impractical and unrealistic.`;
    let text2 = `a person who visions their ambition\n and aim for the desired results.`;

    let globalCss = {
        height: "100vh",
        position: "relative",
        color: "#263F60",
        backgroundImage:
            "linear-gradient(to bottom,#FFFFFF 20%,  #E4EBE0 60%,#75B7D0 100%)",
    };

    let imageCss = {
        height: "50%",
        width: "50%",
        display: "flex",
        position: "absolute",
        userDrag: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
        bottom: 0,
        [mx[2]]: {
            marginLeft: "5vh",
        },
    };

    let textCss = {
        left: "45%",
        position: "absolute",
        top: "30%",
        fontSize: "1.15em",
        whiteSpace: "pre-line",
        [mx[4]]: {
            left: "45%",
            top: "35%",
        },
        [mx[3]]: {
            left: "45%",
            top: "35%",
            fontSize: "1em",
        },
        [mx[2]]: {
            left: "5%",
            fontSize: "1em",
            top: "15%",
            marginLeft: "5vh",
            paddingRight: "3vh",
        },
    };

    let titleText = {
        fontSize: "1.5em",
        fontWeight: 700,
    };

    return (
        <div
            css={css`
                ${globalCss}
            `}
            ref={props.forwardedRef}
        >
            <img
                css={css`
                    ${imageCss}
                `}
                src="assets/icons/counting_star.svg"
                alt="counting_star"
            />

            <span
                css={css`
                    ${textCss}
                `}
            >
                <span
                    css={css`
                        ${titleText}
                    `}
                >
                    Dreamer
                </span>
                <p>/ˈdriːmər/</p>
                (n) <br />
                <TypeWriter
                    text1={text1}
                    text2={text2}
                    enterCount={props.enterCount}
                    inViewPort={props.inViewport}
                    isMenuOpen={props.isMenuOpen}
                />
            </span>
        </div>
    );
};

export default DreamerPage;
