import React from 'react';
import './App.css';
import Header from './components/header';
import Homepage from './components/homepage';
import MainBanner from "./components/main-banner";

function App() {
  return (
<body>
  <div class="container">
    <main>
      <Header />
      <MainBanner />
      <Homepage />
    </main>
  </div>
</body>
  );
}

export default App;
