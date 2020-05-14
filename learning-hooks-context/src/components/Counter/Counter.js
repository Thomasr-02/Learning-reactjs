import React from "react";
import { useCount } from "../../content/Count";
function Counter() {
  const { count, setCount } = useCount();
  return (
    <>
      Count: {count}
      <button
        onClick={() => {
          setCount(count+1);
        }}
      >
        Some
      </button>
    </>
  );
}

export default Counter;
