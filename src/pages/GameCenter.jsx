import React from 'react';
import GameRoutes from '../routes/GameRoutes.jsx';
import useMedia from '../utility/useMedia.js';
import twBreakpoints from '../utility/twBreakpoints.js';
import tw from 'twin.macro';
import styled from 'styled-components';

const MobileNavBuffer = styled.div`
  ${tw`
    w-full
    h-24
    sm:h-28
  `}
`;


export default function GameCenter() {
  const isMobile = useMedia(undefined, twBreakpoints.md - 1);

  return (
    <>
      {isMobile && <MobileNavBuffer/>}
      <GameRoutes />
    </>
  );
}