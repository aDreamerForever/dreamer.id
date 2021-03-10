/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx, keyframes } from "@emotion/react";

import Header from "../Header/Header";

import LandingPage from "./components/LandingPage";
import NavMobile from "../NavigationMenu/NavMobile";
import DreamerPage from "./components/DreamerPage";

const Home = (props) => {
    let [runFadeOutTransition, setFadeOutTransition] = useState(false);
    let [isMenuOpen, setMenuOpen] = useState(false);

    const active = "home";
    const breakpoints = [320, 425, 768, 1024, 1440];

    const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
    const mx = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    let globalCss = {
        fontFamily: "Montserrat",
        userSelect: "none",
    };

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
        <div
            css={css`
                ${globalCss}
            `}
        >
            {isMenuOpen ? (
                <NavMobile
                    fadeIn={fadeIn}
                    fadeOut={fadeOut}
                    menuHandler={menuHandler}
                    isMenuOpen={isMenuOpen}
                    runFadeOutTransition={runFadeOutTransition}
                    active={active}
                />
            ) : (
                ""
            )}

            <Header
                active={active}
                menuHandler={menuHandler}
                isMenuOpen={isMenuOpen}
            />
            <LandingPage
                mq={mq}
                fadeIn={fadeIn}
                css={css`
                    marginbottom: 100px;
                `}
            />

            {/* <DreamerPage mx={mx} isMenuOpen={isMenuOpen} /> */}
        </div>
    );
};

export default Home;
