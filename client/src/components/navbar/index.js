import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './Navbarelements';
import { styled, Typography, IconButton } from '@mui/material';

const Rightbuttons = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
})

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBtn>
            <NavBtnLink style={{backgroundColor: "transparent"}} to='/signin'>info</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLink style={{backgroundColor: "transparent"}} to='/'>AVVEN STUDIOS</NavBtnLink>
        </NavBtn>
        <Rightbuttons>
            <NavBtn>
            <NavBtnLink style={{backgroundColor: "transparent"}} to='/signin'>filter</NavBtnLink>
            </NavBtn>
            <NavBtn>
            <NavBtnLink style={{backgroundColor: "transparent"}} to='/bag'>bag</NavBtnLink>
            </NavBtn>
        </Rightbuttons>
      </Nav>

    </>
  );
};

export default Navbar;