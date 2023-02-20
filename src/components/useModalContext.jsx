import React, { createContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider(props) {
  const [modalValue, setModalValue] = useState(false);

  const toggleModalValue = () => {
    setModalValue(!modalValue);
  };

  const values = {
    modalValue,
    toggleModalValue,
  };

  return (
    <ModalContext.Provider value={values}>
      {props.children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
