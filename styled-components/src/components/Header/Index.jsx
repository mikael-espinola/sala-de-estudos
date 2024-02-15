import React from "react";

import * as s from "./style";

function Header() {
  return (
    <s.Container>
      <s.Title>Hello World</s.Title>
      <s.Nav>
        <ul>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </s.Nav>
    </s.Container>
  );
}

export default Header;
