import React from 'react';
import './App.css';
import Header from '../components/header';
import Etapes from '../components/etapes';
import MainBanner from "../components/main-banner";
import Footer from "../components/footer";

function App() {
  return (
<body>
  <div class="container">
    <main>
      <Header />
      <MainBanner />
      <Etapes />
      <Footer />
    </main>
  </div>
</body>
  );
}

export default App;
