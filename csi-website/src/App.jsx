import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import GradientBG from './components/GradientBG';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <GradientBG />
    </div>
  );
}

export default App;
