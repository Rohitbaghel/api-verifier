import React from "react";
import { useHistory } from "react-router-dom";

const ViewButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/view");
  };

  return <button onClick={handleClick}>View</button>;
};

export default ViewButton;
