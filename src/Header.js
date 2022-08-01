import React from "react";
import styled from "styled-components";


const HeaderStyles = styled.div`
  background-color: #df0d0d;
  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  h1 {
  color: #ebe534;
  font-family: "McLaren", cursive;
  font-weight: 200;
}
`

function Header() {
  return (
    <HeaderStyles>
      <h1>TO DO LIST</h1>
    </HeaderStyles>
  );
}

export default Header;
