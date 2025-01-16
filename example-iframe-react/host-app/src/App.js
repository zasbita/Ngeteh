import React, { useEffect } from "react";
import useIframe from "./hooks/useIframe";

function App() {
  const { iframeProps, sendIframeMessage } = useIframe('http://localhost:3001');

  return (
    <div>
      <h1>Host App</h1>
      <iframe {...iframeProps} onLoad={()=>sendIframeMessage('data','Halo dari Host app')}/>
    </div>
  );
}

export default App;
