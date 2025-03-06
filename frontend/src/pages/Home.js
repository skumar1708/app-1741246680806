import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameBoard from '../components/GameBoard';

function Home() {
  return (
    <div>
      <Header />
      <GameBoard />
      <Footer />
    </div>
  );
}

export default Home;