import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal
      onClose={handleClose}
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          magna dui, dignissim sed porttitor in, ullamcorper vel ex. Duis
          aliquam lacinia lorem, mattis aliquet nunc pulvinar eget. Morbi nec
          dolor lacinia, semper mauris a, malesuada urna. Praesent vel massa
          varius, facilisis eros non, mollis justo. Aenean vel dolor porta justo
          laoreet rutrum. Suspendisse potenti. Nullam vulputate orci nisi, eu
          aliquam diam interdum ut. Aliquam erat volutpat. Donec in tincidunt
          tortor. Quisque faucibus malesuada lorem, vel iaculis velit. Donec
          accumsan convallis sem mattis vulputate. Praesent porta velit eget
          felis consectetur, in ultricies mauris tempus. Vivamus bibendum purus
          vel justo volutpat, vel iaculis metus sagittis. Phasellus vehicula
          metus eu magna posuere, sit amet ullamcorper justo semper. In semper
          augue nibh, eget mollis urna pulvinar sed.
        </div>
      }
      actionBar={
        <div>
          <Button warning onClick={handleClose}>
            Dismiss
          </Button>
        </div>
      }
    />
  );
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna
        dui, dignissim sed porttitor in, ullamcorper vel ex. Duis aliquam
        lacinia lorem, mattis aliquet nunc pulvinar eget. Morbi nec dolor
        lacinia, semper mauris a, malesuada urna. Praesent vel massa varius,
        facilisis eros non, mollis justo. Aenean vel dolor porta justo laoreet
        rutrum. Suspendisse potenti. Nullam vulputate orci nisi, eu aliquam diam
        interdum ut. Aliquam erat volutpat. Donec in tincidunt tortor. Quisque
        faucibus malesuada lorem, vel iaculis velit. Donec accumsan convallis
        sem mattis vulputate. Praesent porta velit eget felis consectetur, in
        ultricies mauris tempus. Vivamus bibendum purus vel justo volutpat, vel
        iaculis metus sagittis. Phasellus vehicula metus eu magna posuere, sit
        amet ullamcorper justo semper. In semper augue nibh, eget mollis urna
        pulvinar sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna
        dui, dignissim sed porttitor in, ullamcorper vel ex. Duis aliquam
        lacinia lorem, mattis aliquet nunc pulvinar eget. Morbi nec dolor
        lacinia, semper mauris a, malesuada urna. Praesent vel massa varius,
        facilisis eros non, mollis justo. Aenean vel dolor porta justo laoreet
        rutrum. Suspendisse potenti. Nullam vulputate orci nisi, eu aliquam diam
        interdum ut. Aliquam erat volutpat. Donec in tincidunt tortor. Quisque
        faucibus malesuada lorem, vel iaculis velit. Donec accumsan convallis
        sem mattis vulputate. Praesent porta velit eget felis consectetur, in
        ultricies mauris tempus. Vivamus bibendum purus vel justo volutpat, vel
        iaculis metus sagittis. Phasellus vehicula metus eu magna posuere, sit
        amet ullamcorper justo semper. In semper augue nibh, eget mollis urna
        pulvinar sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna
        dui, dignissim sed porttitor in, ullamcorper vel ex. Duis aliquam
        lacinia lorem, mattis aliquet nunc pulvinar eget. Morbi nec dolor
        lacinia, semper mauris a, malesuada urna. Praesent vel massa varius,
        facilisis eros non, mollis justo. Aenean vel dolor porta justo laoreet
        rutrum. Suspendisse potenti. Nullam vulputate orci nisi, eu aliquam diam
        interdum ut. Aliquam erat volutpat. Donec in tincidunt tortor. Quisque
        faucibus malesuada lorem, vel iaculis velit. Donec accumsan convallis
        sem mattis vulputate. Praesent porta velit eget felis consectetur, in
        ultricies mauris tempus. Vivamus bibendum purus vel justo volutpat, vel
        iaculis metus sagittis. Phasellus vehicula metus eu magna posuere, sit
        amet ullamcorper justo semper. In semper augue nibh, eget mollis urna
        pulvinar sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna
        dui, dignissim sed porttitor in, ullamcorper vel ex. Duis aliquam
        lacinia lorem, mattis aliquet nunc pulvinar eget. Morbi nec dolor
        lacinia, semper mauris a, malesuada urna. Praesent vel massa varius,
        facilisis eros non, mollis justo. Aenean vel dolor porta justo laoreet
        rutrum. Suspendisse potenti. Nullam vulputate orci nisi, eu aliquam diam
        interdum ut. Aliquam erat volutpat. Donec in tincidunt tortor. Quisque
        faucibus malesuada lorem, vel iaculis velit. Donec accumsan convallis
        sem mattis vulputate. Praesent porta velit eget felis consectetur, in
        ultricies mauris tempus. Vivamus bibendum purus vel justo volutpat, vel
        iaculis metus sagittis. Phasellus vehicula metus eu magna posuere, sit
        amet ullamcorper justo semper. In semper augue nibh, eget mollis urna
        pulvinar sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna
        dui, dignissim sed porttitor in, ullamcorper vel ex. Duis aliquam
        lacinia lorem, mattis aliquet nunc pulvinar eget. Morbi nec dolor
        lacinia, semper mauris a, malesuada urna. Praesent vel massa varius,
        facilisis eros non, mollis justo. Aenean vel dolor porta justo laoreet
        rutrum. Suspendisse potenti. Nullam vulputate orci nisi, eu aliquam diam
        interdum ut. Aliquam erat volutpat. Donec in tincidunt tortor. Quisque
        faucibus malesuada lorem, vel iaculis velit. Donec accumsan convallis
        sem mattis vulputate. Praesent porta velit eget felis consectetur, in
        ultricies mauris tempus. Vivamus bibendum purus vel justo volutpat, vel
        iaculis metus sagittis. Phasellus vehicula metus eu magna posuere, sit
        amet ullamcorper justo semper. In semper augue nibh, eget mollis urna
        pulvinar sed.
      </p>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
