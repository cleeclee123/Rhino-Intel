import React, { useState, useEffect } from "react";

function PrettyPrint(props){
  return <pre>{JSON.stringify(props.jsonObj,null,2)}</pre>
}

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members").then(res => 
      res.json()).then(data => {
        setData(data);
      }
    );
  }, []);

  console.log(data);

  return (
    <div>
      <PrettyPrint jsonObj={data} />
    </div>
  );
}

export default App;