import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: red;
  border: 2px solid black;
  text-align: center;
  padding: 0.5em;
`;

export const Nav = styled.nav`
  padding: 0.5em;
  > ul {
    display: flex;
    flex-direction: row;
    > li {
      background-color: yellow;
      padding: 0.4em;
      margin: 0 0.4em;
      border-radius: 0.5em;
      > a {
        font-weight: bold;
        cursor: pointer;
        color: #222;
      }
      &:last-child {
        position: absolute;
        right: 0;
        background-color: green;
        margin-right: 1em;
        > a {
          color: #fff;
        }
      }
    }
  }
`;
