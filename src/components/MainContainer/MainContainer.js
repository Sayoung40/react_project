import React from 'react';
import './MainContainer.css';
import Main from '../Main/Main';
import SectionContents from '../SectionContents/SectionContents';
import MainBanner from '../Main/MainBanner';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <Main></Main>
      <SectionContents></SectionContents>
    </div>
  );
};

export default MainContainer;
