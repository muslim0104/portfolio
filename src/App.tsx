import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Works/Projects";
import Work from "./Work/Work";
import Forms from "./Forms/Forms";
import Footers from "./Footer/Footers";

const App = () => {
    return (
        <div>
          <Header/>
          <Main/>
          <Skills/>
          <Projects/>
          {/*<Work/>*/}
          <Forms/>
          <Footers/>
        </div>
    );
};

export default App;