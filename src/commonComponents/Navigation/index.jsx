import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import useMedia from '../../utility/useMedia.js';
import twBreakpoints from '../../utility/twBreakpoints.js';
import MobileNav from './MobileNav.jsx';
import StandardNav from './StandardNav.jsx';
import GameCenter from '../../pages/GameCenter';


export default function Navigation() {
  const isMobile = useMedia(undefined, twBreakpoints.md - 1);

  return isMobile ? <MobileNav/> : <StandardNav/>
};