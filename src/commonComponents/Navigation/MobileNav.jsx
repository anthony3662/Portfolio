import React, {useState} from 'react';
import styled from 'styled-components'
import tw from 'twin.macro';
import GameCenter from '../../pages/GameCenter';

import {Link}from "react-router-dom";

const MobileNavContainer = styled.nav`
  position: fixed;
  z-index: 10;
  background: rgb(0,212,255);
  background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(124,233,255,1) 50%, rgba(197,245,255,1) 100%);
  animation-duration: 0.4s;
  animation-name: slidein;
  #7575d7
  #00d4ff
  animation-timing-function: ease-in-out;
    ${tw`
      h-screen
      w-3/5
      sm:w-2/5
      shadow-xl
    `}
`;
const MobileNavWrapper = styled.ul`
  ${tw`
    flex
    flex-col

    pl-2
    h-1/2
  `}
  justify-content: space-around;
  li {
    ${tw`
      text-2xl
      sm:text-3xl
    `}
  }
`;

const ListItem = styled.li`
  ${tw`
    flex
    items-center
  `}
  img {
    ${tw`
      mx-3
      w-10
      h-10
      sm:w-14
      sm:h-14
    `}
  }
`;

const TopBar = styled.div`
  ${tw`
    fixed
    flex
    items-center
    justify-between
    w-screen
  `}
  top: 0;
  background: rgba(0,127,255,1);
  background: linear-gradient(90deg, rgba(0,127,255,1) 0%, rgba(108,181,255,1) 50%, rgba(0,127,255,1) 100%);
  z-index: 5;
`;
export default function MobileNav(props) {
  const [open, setOpen] = useState(false);

  // if (!open) {
  //   return (

  //   );
  // }
  return (
    <>
      <TopBar>
        <svg onClick={open ? () => {} : () => setOpen(open => !open)} className={`w-10 h-10 sm:w-14 sm:h-14 mx-5 my-7 ${open ? "invisible" : ""}`} fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="96px" height="96px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
        <h1 className="font-sans mr-6 text-3xl sm:text-4xl tracking-wider text-white">ANTHONY</h1>
      </TopBar>
      { open &&
      <MobileNavContainer>
        <MobileNavWrapper>
            <>
                <svg onClick={() => setOpen(open => !open)} className="w-10 h-10 sm:w-14 sm:h-14 m-3" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="96px" height="96px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
                  <li>
                    <Link to="/" onClick={() => setOpen(false)}>
                      <ListItem>
                        <img src="https://img.icons8.com/bubbles/50/000000/about-me-male.png"/>
                        <figcaption>Home</figcaption>
                      </ListItem>
                    </Link>
                  </li>
                  <li>
                    <Link to="/fullstack" onClick={() => setOpen(false)}>
                      <ListItem>
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-code-coding-kiranshastry-lineal-color-kiranshastry.png"/>
                        <figcaption>My Work</figcaption>
                      </ListItem>
                    </Link>
                  </li>
                  <li>
                    <Link to="/gamecenter" onClick={() => setOpen(false)}>
                      <ListItem>
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-game-coding-kiranshastry-lineal-color-kiranshastry.png"/>
                        <figcaption>Games</figcaption>
                      </ListItem>
                    </Link>
                  </li>
                  <li>
                    <Link to="/education" onClick={() => setOpen(false)}>
                      <ListItem>
                        <img src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-education-high-school-flatarticons-blue-flatarticons.png"/>
                        <figcaption>Education</figcaption>
                      </ListItem>
                    </Link>
                  </li>


              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}

            </>
        </MobileNavWrapper>
      </MobileNavContainer>}
    </>
  );
};