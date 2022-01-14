import React, {useState} from 'react';

const useModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return {
    visible,
    showModal,
    hideModal,
  };
};

export default useModal;
