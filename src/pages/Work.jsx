import React, {useState} from 'react';
import useMedia from '../utility/useMedia.js';
import twBreakpoints from '../utility/twBreakpoints.js';
import tw from 'twin.macro';
import styled from 'styled-components';
import WorkThumbnail from './components/WorkThumbnail.jsx';
import Switch from 'react-switch';

const MobileNavBuffer = styled.div`
  ${tw`
    w-full
    h-24
    sm:h-28
  `}
`;

const CardContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    w-screen
  `}
`;

const WorkCard = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    items-center
    w-full
    justify-center
    md:p-12
    max-w-screen-xl
  `}
  // border: solid 1px black;
  .imageWrapper {
    ${tw`
      my-5
      md:my-0
      md:mr-5
    `}
  }
  .workText {
    margin: 1.25rem 15%;
    ${tw`
      md:m-auto
      md:mr-auto
    `}
  }
`;

const WorkTextbox = styled.div`
  ${tw`
    flex
    flex-col
    self-start
    md:self-auto
  `}
  // border: solid 1px black;
`;


export default function Work() {
  const isMobile = useMedia(undefined, twBreakpoints.md - 1);

  const [checked, setChecked] = useState(true);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return (
    <>
      {isMobile && <MobileNavBuffer/>}
      <CardContainer>
        <img className="workLogo" src="https://i.ibb.co/QdSRLQT/work-design-sketch-name-png.png"/>
        <div className="flex items-center">
          <h3 className="text-lg sm:text-xl md:text-2xl mr-2">Display Mode - {checked ? 'Animated' : 'Carousel'}</h3>
          <Switch
            onChange={handleChange}
            checked={checked}
            className="react-switch ml-2"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
        <WorkCard>
          <WorkThumbnail animate={checked} images={["https://i.ibb.co/KVCxjLs/FECPO.png", "https://i.ibb.co/kJK6mM9/FECQA.png"]}/>
          <WorkTextbox className={`workText ${!isMobile ? 'workTextSizeStandardizer' : ''}`}>
            <h1 className="my-4 sm:text-lg  md:text-xl lg:text-2xl xl:text-4xl font-mono">E-Commerce Clothing Shop</h1>
            {isMobile ?
                <p> - JavaScript, React, HTML, CSS, AWS</p>
              :
                <ul className="lg:text-xl xl:text-2xl md:pl-2">
                <li>- JavaScript</li>
                <li>- React</li>
                <li>- HTML/CSS</li>
                <li>- AWS</li>
              </ul>
            }
            <a href="https://www.github.com/anthony3662/MVP" target="_blank">
              <img className="pl-2 workGithubLogo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"/>
            </a>
          </WorkTextbox>
        </WorkCard>
        <WorkCard>
          <WorkThumbnail animate={checked} images={["https://i.ibb.co/CtL3tj0/BO.png", "https://i.ibb.co/HzBdSBy/BOMob.png"]}/>
          <WorkTextbox className={`workText ${!isMobile ? 'workTextSizeStandardizer' : ''}`}>
            <h1 className="my-4 sm:text-lg  md:text-xl lg:text-2xl xl:text-4xl font-mono">Workout Planning App</h1>
            {isMobile ?
                <p> - JavaScript, React, HTML, CSS, MongoDB</p>
              :
                <ul className="lg:text-xl xl:text-2xl md:pl-2">
                <li>- JavaScript</li>
                <li>- React</li>
                <li>- HTML/CSS</li>
                <li>- MongoDB</li>
              </ul>
            }
            <a href="https://github.com/Wide-Open-Blue-Ocean/Blue-Ocean" target="_blank">
              <img className="pl-2 workGithubLogo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"/>
            </a>
          </WorkTextbox>
        </WorkCard>
        <WorkCard>
          <WorkThumbnail animate={checked} images={["https://i.ibb.co/y0kvvFN/sdcEG.png", "https://i.ibb.co/DrFPRGS/MONGODDD.png"]}/>
          <WorkTextbox className={`workText ${!isMobile ? 'workTextSizeStandardizer' : ''}`}>
            <h1 className="my-4 sm:text-lg  md:text-xl lg:text-2xl xl:text-4xl font-mono">Database and Scaling</h1>
            {isMobile ?
                <p> - NodeJS, MongoDB, Docker, AWS</p>
              :
                <ul className="lg:text-xl xl:text-2xl md:pl-2">
                <li>- NodeJS</li>
                <li>- MongoDB</li>
                <li>- Docker</li>
                <li>- AWS</li>
              </ul>
            }
            <a href="https://github.com/anthony3662/sdc" target="_blank">
              <img className="pl-2 workGithubLogo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"/>
            </a>
          </WorkTextbox>
        </WorkCard>
        <WorkCard>
          <WorkThumbnail animate={checked} images={["https://i.ibb.co/2dV2Y4v/Personal-MD.png", "https://i.ibb.co/VY4tKvt/Personal-SM.png","https://i.ibb.co/pP700tc/Personal-CL.png"]}/>
          <WorkTextbox className={`workText ${!isMobile ? 'workTextSizeStandardizer' : ''}`}>
            <h1 className="my-4 sm:text-lg  md:text-xl lg:text-2xl xl:text-4xl font-mono">Personal Website</h1>
            {isMobile ?
                <p> - React, Styled-Components, TailwindCSS, HTML, CSS</p>
              :
                <ul className="lg:text-xl xl:text-2xl md:pl-2">
                <li>- React</li>
                <li>- Styled-Components</li>
                <li>- TailwindCSS</li>
                <li>- HTML/CSS</li>
              </ul>
            }
            <a href="https://github.com/anthony3662/sdc" target="_blank">
              <img className="pl-2 workGithubLogo" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"/>
            </a>
          </WorkTextbox>
        </WorkCard>
      </CardContainer>
    </>
  );
}