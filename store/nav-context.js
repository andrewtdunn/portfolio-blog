import { createContext, useState } from "react";

const NavigationContext = createContext({
  leftOpen: false,
  rightOpen: false,
  modalOpen: false,
  openLeftNav: () => {},
  openRightNav: () => {},
  closeNav: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export function NavigationContextProvider(props) {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const context = {
    leftOpen,
    rightOpen,
    modalOpen,
    openLeftNav: openLeftNavHandler,
    openRightNav: openRightNavHandler,
    closeNav: closeNavHandler,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
  };

  function openLeftNavHandler() {
    setLeftOpen(true);
    setRightOpen(false);
  }

  function openRightNavHandler() {
    setLeftOpen(false);
    setRightOpen(true);
  }

  function closeNavHandler() {
    setLeftOpen(false);
    setRightOpen(false);
  }

  function openModalHandler() {
    setModalOpen(true);
  }

  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <NavigationContext.Provider value={context}>
      {props.children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
