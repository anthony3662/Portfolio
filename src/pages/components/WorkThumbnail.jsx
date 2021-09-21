import React, {useState, useEffect} from 'react';
import useMedia from '../../utility/useMedia.js';
import twBreakpoints from '../../utility/twBreakpoints.js';


export default function WorkThumbnail({images, animate}) {
  const isMobile = useMedia(undefined, twBreakpoints.md - 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if(animate) {
      const pid = setInterval(() => setCurrentIndex(index => (index + 1) % images.length), 5000);
      return () => clearInterval(pid);
    }
  }, [animate])
  return (
    <div className={`imageWrapper workThumbnail w-full md:w-1/2 ${!isMobile ? 'workThumbnailMd' : ''}`}>
      <svg onClick={() => setCurrentIndex(index => (index + 1) % images.length)} className={`${animate ? 'hidden' : ''} cycleRight`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492.004 492.004"><path fill="rgb(0,212,255)" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"></path></svg>
      <svg onClick={() => setCurrentIndex(index => (index - 1) < 0 ? images.length - 1 : (index - 1))} className={`${animate ? 'hidden' : ''} cycleLeft`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492.004 492.004"><path fill="rgb(0,212,255)" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"></path></svg>

      <img className="workImage" key={currentIndex}  src={images[currentIndex]}/>
    </div>
  );
};