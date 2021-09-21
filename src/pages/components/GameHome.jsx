import React from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import GameThumbnail from './GameThumbnail.jsx';
import useMedia from '../../utility/useMedia.js';
import twBreakpoints from '../../utility/twBreakpoints.js';

import tw from 'twin.macro';
import styled from 'styled-components';

const GameWrapper = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    w-full
  `}
`;

const CardContainer = styled.div`
  ${tw`
    flex
    flex-row
    flex-wrap
    w-full
    items-center
    justify-center
  `}
`;

const GameCard = styled.div`
  ${tw`
    mx-5
    my-10
    items-center
    flex
    flex-col
    sm:flex-row
    rounded-3xl
    justify-between
    hover:shadow-2xl
  `}
  width: 80%;
  max-width: 600px;
  height: 40vh;
  min-height: 300px;
  border: solid 1px black;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background-color: white;
  &:hover {
    border: solid 2px black;
  }
`;

const GameText = styled.div`
  ${tw`
    w-full
    sm:w-44
    md:w-48
    lg:w-56
    xl:w-60
    sm:h-full
    px-4
    rounded-tl-md
    rounded-tr-md
    rounded-b-3xl
    sm:rounded-3xl

  `}
  align-self: flex-start;
  background-color: rgba(0,127,255,1);
  color: white;
`;

export default function GameHome() {
  let history = useHistory();
  let match = useRouteMatch();
  const isMobile = useMedia(undefined, twBreakpoints.md - 1);
  const isCell = useMedia(undefined, twBreakpoints.sm - 1);



  return (
    <>
      <GameWrapper>
        <img className="gamesLogo" src="https://i.ibb.co/6mzNF04/Games-designstyle-games-m-png-png.png"/>
        <CardContainer>
          <GameCard onClick={() => history.push(`${match.url}${match.url[match.url.length - 1] !== '/' ? '/' : ''}flappyBird`)}>
            <GameThumbnail images={["https://i.ibb.co/GHp33vn/jumper.png","https://i.ibb.co/nkRx7L3/Screen-Shot-2021-09-19-at-5-47-12-PM.png", "https://i.ibb.co/zSDLcsP/Screen-Shot-2021-09-19-at-5-42-56-PM.png", "https://i.ibb.co/3mzYqNF/editttt.png"]}/>
            <GameText>
              {isCell ? <p className="text-sm"><strong>Flappy Bird - </strong>Unlockable Features, Custom Bird Upload, Animations!</p>
                :
                <>
                  <h2 className="pt-5 text-lg md:text-xl">Flappy Bird -</h2>
                  <ul className="flex flex-col h-3/5 justify-evenly list-disc list-outside text-sm md:text-base relative left-4">
                    <li>Unlockable Features!</li>
                    <li>Custom Bird Upload!</li>
                    <li>Animations!</li>

                  </ul>
                </>
              }
            </GameText>
          </GameCard>
          <GameCard onClick={() => history.push(`${match.url}${match.url[match.url.length - 1] !== '/' ? '/' : ''}battleship`)}>
            <GameThumbnail images={["https://i.ibb.co/nzWNd3c/Screen-Shot-2021-09-19-at-10-24-03-PM.png","https://i.ibb.co/m5Jbjsf/Screen-Shot-2021-09-19-at-4-08-40-PM.png","https://i.ibb.co/RcN9Mz0/Screen-Shot-2021-09-19-at-10-21-39-PM.png"]}/>
            <GameText>
              {isCell ? <p className="text-sm"><strong>Battleship - </strong>The classic multiplayer game, built with Socket.io!</p>
                :
                <>
                  <h2 className="pt-5 text-lg md:text-xl">Battleship -</h2>
                  <ul className="flex flex-col h-3/5 justify-evenly list-disc list-outside text-sm md:text-base relative left-4">
                    <li>Classic Action!</li>
                    <li>Multiplayer!</li>
                    <li>Built with Socket.io!</li>

                  </ul>
                </>
              }
            </GameText>
          </GameCard>
        </CardContainer>
      </GameWrapper>
    </>
  );
};