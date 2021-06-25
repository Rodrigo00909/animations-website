import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero'
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import Info from './components/Info';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <Info />
    </div>
  );
}

export default App;
