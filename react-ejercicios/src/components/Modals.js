import React from "react";
import { useModal } from "../hooks/useModal";
import ContactFor from "./ContactForm";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import SongSearch from "./SongSearch";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openContact, closeContact] = useModal(false);
  const [isOpenSearchSong, openSearchSong, closeSearchSong] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Contenido de Modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Contenido de Modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
      <button onClick={openContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeContact}>
        <ContactFor />
      </Modal>
      <button onClick={openSearchSong}>Modal Buscador de Canciones</button>
      <Modal isOpen={isOpenSearchSong} closeModal={closeSearchSong}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal en Portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal en Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro modo del DOM
          diferente a donde carga nuestra app de React, gracias a un React
          Portal.
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="Tech" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
