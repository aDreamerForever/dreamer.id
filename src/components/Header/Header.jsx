/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx, keyframes, withTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import HeaderMobile from "./HeaderMobile";
import HeaderWeb from "./HeaderWeb";

const Header = (props) => {
    let active = props.active;

    const isMobile = useMediaQuery({ query: "(max-device-width: 768px)" });
    return (
        <div>
            {!isMobile ? (
                <HeaderWeb active={active} />
            ) : (
                <HeaderMobile
                    active={active}
                    menuHandler={props.menuHandler}
                    isMenuOpen={props.isMenuOpen}
                />
            )}
        </div>
    );
};

export default Header;
