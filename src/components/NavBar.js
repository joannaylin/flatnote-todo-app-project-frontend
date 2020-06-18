import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/user";
import styled from "styled-components";

const NavBarContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 60px;
  z-index: 5;
`;

const NavBarLink = styled(NavLink)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid lightblack;
  color: black;
  margin: 0.5em 1em;
  padding: 6px;
  text-decoration: none;
  text-align: center;
  width: 100px;
  font-size: 18px;
  display: flex;
`;

const NavBar = (props) => {
  return (
    <NavBarContainer>
      <NavBarLink to="/notes">
        FlatNote <ion-icon name="home"></ion-icon>
      </NavBarLink>
      <NavBarLink to="/notes/new">New Note</NavBarLink>
      <NavBarLink to="/" onClick={props.logoutUser}>
        Sign Out
      </NavBarLink>
    </NavBarContainer>
  );
};

export default connect(null, { logoutUser })(NavBar);
