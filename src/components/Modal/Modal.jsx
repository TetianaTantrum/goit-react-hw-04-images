import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalW } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalW>{children}</ModalW>
    </Overlay>,
    modalRoot
  );
};

export default Modal;

// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import { Overlay, ModalW } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeydown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeydown);
//   }
//   handleKeydown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.handleBackdropClick}>
//         <ModalW>{this.props.children}</ModalW>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }
// export default Modal;
