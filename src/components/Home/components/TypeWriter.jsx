/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx, keyframes, withTheme } from "@emotion/react";
import useIsMounted from "ismounted";

const TypeWriter = (props) => {
    let text1 = props.text1;
    let text2 = props.text2;
    const isMounted = useIsMounted();

    let [writer, setWriter] = useState({
        text: text1,
        isDeleting: false,
        deleteSpeed: 100,
        typingSpeed: 150,
        isInit: true,
        isDone: false,
    });

    const cursor = {
        fontWeight: 100,
        color: "#263F60",
    };

    let blink = keyframes`
    from, to {
        color: transparent;
    }
    50% {
        color: black;
    }`;

    useEffect(() => {
        let deleteTextTimeout;
        let initDeleteTextTimeout;
        let initWriteTextTimeout;
        let writeTextTimeout;

        if (isMounted && !writer.isDone && !props.isMenuOpen) {
            if (writer.isDeleting) {
                if (!deleteTextTimeout) {
                    deleteTextTimeout = setTimeout(() => {
                        if (writer.text.length > 0) {
                            setWriter({
                                ...writer,
                                text: writer.text.slice(0, -1),
                            });
                        } else {
                            initWriteTextTimeout = setTimeout(() => {
                                setWriter({
                                    ...writer,
                                    isDeleting: false,
                                });
                            }, 2500);
                        }
                    }, writer.deleteSpeed);
                }
            } else {
                if (writer.isInit) {
                    if (!initDeleteTextTimeout) {
                        initDeleteTextTimeout = setTimeout(() => {
                            setWriter({
                                ...writer,
                                isDeleting: true,
                                isInit: false,
                            });
                        }, 1250);
                    }
                } else {
                    // here add text
                    if (!writeTextTimeout) {
                        writeTextTimeout = setTimeout(() => {
                            if (writer.text.length !== text2.length) {
                                let text = (writer.text +=
                                    text2[writer.text.length]);
                                setWriter({
                                    ...writer,
                                    text: text,
                                });
                            } else {
                                setWriter({
                                    ...writer,
                                    isDone: true,
                                });
                                return;
                            }
                        }, writer.typingSpeed);
                    }
                }
            }
        }
    });

    return (
        <p>
            {writer.text}
            <span
                css={css`
                    ${cursor}
                    animation: ${blink} 1.5s step-end infinite;
                `}
            >
                |
            </span>
        </p>
    );
};

export default TypeWriter;
