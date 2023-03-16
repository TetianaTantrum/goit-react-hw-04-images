import { useState } from 'react';
// import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { Item, Image } from '../ImageGalleryItem/ImageGalleryItem.styled';

export default function ImageGalleryItem({ image }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <>
      <Item>
        <Image src={webformatURL} alt={tags} onClick={toggleModal} />
      </Item>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
          {/* <SideButtons /> */}
        </Modal>
      )}
    </>
  );
}

// export default function ImageGalleryItem({ image, id, src, srcmodal, alt }) {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => setShowModal(!showModal);

//   return (
//     <>
//       <Item key={image.id}>
//         <Image src={src} alt={alt} onClick={toggleModal} />
//       </Item>
//       {showModal && (
//         <Modal onClose={toggleModal}>
//           <img src={srcmodal} alt={alt} />
//           {/* <SideButtons /> */}
//         </Modal>
//       )}
//     </>
//   );
// }
// ImageGalleryItem.propTypes = {
//   image: PropTypes.object.isRequired,
//   src: PropTypes.string.isRequired,
//   srcmodal: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Modal from '../Modal/Modal';
// import { Item, Image } from '../ImageGalleryItem/ImageGalleryItem.styled';
// export default class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };
//   render() {
//     const { id, src, srcmodal, alt } = this.props;
//     return (
//       <div>
//         <Item key={id}>
//           <Image src={src} alt={alt} onClick={this.toggleModal} />
//         </Item>
//         {this.state.showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={srcmodal} alt={alt} />
//             {/* <SideButtons /> */}
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }

// ImageGalleryItem.propTypes = {
//   onSubmit: PropTypes.func,
//   image: PropTypes.object.isRequired,
//   src: PropTypes.string.isRequired,
//   srcmodal: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };
