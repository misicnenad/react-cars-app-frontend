import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white
        text-xl
        mb-3
        focus:text-white
      `}
    `}
`;

const NavTag = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline;
  margin: 0;
  padding: 0;
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <NavTag>Home</NavTag>
          </NavItem>
          <NavItem menu>
            <NavTag>Cars</NavTag>
          </NavItem>
          <NavItem menu>
            <NavTag>Services</NavTag>
          </NavItem>
          <NavItem menu>
            <NavTag>Contact us</NavTag>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <NavTag>Home</NavTag>
      </NavItem>
      <NavItem>
        <NavTag>Cars</NavTag>
      </NavItem>
      <NavItem>
        <NavTag>Services</NavTag>
      </NavItem>
      <NavItem>
        <NavTag>Contact us</NavTag>
      </NavItem>
    </ListContainer>
  );
}
