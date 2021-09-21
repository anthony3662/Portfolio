import React, {useState} from 'react';
import styled from 'styled-components'
import tw from 'twin.macro';
import GameCenter from '../../pages/GameCenter';
import {Link}from "react-router-dom";

const StandardNavContainer = styled.nav`
  background: rgb(108,181,255);
  background: linear-gradient(90deg, rgba(108,181,255,1) 0%, rgba(0,127,255,1) 50%, rgba(108,181,255,1) 100%);
  ${tw`
    flex
    justify-end

    h-28
    lg:h-32
    items-center
    w-screen
  `}

`;

const ListItem = styled.div`
  ${tw`
    flex
    justify-evenly
    items-center
    p-5
  `}
  border-left: solid 2px;
  border-image: linear-gradient(180deg, rgb(0,127,255), rgb(0,0,0), rgb(0,127,255)) 1;
  * {
    ${tw`
      mx-2
    `}
  }
  &:hover {
    border: solid 2px white;
    border-right: none;
    border-bottom: none;
    border-top: none;
  }
  &:hover img{
    transform: scale(1.1);
  }
`;

const HomeButton = styled(ListItem)`
  border: none;
  &:hover {
    border: none;
  }
`;

export default function StandardNav(props) {
  return (
    <>
      <StandardNavContainer>
        <Link to="/" className="absolute left-0">
          <HomeButton>
            <img className="w-12 h-12 lg:w-14 lg:h-14" src="https://img.icons8.com/bubbles/50/000000/about-me-male.png"/>
            <figcaption className="text-white tracking-wider text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">ANTHONY</figcaption>
          </HomeButton>
        </Link>
        <Link to="/fullstack">
          <ListItem>
            <img className="w-12 h-12 lg:w-14 lg:h-14" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-code-coding-kiranshastry-lineal-color-kiranshastry.png"/>
            <div className="text-white lg:text-lg xl:text-xl 2xl:text-2xl">My Work</div>
          </ListItem>
        </Link>
        <Link to="/gamecenter">
          <ListItem>
            <img className="w-12 h-12 lg:w-14 lg:h-14" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-game-coding-kiranshastry-lineal-color-kiranshastry.png"/>
            <div className="text-white lg:text-lg xl:text-xl 2xl:text-2xl">Games</div>
          </ListItem>
        </Link>
        <Link to="/education">
          <ListItem>
            <img className="w-12 h-12 lg:w-14 lg:h-14" src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-education-high-school-flatarticons-blue-flatarticons.png"/>
            <div className="text-white lg:text-lg xl:text-xl 2xl:text-2xl">Education</div>
          </ListItem>
        </Link>
      </StandardNavContainer>
    </>
  );
};