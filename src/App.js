import React from "react";
import GlobalStyle from './globalStyles';
import About from "./Components/About";
import Feature from "./Components/Feature";
import Presentation from "./Components/Presentation";
import AboutImage from './images/about.png';
import Download from './images/download.png';
import './App.css'
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header/>
      <Feature />
      <About image={AboutImage} title='Comers With All You Neved For Dally Life' button='Get The App' />
      <Presentation />
      <About image={Download} title='Download And Get the App Now' button='Download' />
    </div>
  );
}

export default App;