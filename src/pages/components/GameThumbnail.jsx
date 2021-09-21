import React, {useState, useEffect} from 'react';
import useMedia from '../../utility/useMedia.js';
import twBreakpoints from '../../utility/twBreakpoints.js';


export default function GameThumbnail({images}) {
  const isMobile = useMedia(undefined, twBreakpoints.md - 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const pid = setInterval(() => setCurrentIndex(index => (index + 1) % images.length), 2000);
    return () => clearInterval(pid);
  }, [])
  return (
    <>
      <img key={currentIndex} className={`thumbnailImage object-contain w-full sm:w-auto sm:h-full ${isMobile ? 'thumbnailLimiter' : ''}`} src={images[currentIndex]} />
    </>
  );
};