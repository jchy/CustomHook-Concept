import React, { useEffect, useState } from "react";

function useTimeout(delay) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return ready;
}

export default function () {
  const isReady = useTimeout(2000);
  return (
    <div>
      <h3>Custom Hook</h3>
      {isReady && "READY"}
      {!isReady && "Not Ready"}
    </div>
  );
}
