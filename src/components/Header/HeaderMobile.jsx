/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx, keyframes, withTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const HeaderMobile = (props) => {
    let globalCss = {
        position: "fixed",
        padding: "5vh",
        zIndex: 4,
        right: 0,
    };

    let imageCss = {
        width: "36px",
        cursor: "pointer",
        userDrag: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
    };

    return (
        <div
            css={css`
                ${globalCss}
            `}
        >
            {!props.isMenuOpen ? (
                <img
                    src="/assets/icons/menu.svg"
                    css={css`
                        ${imageCss}
                    `}
                    onClick={props.menuHandler}
                />
            ) : (
                " "
            )}
        </div>
    );
};

export default HeaderMobile;
