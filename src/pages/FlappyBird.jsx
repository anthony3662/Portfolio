import React from 'react';
import App from './FlappyBird/App.jsx';
import styled from 'styled-components';
import useMedia from '../utility/useMedia.js';
import twBreakpoints from '../utility/twBreakpoints.js';

import tw from 'twin.macro';

const GameWrapper = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    w-full
  `}
  overflow: hidden;
`
export default function FlappyBird() {
  const isMobile = useMedia(undefined, twBreakpoints.md - 1);
  return (
    <GameWrapper>
      {isMobile && <h2 className="m-3 text-red-500 text-lg">This game may not work well with a mobile device. Keep on the lookout for an upcoming React Native release!</h2>}
      <App />
    </GameWrapper>
  );
}