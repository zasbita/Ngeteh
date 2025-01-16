import React, { useEffect, useState } from "react";
import useIframe from "./hooks/useIframe";

function App() {
  const { data } = useIframe();
  const [pesan, setPesan] = useState('');

  useEffect(() => {
    if (data.data) {
      setPesan(data.data);
    } else {
      setPesan('Halo ini remote app');
    }
  }, [data]);

  return (
    <div>
      <h4>{pesan}</h4>
    </div>
  );
}

export default App;
