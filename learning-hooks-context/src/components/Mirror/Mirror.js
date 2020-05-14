import React from "react";

// import { Container } from './styles';
import { useCount } from "../../content/Count";
function Mirror() {
  const { count} = useCount();
  
    return (<>
        <hr></hr>
        Mirror: {count}
    </>);
}
export default Mirror;
