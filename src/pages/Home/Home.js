import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import MainContainer from '../../components/MainContainer/MainContainer';
import SectionContents from '../../components/SectionContents/SectionContents';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <MainContainer>
        <Main></Main>
        <SectionContents></SectionContents>
      </MainContainer>
      <Footer></Footer>
    </div>
  );
};

export default Home;
