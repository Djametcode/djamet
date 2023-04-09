import React, { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Sidebar from "./component/sidebar";

const MyPortofolio = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {toggle && <Sidebar setToggle={setToggle} />}
      <Header setToggle={setToggle} />
      <div>
        <Main />
      </div>
    </div>
  );
};

const App = () => {
  return <MyPortofolio />;
};

export default App;
