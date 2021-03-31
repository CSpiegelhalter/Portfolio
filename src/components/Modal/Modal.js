
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ConfirmModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle}>Thanks for reaching out!</ModalHeader>
        <ModalBody>
          I will get back with you as soon as I can. Have a wonderful day!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ConfirmModal;