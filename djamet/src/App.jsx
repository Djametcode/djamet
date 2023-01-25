import React, { createContext, createRef, useRef, useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";

export const ContextApp = createContext(null)

const App = () => {
  const [title, setTitle] = useState('Djamet Coder');

  return (
    <ContextApp.Provider value={{title, setTitle}}>
      <div>
        <Header />
        <Main />
      </div>
  </ContextApp.Provider>
  )
 
}

export default App;