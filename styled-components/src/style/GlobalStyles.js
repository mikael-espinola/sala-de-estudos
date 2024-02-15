import { createGlobalStyle } from "styled-components";

import React from "react";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-decoration: none;

    }
    #root {
        height: 100dvh;
    }

    ul, li {
        list-style: none;
    }

    body {
        background-color: #fff;
    }
`;
