import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/navbarComp";

function App() {
  document.body.style = 'background: black;';

  return (
    <div className="App" style={{
      backgroundColor: 'black',
    }}>
      <NavbarComp/>
    </div>
  );
}

export default App;