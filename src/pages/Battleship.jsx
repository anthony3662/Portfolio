import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import useMedia from '../utility/useMedia.js';
import twBreakpoints from '../utility/twBreakpoints.js';

const BattleshipWrapper = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-around
    py-5
    md:py-10
    w-full
  `}
`;

const LinkPanel = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    md:items-start
  `}
`;

const InstructionPanel = styled.div`

  ${tw`
    flex
    flex-col
    w-full
    md:w-1/2
    px-4
  `}

`

export default function Battleship() {
  const isMobile = useMedia(undefined, twBreakpoints.md - 1);
  return (
    <BattleshipWrapper>
      <LinkPanel>
        <img className="battleshipLandingImage" src="https://i.ibb.co/nzWNd3c/Screen-Shot-2021-09-19-at-10-24-03-PM.png"/>
        <a href="https://battleshipminiapp.herokuapp.com" target="_blank" className="battleshipPlay whitespace-nowrap text-center text-6xl rounded-2xl bg-blue-400 p-5 font-sans text-white" type="submit">Play Now!</a>
        {isMobile && <h2 className="px-4 m-3 text-red-500 text-lg">This game may not work well with a mobile device. Keep on the lookout for an upcoming React Native release!</h2>}
      </LinkPanel>
      <InstructionPanel>
        <p className="px-4 xl:text-lg"><strong>Welcome to Battleship! The game starts once both players have placed their ships.</strong></p>
        <p className="px-4 relative left-4 my-3 xl:text-lg"><strong>3 ways to play - </strong></p>
        <ol className="px-4 list-decimal list-outside relative left-6 xl:text-lg">
          <li>Send the link to a friend!</li>
          <li>Open the Play Now link in two tabs and play yourself</li>
          <li>Message me and I'll play you while we discuss employment opportunities!</li>
        </ol>
        <a className="px-8 my-3 text-blue-700 xl:text-lg hover:text-blue-400" href="https://battleshipminiapp.herokuapp.com">battleshipminiapp.herokuapp.com</a>
        <a href="https://github.com/anthony3662/mini-apps/tree/master/ec2-battleship" target="_blank">
          <img className="pl-4 workGithubLogo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"/>
        </a>
      </InstructionPanel>
    </BattleshipWrapper>
  );
};