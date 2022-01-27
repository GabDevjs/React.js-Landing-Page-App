import React from "react";
import GlobalStyle from './globalStyles';
import About from "./Components/About";
import Feature from "./Components/Feature";
import Presentation from "./Components/Presentation";
import AboutImage from './images/about.png';
import Download from './images/download.png';
import Header from "./Components/Header";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header/>
      <Feature />
      <About image={AboutImage} title='Comers With All You Neved For Dally Life' button='Get The App' />
      <Presentation />
      <About image={Download} title='Download And Get the App Now' button='Download' />
      <Contact/>
    </div>
  );
}

export default App;