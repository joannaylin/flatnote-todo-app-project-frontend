import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomepageTitle = styled.h1`
  margin-left: 47px;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
`;

const HomepageContainer = styled.div`
  margin-top: 165px;
  width: 440px;
  height: 200px;
  background: rgba(255, 255, 255, 0.8);
  margin-left: 515px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;
const HButton = styled(Link)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0.5em 1em;
  padding: 8px 12px;
  text-decoration: none;
  text-align: center;
  width: 150px;
  :focus {
    outline: none;
  }
`;

const Homepage = (props) => {
  return (
    <div>
      <HomepageContainer>
        <HomepageTitle>Welcome to FlatNote!</HomepageTitle>
        <HButton to="/signup">Sign Up</HButton>
        <HButton to="/login">Login</HButton>
      </HomepageContainer>
    </div>
  );
};

export default Homepage;
