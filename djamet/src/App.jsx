import React, { createContext, createRef, useRef, useState } from "react";
import { HashRouter } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";

export const ContextApp = createContext(HashRouter)

const App = () => {
  const [title, setTitle] = useState('Djamet Coder');
  return (
    <ContextApp.Provider value={{title, setTitle}}>
      <div className=" sm:hidden">
        <Header />
        <Main />
      </div>
  </ContextApp.Provider>
  )
 
}

export default App;